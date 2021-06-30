const newRouter = require("./news");

function route(app) {
  app.use("/news", newRouter);

  // app.get('/' , (req , res) =>{
  //     return res.render('home')
  // })
  // app.get('/search' , (req , res) =>{
  //     return res.render('search')
  // })
}

module.exports = route;
