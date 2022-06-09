//Capa de modelo
import { prisma } from "./database";
import type { CreateUserData, users } from "./types";

async function getUsers() {
  return prisma.users.findMany();
}

async function getUser(id: users["id"]) {
  return prisma.users.findUnique({ where: { id: Number(id) } });
}
async function createUser(data: CreateUserData) {
  console.log("im in model")
  return prisma.users.create({
    data: data,
    select: {
      email: true,
      hashed_password: true,
      id: true,
      is_active: true
    }
  });
}

async function deleteUser(id: users["id"]) {
  return prisma.users.delete({ where: { id: id } });
}

export const model = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};
