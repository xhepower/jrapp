export interface iUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
}
export interface iSaveUser {
  email: string;
  password: string;
  name: string;
  role: Role;
}
export enum Role {
  ADMIN,
  USER,
  CLIENTE,
}
