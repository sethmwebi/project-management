import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();

    const teamsWithUsername = await Promise.all(
      teams.map(async (team: any) => {
        const productOwner = await prisma.user.findUnique({
          where: { id: team.productOwnerUserId! },
          select: { username: true },
        });

        const productManager = await prisma.user.findUnique({
          where: {
            id: team.projectManagerUserId!,
          },
          select: { username: true },
        });

        return {
          ...team,
          productOwnerUsername: productOwner?.username,
          projectManagerUsername: productManager?.username,
        };
      }),
    );
    res.json(teamsWithUsername);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving teams: ${error.message}` });
  }
};
