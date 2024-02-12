const express = require("express");
const app = express();
const { donationRouter } = require("./Routers/donationRouter");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/donations", donationRouter);
app.listen(port);
