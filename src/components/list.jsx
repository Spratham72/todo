import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove_todo, toggle_status,remove_completed, edit_todo } from "../redux/action";
import { Navbar } from "./navbar";

export const Todo=()=>{

    const [bool,setBool]=useState(true); 
    const dispatch=useDispatch();
    const todos=useSelector(el=>el);
    const [data,setData]=useState([]);
    const [ed, setEdit]= useState();
    const [input, setInput] = useState({
        id:0,
        task: "",
        status: false,
        date: "",
        time: "",
      });
    useEffect(()=>{
        setData(todos)
    },[todos])
    const deletion=(el)=>{
        dispatch(remove_todo(el.id))
    }
    const toggle=(el)=>{
        dispatch(toggle_status(el.id))
    }
    const handleChange = (e) => {
       
        setInput({ ...input, [e.target.name]: e.target.value });
      };
    return <div id="tablecont">
        <Navbar/>
        <button id="remove" onClick={()=>{dispatch(remove_completed())}}>Delete Completed</button>
        {bool?<table id="table">
            <thead>
                <tr>
                <th>TASK</th>
                <th >STATUS <br /> (click to toggle status)</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>DELETE</th>
                <th>EDIT</th>
                </tr>
                
            </thead>
            <tbody>
        {data.length>0?data.map(el=>{return <tr key={el.id}>
            <td>{el.task}</td>
            {el.status?<td onClick={()=>{toggle(el)}} style={{"cursor":"pointer"}}>Complete</td>:<td onClick={()=>{toggle(el)}} style={{"cursor":"pointer"}}>Incomplete</td>}
            <td>{el.date}</td>
            <td>{el.time}</td>
            <td><img onClick={()=>{deletion(el)}} style={{"width":"20px", "cursor":"pointer"}} src="https://cdn.pixabay.com/photo/2014/04/03/00/42/delete-309164_1280.png" alt="" /></td>
            <td><img onClick={()=>{setEdit(el); setBool(false)}} style={{"width":"30px", "cursor":"pointer"}} src="https://spng.pngfind.com/pngs/s/70-704411_edit-red-icon-png-png-download-icon-transparent.png" alt="" /></td>
        </tr>
        }):null}
        </tbody>
        </table>: <div id="container">
     
     <div id="form">
     EDIT
      TASK: <br /><input
       type="text"
       name="task"
      
       placeholder="Edit task..."
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
     <button onClick={()=>{setInput({ ...input, ["id"]: ed.id}); console.log(input);dispatch(edit_todo(input)); setBool(true)}} id="button">Edit Todo</button>
     </div>
   </div>
}
    </div>
}