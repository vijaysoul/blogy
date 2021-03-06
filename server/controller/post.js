const models = require('../models');

const post = async (req, res)=>{
   let post = new models.Post(req.body);
      try {
        await post.save();
        res.json({
          message: "Post Created"
        })
      } catch (error) {
        console.log(error)
        res.status(500).json({
          message: "Post not created"
        })
      } 
}

const getPost = async (req, res)=>{
   const data = await models.Post.find();
    res.status(200).json(data);
}
module.exports = {post, getPost};