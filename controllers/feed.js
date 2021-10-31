exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First POst", content: "This is the first post!" }],
  });
};

exports.createPosts = (req, res, next) => {
    console.log(req.body)
  const title = req.body.title;
  const content = req.body.content;

  //Create post in db
  res.status(201).json({
    message: "Post created succesfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
