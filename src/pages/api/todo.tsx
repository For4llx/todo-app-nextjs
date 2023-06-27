import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../app/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  }
  if (req.method === "POST") {
    console.log("HELLO WORLD");
    const createdTodo = await prisma.todo.create({
      data: { title: "NewTodo" },
    });
    res.status(201).json(createdTodo);
  }
}
