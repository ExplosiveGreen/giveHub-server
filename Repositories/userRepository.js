const e = require("express");
const { org, donator, carrier } = require("../models/userModel");

exports.userRepository = {
  getUser: async () => {
    return await userModel.find({});
  },
  getUserbyId: async (id) => {
    return await userModel.findById(id).exec();
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
