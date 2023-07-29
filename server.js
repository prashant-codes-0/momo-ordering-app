// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URI } = require("./config/config");
const momoRoutes = require("./routes/momoRoutes");
const authRoutes = require("./routes/authRoutes"); // Import the authRoutes

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", momoRoutes);
app.use("/api", authRoutes); // Use the authRoutes

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



// const express = require("express");
// const mongoose = require("mongoose");
// const config = require("./config/config");
// const momoRoutes = require("./routes/momoRoutes");
// const authRoutes = require("./routes/authRoutes"); // Import the authRoutes

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api", momoRoutes);
// app.use("/api", authRoutes); // Use the authRoutes

// // Connect to MongoDB
// mongoose
//   .connect(config.db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((error) => console.error("Error connecting to MongoDB:", error));
