
import './App.css'
import ToDoList from './ToDoList.jsx';
import Lottery from "./Lottery";
import Ticket from "./ticket";
import LudoBoard from "./LudoBoard.jsx";
import Form from "./form.jsx";
import CommentsForm from "./CommentsForm.jsx"
import Comment from "./Comment.jsx";
import Counter from "./Counter";

function App() {

  let winCondition = (ticket)=> {
    return ticket.every((num)=>num===ticket[0]);
    // return ticket[0]===0;
  }

  return(
    <>
    {/* <ToDoList/> */}
    {/* <Lottery n={3} winCondition={winCondition} /> */}
    {/* <LudoBoard /> */}
    {/* <Form /> */}
    {/* <Comment /> */}
    <Counter/>
    </>
  );
}

export default App