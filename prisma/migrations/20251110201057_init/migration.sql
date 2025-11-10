-- CreateEnum
CREATE TYPE "RoleEnume" AS ENUM ('ADMIN', 'AUTHOR', 'USER');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "role" "RoleEnume" NOT NULL DEFAULT 'USER',
    "username" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" INTEGER,
    "age" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
