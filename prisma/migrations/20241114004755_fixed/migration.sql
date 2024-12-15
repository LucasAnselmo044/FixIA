/*
  Warnings:

  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "level" INTEGER DEFAULT 1,
ADD COLUMN     "points" INTEGER DEFAULT 0,
ADD COLUMN     "quizzesCompleted" INTEGER DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "unique_provider_account" ON "Account"("provider", "providerAccountId");
