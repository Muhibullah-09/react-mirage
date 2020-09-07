import React from 'react';
import Todos from './components/Todos';
import MirageServer from './mirage'

MirageServer()


function App() {
  return (
    <div>
      <Todos />
    </div>
  );
}

export default App;
