import {useState} from "react"

export default function LudoBoard () {
   let [moves, setMoves] = useState({blue: 0, red: 0, green:0, yellow:0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue+1};
        });
        setArr((prevArr)=>{return[...arr,"blue moves"]});
    };

    let updateYellow = () => {
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow+1};
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green+1};
        });
    };

    let updateRed = () => {
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red+1};
        });
    };

   return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "#3c4280"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "#b0ab46"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "#3c8046"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "#803c49"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}