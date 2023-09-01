import { useState } from "react";

function Hook() {
    const [counter, setCounter] = useState("Daniel");
    const [edited, setEdited] = useState("");
    const [todo, setTodo] = useState([]);
    const [edit, setEdit] = useState(-1);

    function addTodo() {
        if (counter.trim() !== "") {
            setTodo([...todo, counter]);
            setCounter("");
        }
    }

    const editNow = (index) => {
        setEdit(index);
        setEdited(todo[index]);
    };

    const saveNow = (index, editedValue) => {
        const updatedTodo = todo.map((value, i) =>
            i === index ? editedValue : value
        );
        setTodo(updatedTodo);
        setEdit(-1);
        setEdited("");
    };

    const deleteNow = (index) => {
        const updatedTodo = todo.filter((value, i) => i !== index);
        setTodo(updatedTodo);
    };

    return (
        <>
            <div className="container">
                <h1>TODO List</h1>
                <input value={counter} onChange={(e) => setCounter(e.target.value)} />
                <button onClick={addTodo}>Add</button>

                <ul>
                    {todo.map((indexvalue, index) => (
                        <li key={index}>
                            {indexvalue}
                            {edit === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={edited}
                                        onChange={(e) => setEdited(e.target.value)}
                                    />
                                    <button onClick={() => saveNow(index, edited)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => editNow(index)}>Edit</button>
                                    <button onClick={() => deleteNow(index)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Hook;