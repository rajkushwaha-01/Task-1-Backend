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

async function getallPost(req, res) {
  const posts = await jobModel.find();

  res.status(200).json({
    message: "post fetch successfully",
    posts,
  });
}

async function getPostbyid(req, res) {
  const postid = req.params.id;

  const posts = await jobModel.findById(postid);

  if (!posts) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.status(200).json({
    message: "post fetch successfully",
    posts,
  });
}

async function updatePostbyid(req, res) {
  try {
    const postid = req.params.id;

    const { title, company, salary, location } = req.body;

    const posts = await jobModel.findById(postid);

    if (!posts) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (posts.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    posts.title = title || posts.title;
    posts.company = company || posts.company;
    posts.salary = salary || posts.salary;
    posts.location = location || posts.location;

    await posts.save();

    res.status(200).json({
      message: "Post updated successfully",
      posts,
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
}


async function deletePostbyid(req,res) {
    const postid = req.params.id;

    const posts = await jobModel.findById(postid);

    if (!posts) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (posts.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

 await jobModel.findByIdAndDelete(postid);
    res.status(200).json({
        message:"post delete successfully"
    })
}

module.exports = { createPosts, getallPost, getPostbyid , updatePostbyid , deletePostbyid};
