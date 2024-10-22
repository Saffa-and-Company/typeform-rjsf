import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            outDir: 'dist',
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'TypeformRJSF',
            fileName: (format) => `typeform-rjsf.${format}.js`,
        },
        rollupOptions: {
            external: ['react', '@rjsf/core', 'framer-motion', 'ajv', 'json-schema'],
            output: {
                globals: {
                    react: 'React',
                    '@rjsf/core': 'Form',
                    'framer-motion': 'framerMotion',
                    ajv: 'Ajv',
                    'json-schema': 'JSONSchema',
                },
            },
        },
        cssCodeSplit: false,
    },
});
