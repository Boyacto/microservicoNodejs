
export type { users } from "@prisma/client";

export type CreateUserData = {
  email: string;
  hashed_password: string; 
};