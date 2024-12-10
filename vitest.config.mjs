import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        coverage: {
            provider: 'v8',
            exclude: ['specs/**/*', '**/*.config.*', '**/viewModels/*', '**/domain/*', '**/*Request.ts', '**/*Response.ts', "**/ports/*", '.next/**/*', 'node_modules/**/*', 'coverage/**/*', 'jest.config.js', 'vite.config.js', '.dependency-cruiser.js', '**/*.d.ts'],
        },
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest-setup.mjs',
        mockReset: true,
        clearMocks: true,
        restoreMocks: true,
    },
});