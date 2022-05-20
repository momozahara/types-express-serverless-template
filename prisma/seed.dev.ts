import { Prisma, PrismaClient, Setting } from '@prisma/client';

const prisma = new PrismaClient();

const settingData: Prisma.SettingCreateInput[] = [
  {
    name: 'setting_1',
    value: '0',
  },
  {
    name: 'setting_2',
    value: '0',
  },
  {
    name: 'setting_3',
    value: '0',
  },
]

const seed = async () => {
  const settings = await prisma.setting.findMany();
  let result: Setting[] = [];
  for (const s of settingData) {
    const _isExist = settings.find(x => x.name === s.name);
    if (_isExist) {
      continue;
    }
    const _setting = await prisma.setting.create({
      data: s
    })
    result.push(_setting);
  }
  return result;
}

const start = async () => {
  const settings = await seed();
  console.log(settings);
}

start();