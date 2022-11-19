const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = postData.map((post) => post.get({plain:true}));

        res.render('homepage', {
            posts
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard')
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        
        const commentData = await Comments.findAll({
            where: {
                post_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        
        const post = postData.get({plain:true});
        const comments = commentData.map((comment) => comment.get({plain:true}));

        res.render('postPage', {
            post,
            comments
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;