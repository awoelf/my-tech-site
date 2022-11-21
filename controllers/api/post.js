const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    if (req.session.logged_in) {
        try {
            const postData = await Post.create({
                ...req.body,
                user_id: req.session.user_id
            });
            res.status(200).json(postData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    } else {
        document.location.replace('/login');
    }
})

module.exports = router;