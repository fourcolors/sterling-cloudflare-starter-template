import type { Config } from "drizzle-kit";

const studioConfig = {
	schema: "./app/schema.ts",
	driver: "better-sqlite",
	dbCredentials: {
		url: process.env.LOCAL_DB_PATH!,
	},
} satisfies Config;


const d1Config = {
	schema: "./app/schema.ts",
	out: "./migrations",
	driver: "d1",
	dbCredentials: {
		wranglerConfigPath: "wrangler.toml",
		dbName: "DB",
	},
} satisfies Config;

export default process.env.LOCAL_DB_PATH ? studioConfig : d1Config;
