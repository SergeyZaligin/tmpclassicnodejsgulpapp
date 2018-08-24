const express = require("express");
const controller = require("../controllers/post");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/create", controller.index);
router.post("/create", controller.create);

module.exports = router;
