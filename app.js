const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const { carrier } = require("./models/userModel");
const { deliveryModel } = require("./models/deliveryModel");

const { donationRouter } = require("./Routers/donationRouter");
const { deliveryRouter } = require("./Routers/deliveryRouter");
const { userRouter } = require("./Routers/userRouter");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/donations", donationRouter);
app.use("/api/deliveries", deliveryRouter);
app.use("/api/users", userRouter);

let onlineUsers = [];
const addNewUser = (userId, socketId) => {
  if (!onlineUsers.find((user) => user.userId === userId))
    onlineUsers.push({ userId, socketId });
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
io.on("connection", (socket) => {
  socket.on("deleteDelivery", async (delivery) => {
    const carriers = await carrier.find({
      accepted_deliveries: { $in: [delivery._id] },
    });
    if (delivery) {
      carriers.map((carrier) => {
        onlineUsers.map((user) => {
          if (user.userId == carrier._id) {
            io.to(user.socketId).emit("notification", delivery);
          }
        });
      });
    }
  });
  console.log("a user connected");
  socket.on("join", (userId) => {
    addNewUser(userId, socket.id);
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("user disconnected");
  });
});

require("./dbConnection");

server.listen(port);
