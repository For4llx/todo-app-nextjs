import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany({ where: { isCompleted: false } });
  return NextResponse.json({ todos });
}
