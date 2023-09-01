import React from "react";

function Student(props){
    return(
        <div>
            <h2>Name List</h2>
        <ul>
            {props.arr.map((names, index)=> (
                <li key={index}>{names}</li>

            ))}
        </ul>
        </div>
    );

}

export default Student;