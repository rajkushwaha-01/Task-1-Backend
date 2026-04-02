const jobModel = require("../models/job.model");


async function createPosts(req, res) {
  const { title, company, salary, location } = req.body;
  const userId = req.user._id;

  const post = await jobModel.create({
    title,
    company,
    salary,
    location,
    createdBy: userId,
  });

  res.status(201).json({
    message: "Post created Successfully",
  });
}


async function getallPost(req , res) {
    
    const posts = await jobModel.find();

    res.status(200).json({
        message:"post fetch successfully" , 
        posts
    })
}


async function getPostbyid(req , res) {
    const postid = req.params.id;  

    const posts = await jobModel.findById(postid);

    if (!posts) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
        message:"post fetch successfully" , 
        posts
    })
}


async function updatePostbyid(req , res) {
    const postid = req.params.id;  

    const {}

    const posts = await jobModel.findById(postid);

    if (!posts) {
      return res.status(404).json({
        message: "Post not found",
      });
    }



    res.status(200).json({
        message:"post fetch successfully" , 
        posts
    })
}





module.exports = {createPosts , getallPost , getPostbyid}


