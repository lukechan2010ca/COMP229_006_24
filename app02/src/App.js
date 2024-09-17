
import './App.css';
import React from 'react';

function App( {items} ) {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    items.map( (ingredients, i)=>
      React.createElement("li", { key: i }, ingredients)
    )
  )
}

export default App;
