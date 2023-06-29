import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({ todos });
}

export async function POST(request: NextRequest) {
  const { title, isCompleted } = await request.json();
  const createdTodo = await prisma.todo.create({
    data: { title, isCompleted },
  });
  return NextResponse.json({ createdTodo });
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
