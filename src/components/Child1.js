import React from "react"
const Child1 = ({changeOpt1}) =>{
    return (
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={()=>{changeOpt1('Option 1')}}>Option 1</button>
        </div>
    )
}

export default Child1