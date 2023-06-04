/*
  Warnings:

  - You are about to drop the column `vaccineId` on the `pet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `pet` DROP FOREIGN KEY `Pet_vaccineId_fkey`;

-- AlterTable
ALTER TABLE `pet` DROP COLUMN `vaccineId`;

-- AlterTable
ALTER TABLE `vaccine` ADD COLUMN `petId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Vaccine` ADD CONSTRAINT `Vaccine_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
