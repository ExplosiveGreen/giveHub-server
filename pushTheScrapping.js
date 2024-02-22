const mongoose = require("mongoose");
const { org } = require("./models/userModel");
require("dotenv").config();
function generateRandomPassword(length) {
  const passwordChars = "1234567890"; // Characters to choose from
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randomIndex];
  }

  return password;
}
// Access the environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const connectionUrl = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("Connected to database");
    // Once connected, perform the database query
    mongoose.connection.db
      .collection("organizations")
      .find({})
      .toArray()
      .then(async (data) => {
        const transformedData = data.map((item) => ({
          name: item.name,
          email: item.email,
          password: generateRandomPassword(5),
          auth: "org",
          location: { longitude: item.location[1], latitude: item.location[0] },
          donations: [],
          donation_requests: [],
          deliveries: [],
        }));
        const done = await org.create(transformedData);
        if (done) console.log("done");
      });
  })
  .catch((err) => console.log(`Connection error: ${err}`));
