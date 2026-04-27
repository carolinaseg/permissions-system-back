import { prisma } from "../lib/prisma.js";

export const createPermission = async (data) => {
  const { name, description, active } = data;

  return await prisma.permission.create({
    data: {
      name,
      description,
      active,
    },
  });
};