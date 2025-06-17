/*
  Warnings:

  - Added the required column `icon` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habits" ADD COLUMN     "icon" TEXT NOT NULL;
