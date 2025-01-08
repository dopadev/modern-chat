import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	define: { 'process.env': process.env },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./variables.scss" as *;`,
			},
		},
	},
})
