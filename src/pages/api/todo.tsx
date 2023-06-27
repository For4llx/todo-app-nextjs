import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
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
    const createdTodo = await prisma.todo.create({
      data: { title: req.body.title, isCompleted: req.body.isCompleted },
    });
    res.status(201).json(createdTodo);
  }
}
