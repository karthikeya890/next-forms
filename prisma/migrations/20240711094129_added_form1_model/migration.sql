/*
  Warnings:

  - You are about to drop the `CustomFom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CustomFom";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hey";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "NewForm";
PRAGMA foreign_keys=on;
