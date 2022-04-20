import { useState,useEffect } from "react";
import axios from "axios";

import Todo from "../components/Todo/Todo";
import FormTodo from "../components/FormTodo/FormTodo";

const TodoBoard = () => {
  const [listOfTodos, setListOfTodos] = useState([]);
    
  useEffect(() => {
      axios.get("https://itrack-mern.herokuapp.com/todos")
      .then((response) => {
          setListOfTodos(response.data);
      })
      .catch(() => {
          console.log("ERROR");
      })
  },[]);

  return (
      <div className="App">
          <Todo listOfTodos={listOfTodos} setListOfTodos={setListOfTodos} />
          <FormTodo listOfTodos={listOfTodos} setListOfTodos={setListOfTodos} />
      </div>
  );
}

export default TodoBoard;