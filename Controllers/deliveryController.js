const { deliveryRepository } = require("../Repositories/deliveryRepository");
const filter = require("../functions");
exports.deliveryController = {
  getDelivery: async (req, res) => {
    try {
      let qs = req.query;
      let Deliverys = await deliveryRepository.getDelivery();
      Deliverys = filter(Deliverys, qs);
      res.status(200).json(Deliverys);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getDeliverybyId: async (req, res) => {
    try {
      const Delivery = await deliveryRepository.getDeliverybyId(req.params.id);
      res.status(200).json(Delivery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createDelivery: async (req, res) => {
    try {
      const Delivery = await deliveryRepository.createDelivery(req.body);
      res.status(201).json(Delivery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteDelivery: async (req, res) => {
    try {
      await deliveryRepository.deleteDelivery(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateDelivery: async (req, res) => {
    try {
      const Delivery = await deliveryRepository.updateDelivery(
        req.params.id,
        req.body
      );
      res.status(200).json(Delivery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
