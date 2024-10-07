// import dependecies
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

dotenv.config({});

// initialise application
const app = new express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// api's
app.use("/api/v0/user", userRoute);

// dummy api
// app.get("/hello", async (req, res) => {
//   res.send({ message: "Hello World!" });
// });

app.get("/view", async (req, res) => {
    try {
      var data = await userModel.find();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port:${PORT}`);
});