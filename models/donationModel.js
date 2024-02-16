const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    name: String,
    amount: Number,
  },
  { _id: false }
);
const donationSchema = new mongoose.Schema({
  items: [itemSchema],
  status: String,
});
const donationModel = mongoose.model("donations", donationSchema);
module.exports = { donationModel, donationSchema };
