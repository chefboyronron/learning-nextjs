import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const { commentId } = req.query;
    const comment = comments.find((comment) => {
        return comment.id === parseInt(commentId)
    });
    if( typeof comment !== 'undefined' ) {
        res.status(200).json(comment);
    } else {
        res.status(404).json({code:"404", message: 'Page not found'});
    }
}