import { User, Role } from "@prisma/client";
export interface iUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}
