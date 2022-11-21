const router = require('express').Router();
const { Comment } = require('../../models');

// Create a comment
router.post('/', async (req, res) => {
	if (req.session.logged_in) {
		try {
			const commentData = await Comment.create({
				...req.body,
				user_id: req.session.user_id
			});
			res.status(200).json(commentData);
		}
		catch (err) {
			res.status(400).json(err);
		}
	} else {
		document.location.replace('/login');
	}
});

module.exports = router;