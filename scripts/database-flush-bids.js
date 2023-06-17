/* eslint-disable */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async () => {
  try {
    await prisma.$queryRaw`DELETE FROM bids;`;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
})();
