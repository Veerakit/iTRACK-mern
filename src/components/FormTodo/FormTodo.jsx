import { useState } from "react";
import axios from "axios";
import { MdOutlineEditNote } from "react-icons/md";
import "./formtodo.css";

const FormTodo = ({listOfTodos, setListOfTodos}) => {

    const [text, setText] = useState("");
    const [popupActive, setPopupActive] = useState(false);

    const addTodo = () => {
        axios.post('https://itrack-mern.herokuapp.com/todos/todo/new', {
            text:text
        }).then(() =>{
           console.log("To do added!");
        }).then((response) => {
            setListOfTodos([
              ...listOfTodos,
              {
                text: text
              },
            ])}).catch(() => {
            alert("Error!");
        })
    };

    return(
        <div>
            <div className="addPopup-todo" onClick={() => setPopupActive(true)}><MdOutlineEditNote /></div>
                {popupActive ? (
                    <div className="popup-todo">
                        <div className="closePopup-todo" onClick={() => setPopupActive(false)}></div>
                        <div className="content">
                            <h3>Add Task</h3>
                            <input type="text" className="add-todo-input" onChange={e => setText(e.target.value)} value={text} />
                            <button className="button-add-todo" onClick={addTodo}>Create Task</button>
                        </div>
                    </div>
                ) : ''}
        </div>
    );
}

export default FormTodo;