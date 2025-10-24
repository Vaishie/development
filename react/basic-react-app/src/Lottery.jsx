import { useState } from "react";
import {genTicket, sum} from "./helper"
import Ticket from "./ticket";
import Button from "./button"

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    };
    
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <h3>{isWinning && "Congratulations! You won!"}</h3>
        </div>
    );
}