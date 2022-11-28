/*
  Warnings:

  - You are about to drop the `Result` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Result";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "result" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateColeted" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "examId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
