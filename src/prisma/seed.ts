import { Prisma, Setting } from '@prisma/client';
import { prisma } from '../prisma/client';

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

export const seed = async () => {
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