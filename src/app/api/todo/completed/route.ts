import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany({ where: { isCompleted: true } });
  return NextResponse.json({ todos });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const deletedTodos = await prisma.todo.deleteMany({
    where: { isCompleted: true },
  });
  return NextResponse.json({ deletedTodos });
}
