-- AlterTable
ALTER TABLE `Product` ADD COLUMN `category` ENUM('OFFICE', 'HOME', 'FOOD') NOT NULL DEFAULT 'OFFICE';
