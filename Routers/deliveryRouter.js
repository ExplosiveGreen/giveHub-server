const { Router } = require("express");
const { deliveryController } = require("../Controllers/deliveryController");
const deliveryRouter = new Router();
deliveryRouter.get("/", deliveryController.getDelivery);
deliveryRouter.get("/:id", deliveryController.getDeliverybyId);
deliveryRouter.post("/", deliveryController.createDelivery);
deliveryRouter.delete("/:id", deliveryController.deleteDelivery);
deliveryRouter.put("/:id", deliveryController.updateDelivery);
module.exports = { deliveryRouter };
