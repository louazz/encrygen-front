export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","main.js","normalize.css","skeleton.css"]),
	_: {
		mime: {".png":"image/png",".js":"application/javascript",".css":"text/css"},
		entry: {"file":"start-85b3a56f.js","js":["start-85b3a56f.js","chunks/vendor-022b7721.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-5e1fe644.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/document\/?$/,
				params: null,
				path: "/document",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/document\/display\/?$/,
				params: null,
				path: "/document/display",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/document\/QrJs\/?$/,
				params: null,
				path: "/document/QrJs",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/document\/list\/?$/,
				params: null,
				path: "/document/list",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/document\/([^/]+?)\/?$/,
				params: (m) => ({ generate: m[1]}),
				path: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/invoice\/?$/,
				params: null,
				path: "/invoice",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/invoice\/display\/?$/,
				params: null,
				path: "/invoice/display",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/invoice\/QrJs\/?$/,
				params: null,
				path: "/invoice/QrJs",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/invoice\/list\/?$/,
				params: null,
				path: "/invoice/list",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/invoice\/([^/]+?)\/?$/,
				params: (m) => ({ generate: m[1]}),
				path: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/product\/?$/,
				params: null,
				path: "/product",
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/product\/listinv\/?$/,
				params: null,
				path: "/product/listinv",
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/product\/list\/?$/,
				params: null,
				path: "/product/list",
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: (m) => ({ single: m[1]}),
				path: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/client\/?$/,
				params: null,
				path: "/client",
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/client\/listinv\/?$/,
				params: null,
				path: "/client/listinv",
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/client\/list\/?$/,
				params: null,
				path: "/client/list",
				a: [0,20],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/client\/([^/]+?)\/?$/,
				params: (m) => ({ single: m[1]}),
				path: null,
				a: [0,21],
				b: [1]
			}
		]
	}
};
