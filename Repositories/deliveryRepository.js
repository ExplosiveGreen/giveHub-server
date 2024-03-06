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
    return await deliveryModel
      .findById(id)
      .populate("donator")
      .populate("organization")
      .populate("donations")
      .exec();
  },
  createDelivery: async (delivery) => {
    return await deliveryModel.create(delivery);
  },
  deleteDelivery: async (id) => {
    return await deliveryModel.findByIdAndDelete({ _id: id });
  },
  updateDelivery: async (id, body) => {
    return await deliveryModel.findByIdAndUpdate(id, body, { new: true });
  },
};
