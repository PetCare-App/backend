/*
  Warnings:

  - You are about to drop the column `age` on the `pet` table. All the data in the column will be lost.
  - Added the required column `animalType` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` DROP COLUMN `age`,
    ADD COLUMN `animalType` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL;
