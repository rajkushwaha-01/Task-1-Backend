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



module.exports = {createPosts}


