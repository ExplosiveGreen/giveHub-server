const mongoose = require("mongoose");
const { donationModel } = require("./donationModel");
const { donator, org } = require("./userModel");
const deliverySchema = new mongoose.Schema({
  donator: { type: mongoose.Schema.Types.ObjectId, ref: donator },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: org },
  delivery_date: { type: Date, default: Date.now },
  status: String,
  donations: { type: mongoose.Schema.Types.ObjectId, ref: donationModel },
});
const deliveryModel = mongoose.model("deliveries", deliverySchema);
module.exports = { deliveryModel, deliverySchema };
