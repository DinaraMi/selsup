import React from 'react';
import ParamEditor from './ParamEditor';
import { Param, Model } from './types';

function App() {
  const params: Param[] = [
    { id: 1, name: 'Назначение', type: 'text' },
    { id: 2, name: 'Длина', type: 'text' }
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' }
    ],
    colors: []
  };

  return (
    <div className="App">
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
