const jwt = require("jsonwebtoken");

class MiddlewareController {
  async verifyToken(req, res, next) {
    const token = req.headers.token;
    const refreshToken = req.cookies.refreshToken;

    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You're not authenticated");
    }
  }

  async authorization(req, res, next) {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  }
}

module.exports = new MiddlewareController();
