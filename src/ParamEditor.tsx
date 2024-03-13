import React from 'react';
import { Param, Model } from './types';
// Определяем пропсы компонента и состояние
interface Props {
  params: Param[];
  model: Model;
}

interface State {
  editedParams: ParamValue[];
}

// Определяем тип значения параметра
interface ParamValue {
  paramId: number;
  value: string;
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editedParams: this.props.model.paramValues, // Инициализируем значения по умолчанию
    };
  }

  // Обработчик изменения значения параметра
  handleParamChange = (paramId: number, value: string | number) => {
    const { editedParams } = this.state;
    const index = editedParams.findIndex(param => param.paramId === paramId);
    if (index !== -1) {
      const updatedParams = [...editedParams];
      updatedParams[index] = { paramId, value: value.toString() }; // Приводим значение к строке
      this.setState({ editedParams: updatedParams });
    } else {
      this.setState({
        editedParams: [...editedParams, { paramId, value: value.toString() }], // Приводим значение к строке
      });
    }
  };

  // Получение полной структуры модели
  getModel = (): Model => {
    const { editedParams } = this.state;
    const { model } = this.props;
    return {
      paramValues: editedParams,
      colors: model.colors,
    };
  };

  render() {
    const { params } = this.props;
    const { editedParams } = this.state;

    return (
      <div>
        {params.map(param => (
          <div key={param.id}>
            <label>{param.name}:</label>
            {param.type === 'text' && (
              <input
                type="text"
                value={
                  editedParams.find(p => p.paramId === param.id)?.value || '' // Находим значение параметра
                }
                onChange={e => this.handleParamChange(param.id, e.target.value)} // Обработчик изменения параметра
              />
            )}
            {param.type === 'number' && (
              <input
                type="number"
                value={
                  editedParams.find(p => p.paramId === param.id)?.value || '' // Находим значение параметра
                }
                onChange={e => this.handleParamChange(param.id, parseInt(e.target.value))} // Обработчик изменения параметра
              />
            )}
          </div>
        ))}
        <button onClick={() => console.log(this.getModel())}>Сохранить</button>
      </div>
    );
  }
}

export default ParamEditor;
