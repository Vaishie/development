import {useState} from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments]=useState([
        {
            username: "@vj",
            remarks: "you have no scope for improvement",
            rating: -5,
        },
    ]);

    let newComment = (currComment)=>{
        setComments((currComments)=>[...currComments, currComment]);
    };

    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comments, idx)=>(
            <div className="comment" key={idx}>
                <span>{comments.remarks}</span>
                &nbsp;
                <span>(rating={comments.rating})</span>
                <p>- {comments.username}</p>
            </div>
            ))}

        </div>
        <br></br>
        <hr></hr>
        <CommentsForm newComment={newComment}/>
        </>
    )
}