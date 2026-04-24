import express from "express";
import * as controller from "../controllers/permission.controller.js";

const router = express.Router();

router.post("/", controller.create);
router.put("/:id", controller.update);
router.get("/", controller.getAll);

export default router;