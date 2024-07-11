-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Form1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT
);
INSERT INTO "new_Form1" ("createdAt", "email", "id", "name", "phone", "updatedAt") SELECT "createdAt", "email", "id", "name", "phone", "updatedAt" FROM "Form1";
DROP TABLE "Form1";
ALTER TABLE "new_Form1" RENAME TO "Form1";
CREATE UNIQUE INDEX "Form1_email_key" ON "Form1"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
