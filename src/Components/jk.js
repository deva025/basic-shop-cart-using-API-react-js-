import React, { useState } from "react";
const Ap=()=>{
const [name,Setname]=useState('')


const muu=(e)=>{
    e.preventDefault();
    console.log({name})
}
return (
    <form onSubmit={muu} >
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e)=>Setname(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
)
}

export default Ap;