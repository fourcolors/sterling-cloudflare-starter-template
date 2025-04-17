import os from "node:os";

const userHomeDir = os.homedir();

/** @type {import('@remix-run/dev').AppConfig} */
export default {
	server: "./server.ts",
	serverBuildPath: "functions/[[path]].js",
	serverConditions: ["workerd", "worker", "browser"],
	serverDependenciesToBundle: "all",
	serverMainFields: ["browser", "module", "main"],
	serverMinify: true,
	serverModuleFormat: "esm",
	serverPlatform: "neutral",
	tlsCert: `${userHomeDir}/.wrangler/local-cert/cert.pem`,
	tlsKey: `${userHomeDir}/.wrangler/local-cert/key.pem`,
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
};
