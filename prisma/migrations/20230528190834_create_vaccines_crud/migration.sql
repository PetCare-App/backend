/*
  Warnings:

  - Added the required column `vaccineId` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `vaccineId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Vaccine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `reapplication` BOOLEAN NOT NULL,
    `nextDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_vaccineId_fkey` FOREIGN KEY (`vaccineId`) REFERENCES `Vaccine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
