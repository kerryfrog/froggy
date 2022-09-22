const express = require("express");
const { request } = require("http");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();
const { Pattern } = require("../models");
const Sequelize = require("sequelize");

router.get("/", async (req, res, next) => {
  // res.render("pattern.html", {
  //   title: "froggy",
  //   customer: req.user,
  //   loginError: req.flash("loginError"),
  // });
  let resJson = { status: "N" };
  try {
    const randPattern = await Pattern.findAll({
      // attributes: ["id"],
      order: Sequelize.fn("RAND"),
      limit: 5, // limit으로 반환받을 row 수를 정할 수 있어요
    });
    resJson["status"] = "Y";
    // console.log(randPattern);
    return res.json(randPattern);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
