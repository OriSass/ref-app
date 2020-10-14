import React, {useState, useEffect, useRef} from 'react'
import  Form from './Form';
function Comments() {

    const [commments, setComments] = useState([]);

    const mockComments = [
        {
            user: "kalia",
            content: "Woof"
        },
        {
            user: "Nahman",
            content: "Wauf wauf"
        },
        {
            user: "Phibi",
            content: "Meow"
        }
    ]
    useEffect(() => {
        setComments(mockComments);
    }, []) 
    return commments.length > 0 ? (
        <div key="comments-wrapper">
            <div key="comments">
                {commments.map((comment, index) => {
                    return <div key={index}>{comment.user}: {comment.content}</div>
                })}
            </div>
            <div key="add-comment-form">
                <Form onSubmit={(newComment) => {setComments(prevComments => [...prevComments, newComment])}} />
            </div>
        </div>
    ) : (<></>);
}

export default Comments
