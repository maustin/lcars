import React from 'react';
//import { Route, Switch } from 'react-router-dom';
import LCARSHeader from './containers/LCARSHeader';
import LCARSContent from './containers/LCARSContent';

function App() {
  return (
    <div className='app'>
      <LCARSHeader />
      <LCARSContent />
    </div>
  );
}

export default App;