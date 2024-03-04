const { userModel, org, donator, carrier } = require("../models/userModel");

exports.userRepository = {
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
    if (auth == "donator") {
      return await donator.create(user);
    } else if (auth == "carrier") {
      return await carrier.create(user);
    }
  },
  updateUser: async (id, body) => {
    const { __t } = await userModel.findById(id);
    switch (__t) {
      case "donator":
        return await donator.findByIdAndUpdate(id, body, { new: true });
      case "carrier":
        return await carrier.findByIdAndUpdate(id, body, { new: true });
      case "org":
        return await org.findByIdAndUpdate(id, body, { new: true });
    }
  },
  deleteUser: async (id) => {
    return await userModel.deleteOne({ _id: id });
  },
};
