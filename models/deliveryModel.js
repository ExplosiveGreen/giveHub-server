const mongoose = require("mongoose");
const deliverySchema = new mongoose.Schema({
  donator: mongoose.Schema.Types.ObjectId,
  organization: mongoose.Schema.Types.ObjectId,
  delivery_date: Date,
  status: String,
  donations: mongoose.Schema.Types.ObjectId,
});
const deliveryModel = mongoose.model("deliveries", deliverySchema);
module.exports = { deliveryModel, deliverySchema };
