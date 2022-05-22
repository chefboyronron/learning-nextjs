export default function handler(req, res) {
    res.setPreviewData({
        name: 'Ron'
    });
    res.redirect(req.query.redirect);
}