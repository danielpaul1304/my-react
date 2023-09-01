import React,{Component} from "react";

class Child1 extends React.Component{
   
    render(){
    return(
        <>
        <button onClick={this.props.dani}>Click</button>
        </>
    )
    }
}

export default Child1;