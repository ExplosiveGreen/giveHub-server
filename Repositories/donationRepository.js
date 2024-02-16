const { donationModel } = require("../models/donationModel");

exports.donationRepository = {
  getDonation: async () => {
    return await donationModel.find({});
  },
  getDonationbyId: async (id) => {
    return await donationModel.findById(id).exec();
  },
  createDonation: async (donation) => {
    return await donationModel.create(donation);
  },
  deleteDonaotion: async (id) => {
    return await donationModel.deleteOne({ _id: id });
  },
};
