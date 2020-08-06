import React from 'react';
import './css/reset.css';
import './css/style.css';
import MenuCart from './containers/MenuCart';

function App() {
  return (
    <div className="container">
      <div id="app-holder">
        <div>
          <MenuCart />
        </div>
      </div>
    </div>
  );
}

export default App;
