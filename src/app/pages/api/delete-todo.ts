import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    if (typeof id !== 'string') {
      res.status(400).json({ error: 'Invalid ID' });
      return;
    }

    try {
      const data = await prisma.todoList.delete({
        where: { id },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete the item' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};