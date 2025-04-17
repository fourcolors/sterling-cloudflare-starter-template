import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import { type Env } from "~/models/env";
import { setAuthStrategies } from "~/services/auth.server";

if (process.env.NODE_ENV === "development") {
	logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
	build,
	getLoadContext: (context) => {
		const env = context.env as Env;
		setAuthStrategies(env);
		return { env };
	},
	mode: build.mode,
});
