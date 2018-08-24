const Post = require("../models/Post");

module.exports.index = (req, res) => {
  res.render("create");
};
/**
 * get All posts
 */
module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find({});
  } catch (error) {
    console.log(res, error);
  }
};

/**
 * Create post
 */
module.exports.create = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      text: req.body.text
    });
    res.redirect("/");
  } catch (error) {
    console.log(res, error);
  }
};
