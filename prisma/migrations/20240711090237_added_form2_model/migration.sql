-- CreateTable
CREATE TABLE "Form2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Form2_email_key" ON "Form2"("email");
