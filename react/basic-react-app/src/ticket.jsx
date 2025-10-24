import Ticketnum from "./ticketnum"
import "./ticket.css";

export default function ticket({ticket}) {
    return(
        <div className="ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
            <Ticketnum num={num} key={idx}/>
            ))}
        </div>
    );
}