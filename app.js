const express = require("express");
const cors = require("cors");
const app = express();
const { donationRouter } = require("./Routers/donationRouter");
const { deliveryRouter } = require("./Routers/deliveryRouter");
const { userRouter } = require("./Routers/userRouter");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/donations", donationRouter);
app.use("/api/deliveries", deliveryRouter);
app.use("/api/users", userRouter);
require("./dbConnection");
app.listen(port);
