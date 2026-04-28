import { prisma } from "../lib/prisma.js";

export const assignPermissionToUser = async (userId, permissionId) => {
  // 1. Validar que el permiso exista
  const permission = await prisma.permission.findUnique({
    where: { id: permissionId },
  });

  if (!permission) {
    throw new Error("PERMISSION_NOT_FOUND");
  }

  // 2. Crear relación
  return prisma.userPermission.create({
    data: {
      userId,
      permissionId,
    },
  });
};