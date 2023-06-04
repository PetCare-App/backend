/*
  Warnings:

  - You are about to drop the column `nextDate` on the `vaccine` table. All the data in the column will be lost.
  - You are about to drop the column `reapplication` on the `vaccine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `vaccine` DROP COLUMN `nextDate`,
    DROP COLUMN `reapplication`;
