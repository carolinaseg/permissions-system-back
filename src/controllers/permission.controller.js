import prisma from "../prisma/client.js";
import { createPermission } from "../services/permission.service.js";

export const getAll = async (_, res) => {
  const permissions = await prisma.permission.findMany();
  res.json(permissions);
};

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
  try {
    const { id } = req.params;
    const { name, description, active } = req.body;

    const permission = await prisma.permission.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        active,
      },
    });

    res.json(permission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating permission" });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.permission.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Permission deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting permission" });
  }
};
