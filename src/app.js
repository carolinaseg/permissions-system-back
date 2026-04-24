import express from "express";
import cors from "cors";
import permissionRoutes from "./routes/permission.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/permissions", permissionRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});