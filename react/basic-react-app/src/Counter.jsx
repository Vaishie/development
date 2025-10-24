import {useState, useEffect} from "react";

export default function Counter(){
    let [countx, setCountx]=useState(0);
    let [county, setCounty]=useState(0);
    
    const incCountx=()=> {
        setCountx((currCount)=>currCount+1);
    };

    const incCounty=()=> {
        setCounty((currCount)=>currCount+1);
    };

    useEffect(function printSomething(){
        console.log("this is the side effect");
    },
    [countx] //[]
);

    return (
        <div>
            <h1>Countx = {countx}</h1>
            <button onClick={incCountx}>+1</button>
            <h1>County = {county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}