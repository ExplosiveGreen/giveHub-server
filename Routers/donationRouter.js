const { Router } = require("express");
// const {donationController}=require()
const donationRouter = new Router();
donationRouter.get("/", (req, res) => {
  res.json("gfgf");
});
module.exports = { donationRouter };
