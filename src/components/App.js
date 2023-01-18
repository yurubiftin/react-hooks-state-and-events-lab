import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const  [isDark , setIsDark]= useState(false);

  const appClass = isDark ? "App dark" : "App light"

  function handleDarkModeClick(){
    setIsDark((isDark) => !isDark)

  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
        {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
      <div style={{background:isDark ? "black" : "white" ,padding:5}}>
      
      </div>
    </div>
  );
}

export default App;
