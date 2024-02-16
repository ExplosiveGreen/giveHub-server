const { Router } = require("express");
const { userController } = require("../Controllers/userController");
const userRouter = new Router();
userRouter.get("/", userController.getUser);
userRouter.get("/:id", userController.getUserbyId);
userRouter.post("/", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
module.exports = { userRouter };
