// ROLLUP_NO_REPLACE 
 const addRouteMiddleware = "{\"parsed\":{\"_path\":\"/api/utils/add-route-middleware\",\"_dir\":\"utils\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"addRouteMiddleware\",\"description\":\"addRouteMiddleware() is a helper function to dynamically add middleware in your application.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"addroutemiddleware\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware()\"}]},{\"type\":\"text\",\"value\":\" is a helper function to dynamically add route middleware in your Nuxt application.\"}]},{\"type\":\"element\",\"tag\":\"alert\",\"props\":{\"type\":\"info\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Route middleware are navigation guards stored in the \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/directory-structure/middleware\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"middleware/\"}]}]},{\"type\":\"text\",\"value\":\" directory of your Nuxt application (unless \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/api/configuration/nuxt-config#middleware\"},\"children\":[{\"type\":\"text\",\"value\":\"set otherwise\"}]},{\"type\":\"text\",\"value\":\").\"}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"usage\"},\"children\":[{\"type\":\"text\",\"value\":\"Usage\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"addRouteMiddleware (name: string | RouteMiddleware, middleware?: RouteMiddleware, options: AddRouteMiddlewareOptions = {})\\n\",\"language\":\"js\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" (name: string \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"|\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" RouteMiddleware, middleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"?:\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" RouteMiddleware, options: AddRouteMiddlewareOptions \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" {})\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware()\"}]},{\"type\":\"text\",\"value\":\" takes three arguments:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"name\"}]},{\"type\":\"text\",\"value\":\" \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"type: string | RouteMiddleware\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"name\"}]},{\"type\":\"text\",\"value\":\" can be either a string or a function of type \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"RouteMiddleware\"}]},{\"type\":\"text\",\"value\":\". Function takes the next route \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"to\"}]},{\"type\":\"text\",\"value\":\" as the first argument and the current route \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"text\",\"value\":\" as the second argument, both of which are Vue route objects.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Learn more about available properties of \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/api/composables/use-route\"},\"children\":[{\"type\":\"text\",\"value\":\"route objects\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"middleware\"}]},{\"type\":\"text\",\"value\":\" \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"type: RouteMiddleware\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The second argument is a function of type \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"RouteMiddleware\"}]},{\"type\":\"text\",\"value\":\". Same as above, it provides \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"to\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"text\",\"value\":\" route objects. It becomes optional if the first argument in \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware()\"}]},{\"type\":\"text\",\"value\":\" is already passed as a function.\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"options\"}]},{\"type\":\"text\",\"value\":\" \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"type: AddRouteMiddlewareOptions\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"An optional \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"options\"}]},{\"type\":\"text\",\"value\":\" argument lets you set the value of \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"global\"}]},{\"type\":\"text\",\"value\":\" to \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"true\"}]},{\"type\":\"text\",\"value\":\" to indicate whether the router middleware is global or not (set to \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"false\"}]},{\"type\":\"text\",\"value\":\" by default).\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"examples\"},\"children\":[{\"type\":\"text\",\"value\":\"Examples\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"anonymous-route-middleware\"},\"children\":[{\"type\":\"text\",\"value\":\"Anonymous Route Middleware\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Anonymous route middleware does not have a name. It takes a function as the first argument, making the second \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"middleware\"}]},{\"type\":\"text\",\"value\":\" argument redundant:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"export default defineNuxtPlugin(() => {\\r\\n  addRouteMiddleware((to, from) => {\\r\\n    if (to.path === '/forbidden') {\\r\\n      return false\\r\\n    }\\r\\n  })\\r\\n})\\n\",\"filename\":\"plugins/my-plugin.ts\",\"language\":\"ts\",\"meta\":\"[plugins/my-plugin.ts]\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"export\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"default\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"defineNuxtPlugin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"(() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"{\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"((\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"to\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"    \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"if\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" (to.path \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"===\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-88932d\"},\"children\":[{\"type\":\"text\",\"value\":\"'/forbidden'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\") {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"      \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"return\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6be6a7\"},\"children\":[{\"type\":\"text\",\"value\":\"false\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  })\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"}\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\")\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"named-route-middleware\"},\"children\":[{\"type\":\"text\",\"value\":\"Named Route Middleware\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Named route middleware takes a string as the first argument and a function as the second.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"When defined in a plugin, it overrides any existing middleware of the same name located in the \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"middleware/\"}]},{\"type\":\"text\",\"value\":\" directory:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"export default defineNuxtPlugin(() => {\\r\\n  addRouteMiddleware('named-middleware', () => {\\r\\n    console.log('named middleware added in Nuxt plugin')\\r\\n  })\\r\\n})\\n\",\"filename\":\"plugins/my-plugin.ts\",\"language\":\"ts\",\"meta\":\"[plugins/my-plugin.ts]\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"export\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"default\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"defineNuxtPlugin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"(() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"{\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-88932d\"},\"children\":[{\"type\":\"text\",\"value\":\"'named-middleware'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\", () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"    console.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"log\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-88932d\"},\"children\":[{\"type\":\"text\",\"value\":\"'named middleware added in Nuxt plugin'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\")\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  })\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"}\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\")\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"global-route-middleware\"},\"children\":[{\"type\":\"text\",\"value\":\"Global Route Middleware\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Set an optional, third argument \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"{ global: true }\"}]},{\"type\":\"text\",\"value\":\" to indicate whether the route middleware is global:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"export default defineNuxtPlugin(() => {\\r\\n  addRouteMiddleware('global-middleware', (to, from) => {\\r\\n      console.log('global middleware that runs on every route change')\\r\\n    },\\r\\n    { global: true }\\r\\n  )\\r\\n})\\n\",\"filename\":\"plugins/my-plugin.ts\",\"language\":\"ts\",\"meta\":\"[plugins/my-plugin.ts]\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"export\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"default\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"defineNuxtPlugin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"(() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"{\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"addRouteMiddleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-88932d\"},\"children\":[{\"type\":\"text\",\"value\":\"'global-middleware'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\", (\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"to\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-3b61c7\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"      console.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6e2dcf\"},\"children\":[{\"type\":\"text\",\"value\":\"log\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-88932d\"},\"children\":[{\"type\":\"text\",\"value\":\"'global middleware that runs on every route change'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\")\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"    },\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"    { global: \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-6be6a7\"},\"children\":[{\"type\":\"text\",\"value\":\"true\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\" }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"  )\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-86d4ce\"},\"children\":[{\"type\":\"text\",\"value\":\"}\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-37ffa9\"},\"children\":[{\"type\":\"text\",\"value\":\")\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-6be6a7{color:#0550AE}\\n.ct-88932d{color:#0A3069}\\n.ct-37ffa9{color:#953800}\\n.ct-3b61c7{color:#CF222E}\\n.ct-86d4ce{color:#24292F}\\n.ct-6e2dcf{color:#8250DF}\\n.dark .ct-6e2dcf{color:#D2A8FF}\\n.dark .ct-86d4ce{color:#C9D1D9}\\n.dark .ct-3b61c7{color:#FF7B72}\\n.dark .ct-37ffa9{color:#FFA657}\\n.dark .ct-88932d{color:#A5D6FF}\\n.dark .ct-6be6a7{color:#79C0FF}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"usage\",\"depth\":2,\"text\":\"Usage\"},{\"id\":\"examples\",\"depth\":2,\"text\":\"Examples\",\"children\":[{\"id\":\"anonymous-route-middleware\",\"depth\":3,\"text\":\"Anonymous Route Middleware\"},{\"id\":\"named-route-middleware\",\"depth\":3,\"text\":\"Named Route Middleware\"},{\"id\":\"global-route-middleware\",\"depth\":3,\"text\":\"Global Route Middleware\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:3.api:3.utils:add-route-middleware.md\",\"_source\":\"content\",\"_file\":\"3.api/3.utils/add-route-middleware.md\",\"_extension\":\"md\"},\"hash\":\"HeB4FY2FAh\"}";

export { addRouteMiddleware as default };
//# sourceMappingURL=add-route-middleware.mjs.map
