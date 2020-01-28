const express = require('express');
const router = express.Router();
const Post = require('../model/Post')

// GET BACK ALL THE POSTS
router.get('/',async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({posts})
    } catch (error) {
        res.json({message: error });
        }
});

// SUBMITS A POST
router.post('/',async (req, res) => {
    
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = await post.save();
    res.json({savedPost})   
    } catch(err){
        res.json({message: err})
    }
   
});

// SPECIFIC POST

router.get('/:postId', async (req, res) => {
    try {
       const post = await Post.findById(req.params.postId); 
       res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

// DELETE A POST

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;