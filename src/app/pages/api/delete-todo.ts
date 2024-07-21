import prisma from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        try {
            await prisma.todoList.delete({
                where: {
                    id,
                },
            });
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete the post' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}