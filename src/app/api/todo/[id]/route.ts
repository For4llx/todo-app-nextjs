import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { isCompleted } = await request.json();
  const id = Number(params.id);
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { isCompleted },
  });
  return NextResponse.json({ updatedTodo });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const deletedTodo = await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ deletedTodo });
}
