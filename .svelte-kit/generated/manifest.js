const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/document/index.svelte"),
	() => import("../../src/routes/document/display.svelte"),
	() => import("../../src/routes/document/QrJs.svelte"),
	() => import("../../src/routes/document/list.svelte"),
	() => import("../../src/routes/document/[generate].svelte"),
	() => import("../../src/routes/invoice/index.svelte"),
	() => import("../../src/routes/invoice/display.svelte"),
	() => import("../../src/routes/invoice/QrJs.svelte"),
	() => import("../../src/routes/invoice/list.svelte"),
	() => import("../../src/routes/invoice/[generate].svelte"),
	() => import("../../src/routes/product/index.svelte"),
	() => import("../../src/routes/product/listinv.svelte"),
	() => import("../../src/routes/product/list.svelte"),
	() => import("../../src/routes/product/[single].svelte"),
	() => import("../../src/routes/profile.svelte"),
	() => import("../../src/routes/client/index.svelte"),
	() => import("../../src/routes/client/listinv.svelte"),
	() => import("../../src/routes/client/list.svelte"),
	() => import("../../src/routes/client/[single].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/document/index.svelte
	[/^\/document\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/document/display.svelte
	[/^\/document\/display\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/document/QrJs.svelte
	[/^\/document\/QrJs\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/document/list.svelte
	[/^\/document\/list\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/document/[generate].svelte
	[/^\/document\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ generate: d(m[1])})],

	// src/routes/invoice/index.svelte
	[/^\/invoice\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/invoice/display.svelte
	[/^\/invoice\/display\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/invoice/QrJs.svelte
	[/^\/invoice\/QrJs\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/invoice/list.svelte
	[/^\/invoice\/list\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/invoice/[generate].svelte
	[/^\/invoice\/([^/]+?)\/?$/, [c[0], c[12]], [c[1]], (m) => ({ generate: d(m[1])})],

	// src/routes/product/index.svelte
	[/^\/product\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/product/listinv.svelte
	[/^\/product\/listinv\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/product/list.svelte
	[/^\/product\/list\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/product/[single].svelte
	[/^\/product\/([^/]+?)\/?$/, [c[0], c[16]], [c[1]], (m) => ({ single: d(m[1])})],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/client/index.svelte
	[/^\/client\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/client/listinv.svelte
	[/^\/client\/listinv\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/client/list.svelte
	[/^\/client\/list\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/client/[single].svelte
	[/^\/client\/([^/]+?)\/?$/, [c[0], c[21]], [c[1]], (m) => ({ single: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];