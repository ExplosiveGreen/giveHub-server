const { deliveryModel } = require("../models/deliveryModel");

exports.deliveryRepository = {
  getDelivery: async () => {
    return await deliveryModel
      .find({})
      .populate("donator")
      .populate("organization")
      .populate("donations");
  },
  getDeliverybyId: async (id) => {
    return await deliveryModel.findById(id).exec();
  },
  createDelivery: async (delivery) => {
    return await deliveryModel.create(delivery);
  },
  deleteDelivery: async (id) => {
    return await deliveryModel.deleteOne({ _id: id });
  },
};
