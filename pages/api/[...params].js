export default function handler(req, res) {
    // get url segments return: ["segment1", "segment2" .....]
    const params = req.query.params;
    console.log(params);
    res.status(200).json(params);
}