-- CreateTable
CREATE TABLE "Hey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Hey_email_key" ON "Hey"("email");
