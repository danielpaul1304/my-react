import React, { Component } from "react"
import { MdDeleteForever } from "react-icons/md";

class TodoParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [], 
            newTodo: '', 
            editIndex: -1,
            editItem: ""
        };
    }

    addTodo = () => {
        const { todos, newTodo } = this.state;
        if (newTodo.trim() !== '') {
            this.setState({
                todos: [...todos, newTodo],
                newTodo: ''
            })
        }
    };

    handleDelete = (index) => {
        const { todos } = this.state;
        const removeItem = todos.filter((_, i) => i !== index)
        this.setState({ todos: removeItem })
    };

    handleEdit = (index) => {
        this.setState({
            editIndex: index,
            editItem: this.state.todos[index]
        });
    }
    handleSave = (index) => {
        const { editItem } = this.state;
        if (editItem.trim() !== "") {
            const updatedTodos = [...this.state.todos];
            updatedTodos[index] = editItem;
    
            this.setState({
                todos: updatedTodos,
                editIndex: -1,
                editItem: "",
            });
        }
    };
    
    handleInputChange = event => {
        this.setState({ newTodo: event.target.value })
    };

    render() {
        const { todos, newTodo } = this.state;
        return (
            <div class="container">
                <h1 style={{textAlign: "center" }}>Todo List</h1>
                <div id="add">
                <input type='text' placeholder="Add Task" value={newTodo} onChange={this.handleInputChange} />
                <button id="submit-btn" type="submit" onClick={this.addTodo}>Add</button>
                </div>
                <ul>
                {todos.map((todo, index) => (
    <li key={index}>
        {this.state.editIndex === index ? (
            <div>
                <input
                    type="text"
                    value={this.state.editItem}
                    onChange={(e) => this.setState({ editItem: e.target.value })}
                />
                <button onClick={() => this.handleSave(index)}>Save</button>
            </div>
        ) : (
            <div>
                {todo}
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}><MdDeleteForever/></button>
            </div>
        )}
    </li>
))}
                            
                </ul>
            </div>
        );
    }
}

export default TodoParent;