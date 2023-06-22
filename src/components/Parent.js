import React, { useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
const Parent = ()=>{
    let [selectedOption,setSelectedOption] = useState('');
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1
                changeOpt1={setSelectedOption}
            ></Child1>
            <Child2
                changeOpt2={setSelectedOption}
            ></Child2>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}
export default Parent