import { useState } from 'react';

function CommentsPage() {
    
    // get request
    const [ comments, setComments ] = useState([]);
    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    // post request
    const [ comment, setComment ] = useState('');
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <input 
                type='text' 
                value={comment} 
                onChange={(e)=> setComment(e.target.value)}
            />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            {comment.id} {comment.text}
                        </div>
                    )
                })
            }
        </>
    );
}

export default CommentsPage;