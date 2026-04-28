import { prisma } from "../lib/prisma.js";
import { assignPermissionToUser } from "../services/userPermission.service.js";

export const assign = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { permissionId } = req.body;

    const result = await assignPermissionToUser(userId, permissionId);

    return res.status(201).json(result);
  } catch (error) {
    if (error.message === "PERMISSION_NOT_FOUND") {
      return next({ type: "NOT_FOUND" });
    }

    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { userId, permissionId } = req.params;

    await prisma.userPermission.delete({
      where: {
        userId_permissionId: {
          userId,
          permissionId: Number(permissionId),
        },
      },
    });

    return res.sendStatus(204);
  } catch (error) {
    if (error.code === "P2025") {
      return next({ type: "NOT_FOUND" });
    }

    next(error);
  }
};

export const getUserPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const result = await prisma.userPermission.findMany({
      where: { userId },
      include: { permission: true },
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};