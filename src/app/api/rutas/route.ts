import { NextApiResponse, NextApiRequest } from "next";
import { PrismaClient, Ruta } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({ log: ["query", "info"] });

export async function GET(request:Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id){
    console.log("id: ",id)
    const rutas = await prisma.ruta.findMany({where:{id:Number(id)}});
    return Response.json(rutas);
  }
  try {
   
      const rutas = await prisma.ruta.findMany();
      return Response.json(rutas);
       
  } catch (error) {
    return error;
  }
}
export async function POST(req: NextRequest) {
  const data: Ruta = await req.json();
  try {
    const ruta = await prisma.ruta.create({ data });

    return Response.json(ruta);
    //return Response.json(ruta);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  } finally {
    await prisma.$disconnect();
  }
  return NextResponse;
}
