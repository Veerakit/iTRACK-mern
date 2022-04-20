import { ImBin } from "react-icons/im";
import axios from "axios";
import "./todo.css";

const Todo = ({ listOfTodos, setListOfTodos }) => {

    const deleteTodo = (_id) => {
        axios.delete(`https://itrack-mern.herokuapp.com/todos/todo/delete/${_id}`)
		.then(() =>{
			console.log("To do added!");
		 }).then(() => {
                setListOfTodos(
                    listOfTodos.filter((todo) => {
                        return todo._id !== _id;
                })
            )
        });
    };

	const completeTodo = async _id => {
		const data = await fetch(`https://itrack-mern.herokuapp.com/todos/todo/complete/${_id}`)
		.then(res => res.json());
			setListOfTodos(listOfTodos => listOfTodos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = data.complete;
			}
			return todo;
		}));
	}

	return (
		<div className="App">
			<h1>TO DO-List</h1>
      <div className="topic-container">
			  <h4>TASKBOARD</h4>
      </div>

			<div className="todo-box">
				<div className="todo-subbox">
					<div className="todo-innerbox">
				{listOfTodos.length > 0 ? listOfTodos.map(todo => (
					
					<div className={ "todo" + (todo.complete ? " is-complete" : "")} 
					key={todo._id} onClick={() => completeTodo(todo._id)}>
						<div className="checkbox"></div>

						<span className="text">{todo.text}</span>

						<span className="delete-todo" onClick={() => deleteTodo(todo._id)}><ImBin/></span>
					</div>
					)) : (
						<p>Add something here (^_^)</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Todo;