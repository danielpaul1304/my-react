import React from "react";

class Parent1 extends React.Component{
    constructor(props){
super(props);
    }
    render(){
    return(
        <>
    <h1>Hello{this.props.superBike}</h1>
        </>
    )
    }
}

export default Parent1;