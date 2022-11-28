-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_result" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateColeted" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "result_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_result" ("createdAt", "dateColeted", "examId", "id", "result", "userId") SELECT "createdAt", "dateColeted", "examId", "id", "result", "userId" FROM "result";
DROP TABLE "result";
ALTER TABLE "new_result" RENAME TO "result";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
