import prisma from "../prisma/client.js";

export const create = async (req, res) => {
  const { name, description, active } = req.body;

  const permission = await prisma.permission.create({
    data: { name, description, active }
  });

  res.status(201).json(permission);
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