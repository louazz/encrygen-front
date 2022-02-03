declare module '../output/server/app.js' {
	export { App } from '@sveltejs/kit';
}

declare module './manifest.js' {
	import { SSRManifest } from '@sveltejs/kit';
	export const manifest: SSRManifest;
}
