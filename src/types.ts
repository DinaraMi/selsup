// Определяем типы параметров
export interface TextParam {
  id: number;
  name: string;
  type: 'text';
}

export interface NumberParam {
  id: number;
  name: string;
  type: 'number';
}

// Объединяем оба типа в один
export type Param = TextParam | NumberParam;

// Определяем тип значения параметра
export interface ParamValue {
  paramId: number;
  value: string;
}

// Определяем тип модели
export interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

// Определяем тип цвета
export interface Color {
  id: number;
  name: string;
}