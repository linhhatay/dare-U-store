const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
    expiresIn: "3d",
  });
};

class AuthController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const newUser = await new User({
        email: email,
        password: hash,
      });

      await newUser.save();

      res.status(200).json({
        message: "Register Success!",
        user: {
          ...newUser._doc,
          password: "",
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      const invalidPassword = await bcrypt.compare(password, user.password);

      if (!user) {
        return res.status(404).json("Wrong email!");
      }

      if (!invalidPassword) {
        return res.status(404).json("Wrong password!");
      }

      if (user && invalidPassword) {
        const accessToken = createAccessToken({
          id: user._id,
          isAdmin: user.isAdmin,
        });

        const refreshToken = createRefreshToken({
          id: user._id,
          isAdmin: user.isAdmin,
        });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });

        const { password, ...other } = user._doc;
        return res.status(200).json({
          message: "Login Success!",
          accessToken,
          user: {
            ...other,
          },
        });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie("refreshToken");
      res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async refreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        return res.status(500).json({ msg: "You're not authenticated" });
      }
      const newAccessToken = createAccessToken({
        id: user._id,
        isAdmin: user.isAdmin,
      });
      const newRefreshToken = createRefreshToken({
        id: user._id,
        isAdmin: user.isAdmin,
      });
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
      });
    });
  }
}

module.exports = new AuthController();
