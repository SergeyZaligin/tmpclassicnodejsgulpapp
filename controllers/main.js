const Post = require("../models/Post");

/**
 * get All posts
 */
module.exports.index = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render("index", {
      posts
    });
  } catch (error) {
    console.log(res, error);
  }
};
