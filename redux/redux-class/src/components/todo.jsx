import {useSelector} from "react-redux";
import AddForm from "./addform";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../features/todo/todoSlice";

export default function Todo() {
    const todos=useSelector((state)=> state.todos);
    const dispatch=useDispatch();

    const clickHandler=(id)=>{
        dispatch(deleteTodo(id));
    };

    return (
        <>
        <AddForm/>
        <h3>Todo List</h3>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}
                &nbsp; &nbsp;&nbsp;&nbsp;
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    );
}