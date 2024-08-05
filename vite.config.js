import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	build: {
		lib: {
			entry: {
				'': resolve(__dirname, 'src/index.ts'),
				Form: resolve(__dirname, 'src/Form/index.ts'),
			},
			name: '@ikepu-tp/react-bootstrap-extender',
			fileName: (format, entryName) => {
				return `${format}/${entryName ? `${entryName}/` : ''}index.js`;
			},
			formats: ['cjs', 'esm'],
		},
		rollupOptions: {
			external: ['bootstrap', 'react', 'react-bootstrap', 'react-dom'],
			output: {
				globals: {
					bootstrap: 'bootstrap',
					react: 'React',
					'react-bootstrap': 'ReactBootstrap',
				},
			},
		},
		minify: false,
		outDir: './dist',
	},
	plugins: [react()],
});
