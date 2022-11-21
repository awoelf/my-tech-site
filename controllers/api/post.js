const router = require('express').Router();
const { Post } = require('../../models');

// Create a post
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
});

// Edit a post
router.put('/', async (req, res) => {
	if (req.session.logged_in) {
		try {
			const postData = await Post.update(
				{
					title: req.body.title,
					content: req.body.content
				},
				{
					where: {
						id: req.body.post_id
					}
				}
			);
			res.status(200).json(postData);
		}
		catch (err) {
			res.status(400).json(err);
		}
	} else {
		document.location.replace('/login');
	}
});

// Delete a post
router.delete('/', async (req, res) => {
	if (req.session.logged_in) {
		try {
			const postData = await Post.destroy({
				where: {
					id: req.body.post_id
				}
			});
			res.status(200).json(postData);
		}
		catch (err) {
			res.status(400).json(err);
		}
	} else {
		document.location.replace('/login');
	}
});

module.exports = router;