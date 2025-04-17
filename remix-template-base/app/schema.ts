import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: integer("id").primaryKey(),
	firstName: text("firstName", { length: 256 }),
	lastName: text("lastName", { length: 256 }),
	email: text("email").notNull().unique(),
	publicId: text("publicId").notNull().unique(),
	createdAt: text("createdAt").notNull(),
	updatedAt: text("updatedAt").notNull(),
	deletedAt: text("deletedAt"),
});

export type User = InferSelectModel<typeof user>;
export type InsertUser = InferInsertModel<typeof user>;
