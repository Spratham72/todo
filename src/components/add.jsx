import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/action";

import '../style/add.css'
import { Navbar } from "./navbar";
const reactUuid = require("react-uuid");

export const Add = () => {
  
  const dispatch = useDispatch();
  const [err,setErr]=useState(false);
  const data = useSelector((el) => el);
  const [input, setInput] = useState({
    id: 0,
    task: "",
    status: false,
    date: "",
    time: "",
  });
  const handleChange = (e) => {
    setErr(false);
    setInput({ ...input, [e.target.name]: e.target.value });
    
  };
  
  const addTodo = () => {
    setInput({ ...input, ["id"]: reactUuid() });
    input.date.length===0&&input.time.length===0?setErr(true):setErr(false);
    input.date.length!==0&&input.time.length!==0?dispatch(add_todo(input)):setErr(true);
    
  };
  console.log(data);
  return (
    <div id="main">
      <Navbar/>
    <div id="container">
     
      <div id="form">
      {err?<h3 id="error">Enter Date & Time</h3>:null}
       TASK: <br /><input
        type="text"
        name="task"
        placeholder="Enter task..."
        onChange={handleChange}
      /> <br />
      DATE: <br /><input
        type="date"
        name="date"
        placeholder="date"
        onChange={handleChange}
      /> <br />
      TIME: <br /><input
        type="time"
        name="time"
        placeholder="time"
        onChange={handleChange}
      /> <br />
      <button onClick={addTodo} id="button">Add Todo</button>
      </div>
    </div>
    </div>
  );
};
