const { userModel, org, donator, carrier } = require("../models/userModel");

exports.userRepository = {
  getOrgs: async () => {
    return await org.find({});
  },
  getUser: async () => {
    return await userModel
      .find({})
      .populate("donations")
      .populate("donation_requests");
  },
  getUserbyId: async (id) => {
    return await userModel
      .findById(id)
      .populate("donations")
      .populate("donation_requests")
      .exec();
  },
  createUser: async (user) => {
    const auth = user.auth;
    if (auth == "org") {
      return await org.create(user);
    } else if (auth == "donator") {
      return await donator.create(user);
    } else if (auth == "carrier") {
      return await carrier.create(user);
    }
  },
  deleteUser: async (id) => {
    return await userModel.deleteOne({ _id: id });
  },
};
