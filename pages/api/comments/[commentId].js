import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const { commentId } = req.query;

    if( req.method === "GET" ) {
        const comment = comments.find((comment) => {
            return comment.id === parseInt(commentId)
        });
        if( typeof comment !== 'undefined' ) {
            res.status(200).json(comment);
        } else {
            res.status(404).json({code:"404", message: 'Page not found'});
        }
    } else if ( req.method === 'DELETE' ) {
        const deletedComment = comments.find((comment) => {
            return comment.id === parseInt(commentId)
        });
        const index = comments.findIndex((comment) => {
            return comment.id === parseInt(commentId);
        })
        console.log(index);
        comments.splice(index, 1)

        res.status(200).json(deletedComment);
    }
    
}