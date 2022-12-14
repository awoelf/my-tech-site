const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [
				{
					model: User,
					attributes: ['username']
				}
			],
			order: [
				['dateCreated', 'DESC']
			]
		});

		const posts = postData.map((post) => post.get({plain:true}));

		res.render('homepage', {
			posts,
			logged_in: req.session.logged_in
		});
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
	try {
		const postData = await Post.findAll({
			where: {
				user_id: req.session.user_id
			},
			include: [
				{
					model: User,
					attributes: ['username']
				}
			],
			order: [
				['dateCreated', 'DESC']
			]
		});

		const posts = postData.map((post) => post.get({plain:true}));

		res.render('dashboard', {
			posts,
			logged_in: true
		});
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Log in page
router.get('/login', async (req, res) => {
	try {
		if (req.session.logged_in) {
			res.redirect('/dashboard');
			return;
		}
		res.render('login');
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Post page
router.get('/post/:id', withAuth, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username', 'id']
				}
			]
		});
        
		const commentData = await Comment.findAll({
			where: {
				post_id: req.params.id
			},
			include: [
				{
					model: User,
					attributes: ['username']
				}
			],
			order: [
				['dateCreated', 'DESC']
			]
		});
        
		const post = postData.get({plain:true});
		const comments = commentData.map((comment) => comment.get({plain:true}));

		if (req.session.user_id === post.user.id) {
			userPost = true;
		} else {
			userPost = false;
		}

		res.render('postPage', {
			post,
			comments,
			userPost,
			logged_in: true
		});
	}
	catch (err) {
		res.status(500).json(err);
	}
});



module.exports = router;