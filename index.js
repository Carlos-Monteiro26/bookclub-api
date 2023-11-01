import * as dotenv from "dotenv";
dotenv.config();
import db from "./src/models";
import routes from "./src/routes/index";
import express from "express";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("App running and db connected");
  } catch (error) {
    console.log("Error running app: ", error);
  }
});
