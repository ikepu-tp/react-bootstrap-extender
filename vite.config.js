import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: {
				"index": resolve(__dirname, "src/index.ts"),
			},
			name: '@ikepu-tp/react-bootstrap-extender',
			fileName: (format, entryName) => {
				return `${format}/${entryName}.js`;
			},
			formats: ["cjs", "esm"],
		},
		rollupOptions: {},
		minify: false,
		outDir: "./dist"
	},
});