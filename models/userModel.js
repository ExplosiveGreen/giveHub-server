const mongoose = require("mongoose");
const { donationModel } = require("./donationModel");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const organizationSchema = new mongoose.Schema({
  userSchema,
  location: {
    longitude: Number,
    latitude: Number,
  },
  donations: { type: mongoose.Schema.Types.ObjectId, ref: donationModel },
  donation_requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: donationModel,
    },
  ],
  deliveries: [mongoose.Schema.Types.ObjectId],
});
organizationSchema.add(userSchema);
const donatorSchema = new mongoose.Schema({
  address: {
    longitude: Number,
    latitude: Number,
  },
  donations: { type: mongoose.Schema.Types.ObjectId, ref: donationModel },
  delivery_requests: [mongoose.Schema.Types.ObjectId],
});
donatorSchema.add(userSchema);
const carrierSchema = new mongoose.Schema({
  accepted_deliveries: [mongoose.Schema.Types.ObjectId],
});
carrierSchema.add(userSchema);

const userModel = mongoose.model("users", userSchema);
const org = userModel.discriminator("org", organizationSchema);
const donator = userModel.discriminator("donator", donatorSchema);
const carrier = userModel.discriminator("carrier", carrierSchema);

module.exports = { userModel, org, donator, carrier };
