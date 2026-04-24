import prisma from "../prisma/client.js";
import { createPermission } from "../services/permission.service.js";

export const create = async (req, res) => {
  try {
    const permission = await createPermission(req.body);
    res.json(permission);
  } catch (error) {
  console.error("ERROR:", error);
  res.status(500).json({ error: "Error creating permission" });
}
};

export const update = async (req, res) => {
  const { id } = req.params;

  const permission = await prisma.permission.update({
    where: { id: Number(id) },
    data: req.body
  });

  res.json(permission);
};

export const getAll = async (_, res) => {
  const permissions = await prisma.permission.findMany();
  res.json(permissions);
};
