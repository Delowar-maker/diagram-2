-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_id_fkey`;

-- AlterTable
ALTER TABLE `category` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post_comment` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post_meta` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `tag` MODIFY `content` TEXT NOT NULL;
