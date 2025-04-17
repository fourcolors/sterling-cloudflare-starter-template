CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`firstName` text(256),
	`lastName` text(256),
	`email` text NOT NULL,
	`publicId` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	`deletedAt` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_publicId_unique` ON `user` (`publicId`);