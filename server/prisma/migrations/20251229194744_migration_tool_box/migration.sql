-- CreateTable
CREATE TABLE `Tool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `funcao` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `documentacao` VARCHAR(191) NOT NULL,
    `anotacoes` VARCHAR(191) NULL,
    `linguagem` ENUM('JS', 'TS', 'Python', 'IA') NOT NULL,
    `area` ENUM('FRONT', 'BACK') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
