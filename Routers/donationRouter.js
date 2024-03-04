const { Router } = require("express");
const { donationController } = require("../Controllers/donationController");
const donationRouter = new Router();
donationRouter.get("/", donationController.getDonation);
donationRouter.get("/:id", donationController.getDonationbyId);
donationRouter.post("/", donationController.createDonation);
donationRouter.delete("/:id", donationController.deleteDonaotion);
donationRouter.put("/:id", donationController.updateDonation);
module.exports = { donationRouter };
