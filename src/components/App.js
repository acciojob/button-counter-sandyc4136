
import React from "react";
import './../styles/App.css';

const App = () => {
let c=0;
  function count(){
   c+=1;
   console.log(c);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={count}> Click me </button>
    </div>
  )
}

export default App
