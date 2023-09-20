const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Page
router.get("/", homeController.getIndex);

// Login
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Logout
router.get("/logout", authController.logout);

// Sign Up
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
