import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";
import dbConnect from "./db/conn.js";

const app = express();

const port = process.env.PORT || 3000;

// console.log("port :", process.env.PORT);
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: "GET, POST,PUT,PATCH,DELETE",
};
// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World! I am going somewhere");
});

import UserRouter from "./routes/user.routes.js";
import ProductRouter from "./routes/product.routes.js";
import OrderRouter from "./routes/order.routes.js";

app.use("/api/v1", UserRouter);
app.use("/api/v1", ProductRouter);
app.use("/api/v1", OrderRouter);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
