/*
  Warnings:

  - You are about to alter the column `animalType` on the `pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `pet` MODIFY `animalType` ENUM('Dog', 'Cat', 'Pig', 'Bird', 'Rat', 'Hamster', 'Other') NOT NULL;
