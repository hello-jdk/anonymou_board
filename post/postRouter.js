const router = require("express").Router();
const postModel = require("../models/postModel");

router.get("/", async (req, res) => {
  await postModel.create({ user_id: "id", user_pw: "pw", title: "title", content: "content" });
});

module.exports = router;

/*
id
user_id
user_pw
title
content
*/
