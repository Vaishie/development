import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";

export default function addform() {
    const [task, setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandler=(evt)=>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };

    return (
        <>
        <form onSubmit={submitHandler}>
            <h3>Create a Todo:</h3>
            <input type="text" onChange={(e)=> setTask(e.target.value)}></input> <br></br><br></br>
            <button>Add Task</button><br></br><br></br>
        </form>
        </>
    )
}