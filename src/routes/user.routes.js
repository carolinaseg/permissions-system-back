import express from "express";
import * as controller from "../controllers/user.controller.js";

const router = express.Router();

router.post("/:userId/permissions", controller.assign);
router.delete("/:userId/permissions/:permissionId", controller.remove);
router.get("/:userId/permissions", controller.getUserPermissions);

export default router;