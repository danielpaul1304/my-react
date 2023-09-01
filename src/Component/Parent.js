import React from "react";

function Parent(props) {

    return( 
    <>
    <button onClick={props.Click}>Parent Click</button>
    <h1>{props.Brand}</h1>
    </>
    )
}

export default Parent;