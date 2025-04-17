import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		mockReset: true,
		coverage: {
			provider: "v8",
			include: ["app"],
			enabled: true,
		}
	},
});
