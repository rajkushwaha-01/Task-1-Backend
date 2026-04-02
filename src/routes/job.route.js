const express = require("express");
const userIdentifire = require("../middleware/auth.middleware");
const postController = require("../controllers/job.controller");

const postRouter = express.Router();

/**
 * @route post /api/post/jobs
 * @access Private
 * @description only loging user can create jobs.
 */

postRouter.post("/jobs", userIdentifire, postController.createPosts);
/**
 * @route get /api/post/get
 * @access public
 * @description Get all jobs on Desbord
 */

postRouter.get("/get", postController.getallPost);

/**
 * @route get /api/post/get/:id
 * @access public
 * @description Get a post by id 
 */

postRouter.get('/get/:id' , postController.getPostbyid)

module.exports = postRouter;
