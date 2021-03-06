const mongoose = require("mongoose");
const authController = require("../controllers/authController");
const emailController = require("../controllers/emailController");
const passport = require("passport");
const JWT = require("jwt-simple");
const keys = require("../config/keys");
const crypto = require("crypto");

const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });
const googleAuth = passport.authenticate("google", {
  session: false,
  scope: ["profile", "email"]
});

module.exports = app => {
  app.get("/user", requireAuth, (req, res) => {
    res.send({ hey: "there" });
  });

  app.get("/user/auth/google", googleAuth);

  app.get(
    "/user/auth/google/callback",
    passport.authenticate("google", {
      session: false,
      failureRedirect: "/signup"
    }),
    authController.googleToken
  );

  app.post("/user/signup", authController.signup);

  app.post("/user/signin", requireSignin, authController.signin);

  app.get("/confirmation/:token", emailController.confirmEmail);

  app.post("/user/forgot", emailController.forgot);

  app.get("/user/reset/:token", emailController.forgotTokenGet);

  app.post("/user/reset/:token", emailController.forgotTokenPost);
};
