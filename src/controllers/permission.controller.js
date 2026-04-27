import { prisma } from "../lib/prisma.js";
import { createPermission } from "../services/permission.service.js";

export const getAll = async (_, res) => {
  const permissions = await prisma.permission.findMany();
  res.json(permissions);
};

export const create = async (req, res, next) => {
  try {
    const permission = await createPermission(req.body);
    res.json(permission);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const permission = await prisma.permission.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.json(permission);
  } catch (error) {
    if (error.code === "P2025") {
       return next({ type: "NOT_FOUND" });
    }
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.permission.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
  if (error.code === "P2025") {
    return next({ type: "NOT_FOUND" });
  }
  next(error);
  }
};