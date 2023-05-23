
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");

  return (
    <div>
        <label htmlFor="">Enter your name:</label>
        <br />
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
