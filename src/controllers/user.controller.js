import { prisma } from "../lib/prisma.js";

export const assign = async (req, res) => {
  const { userId } = req.params;
  const { permissionId } = req.body;

  const result = await prisma.userPermission.create({
    data: { userId, permissionId }
  });

  res.status(201).json(result);
};

export const remove = async (req, res) => {
  const { userId, permissionId } = req.params;

  await prisma.userPermission.delete({
    where: {
      userId_permissionId: {
        userId,
        permissionId: Number(permissionId)
      }
    }
  });

  res.sendStatus(204);
};

export const getUserPermissions = async (req, res) => {
  const { userId } = req.params;

  const result = await prisma.userPermission.findMany({
    where: { userId },
    include: { permission: true }
  });

  res.json(result);
};