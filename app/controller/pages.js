class PagesController {
  welcome(req, res, next) {
    if (!req.user) return res.send("Hello univers");

    next()
  }
}

module.exports = PagesController;
