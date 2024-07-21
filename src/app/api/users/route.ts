import { NextApiResponse, NextApiRequest } from "next";
import { PrismaClient, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({ log: ["query", "info"] });

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return Response.json(users);
  } catch (error) {
    return error;
  }
}
export async function POST(req: NextRequest) {
  const data: User = await req.json();
  console.log(data);
  try {
    const user = await prisma.user.create({ data });
    console.log(user);
    return Response.json(user);
    //return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  } finally {
    await prisma.$disconnect();
  }
  return NextResponse;
}