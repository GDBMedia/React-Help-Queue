
import React from 'react';
import Header from './Header';
import Queue from './Queue';

function App(props){
  return (
    <div>
      <Header/>
      <div className="container">
        <Queue/>
      </div>      
    </div>
  );
}

export default App;
