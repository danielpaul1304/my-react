import React, {Component} from "react"

class TodoParent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    addTodo = () => {
        const {todos, newTodo} = this.state;
        if(newTodo.trim() !== '') {
            this.setState({
                todos: [...todos, newTodo],
                newTodo: ''
            });
        }
    };

    handleInputChange = event => {
        this.setState({
            newtodo: event.target.value
        });
    };

    render(){
        const {todos, newTodo} = this.state;
        return(
            <div>
                <h2>Todo List</h2>
                <ul>
                    {todos.map((todo, index)=>(
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
                <input type='text' value={newTodo} onChange={this.handleInputChange}/>
                <button onclick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

export default TodoParent;