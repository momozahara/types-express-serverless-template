import express, { Router, Request, Response } from 'express';
import { prisma } from '../prisma/client';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Express + TypeScript'
  });
});

router.get('/setting/get/', async (req: Request, res: Response) => {
  const settings = await prisma.setting.findMany();
  res.status(200).json(settings);
});

router.get('/setting/get/:name', async (req: Request, res: Response) => {
  const { name } = req.params;
  const setting = await prisma.setting.findFirst({
    where: {
      name: name
    }
  });
  res.status(200).json(setting);
});

export {
  router
};