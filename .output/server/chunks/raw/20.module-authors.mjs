// ROLLUP_NO_REPLACE 
 const _20_moduleAuthors = "{\"parsed\":{\"_path\":\"/migration/module-authors\",\"_dir\":\"migration\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"Modules\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"modules\"},\"children\":[{\"type\":\"text\",\"value\":\"Modules\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"module-compatibility\"},\"children\":[{\"type\":\"text\",\"value\":\"Module Compatibility\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt 3 has a basic backward compatibility layer for Nuxt 2 modules using \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/kit\"}]},{\"type\":\"text\",\"value\":\" auto wrappers. But there are usually steps to follow to make modules compatible with Nuxt 3 and sometimes, using Nuxt Bridge is required for cross-version compatibility.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"We have prepared a \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/going-further/modules\"},\"children\":[{\"type\":\"text\",\"value\":\"Dedicated Guide\"}]},{\"type\":\"text\",\"value\":\" for authoring Nuxt 3 ready modules using \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/kit\"}]},{\"type\":\"text\",\"value\":\". Currently best migration path is to follow it and rewrite your modules. Rest of this guide includes preparation steps if you prefer to avoid a full rewrite yet making modules compatible with Nuxt 3.\"}]},{\"type\":\"element\",\"tag\":\"alert\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can check for a list of Nuxt 3 ready modules from \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/modules\"},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt Modules\"}]},{\"type\":\"text\",\"value\":\".\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"plugin-compatibility\"},\"children\":[{\"type\":\"text\",\"value\":\"Plugin Compatibility\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt 3 plugins are \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"not\"}]},{\"type\":\"text\",\"value\":\" fully backward compatible with Nuxt 2.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"vue-compatibility\"},\"children\":[{\"type\":\"text\",\"value\":\"Vue Compatibility\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Plugins or components using the Composition API need exclusive Vue 2 or Vue 3 support.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"By using \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/vueuse/vue-demi\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"vue-demi\"}]},{\"type\":\"text\",\"value\":\" they should be compatible with both Nuxt 2 and 3.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"module-migration\"},\"children\":[{\"type\":\"text\",\"value\":\"Module Migration\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"When Nuxt 3 users add your module, you will not have access to the module container (\"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"this.*\"}]},{\"type\":\"text\",\"value\":\") so you will need to use utilities from \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/kit\"}]},{\"type\":\"text\",\"value\":\" to access the container functionality.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"test-with-nuxtbridge\"},\"children\":[{\"type\":\"text\",\"value\":\"Test with \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/bridge\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Migrating to \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/bridge\"}]},{\"type\":\"text\",\"value\":\" is the first and most important step for supporting Nuxt 3.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you have a fixture or example in your module, add \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/bridge\"}]},{\"type\":\"text\",\"value\":\" package to its config (see \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/bridge/overview#update-nuxtconfig\"},\"children\":[{\"type\":\"text\",\"value\":\"example\"}]},{\"type\":\"text\",\"value\":\")\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"migrate-from-commonjs-to-esm\"},\"children\":[{\"type\":\"text\",\"value\":\"Migrate from CommonJS to ESM\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt 3 natively supports TypeScript and ECMAScript Modules. Please check \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/concepts/esm\"},\"children\":[{\"type\":\"text\",\"value\":\"Native ES Modules\"}]},{\"type\":\"text\",\"value\":\" for more info and upgrading.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"ensure-plugins-default-export\"},\"children\":[{\"type\":\"text\",\"value\":\"Ensure Plugins Default Export\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you inject a Nuxt plugin that does not have \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"export default\"}]},{\"type\":\"text\",\"value\":\" (such as global Vue plugins), ensure you add \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"export default () => { }\"}]},{\"type\":\"text\",\"value\":\" to the end of it.\"}]},{\"type\":\"element\",\"tag\":\"code-group\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"// ~/plugins/vuelidate.js\\r\\nimport Vue from 'vue'\\r\\nimport Vuelidate from 'vuelidate'\\r\\n\\r\\nVue.use(Vuelidate)\\n\",\"filename\":\"Before\",\"language\":\"js\",\"meta\":\"[Before]\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-2535a7\"},\"children\":[{\"type\":\"text\",\"value\":\"// ~/plugins/vuelidate.js\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"import\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" Vue \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-97bf08\"},\"children\":[{\"type\":\"text\",\"value\":\"'vue'\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"import\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" Vuelidate \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-97bf08\"},\"children\":[{\"type\":\"text\",\"value\":\"'vuelidate'\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\"Vue.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-35bfbd\"},\"children\":[{\"type\":\"text\",\"value\":\"use\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\"(Vuelidate)\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"// ~/plugins/vuelidate.js\\r\\nimport Vue from 'vue'\\r\\nimport Vuelidate from 'vuelidate'\\r\\n\\r\\nVue.use(Vuelidate)\\r\\n\\r\\nexport default () => { }\\n\",\"filename\":\"After\",\"language\":\"js\",\"meta\":\"[After]\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-2535a7\"},\"children\":[{\"type\":\"text\",\"value\":\"// ~/plugins/vuelidate.js\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"import\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" Vue \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-97bf08\"},\"children\":[{\"type\":\"text\",\"value\":\"'vue'\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"import\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" Vuelidate \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-97bf08\"},\"children\":[{\"type\":\"text\",\"value\":\"'vuelidate'\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\"Vue.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-35bfbd\"},\"children\":[{\"type\":\"text\",\"value\":\"use\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\"(Vuelidate)\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"export\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-10210d\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"default\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-10210d\"},\"children\":[{\"type\":\"text\",\"value\":\" () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-f3d2f1\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-10210d\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-268715\"},\"children\":[{\"type\":\"text\",\"value\":\"{ }\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"avoid-runtime-modules\"},\"children\":[{\"type\":\"text\",\"value\":\"Avoid Runtime Modules\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"With Nuxt 3, Nuxt is now a build-time-only dependency, which means that modules shouldn't attempt to hook into the Nuxt runtime.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Your module should work even if it's only added to \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/directory-structure/nuxt.config#buildmodules\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"buildModules\"}]}]},{\"type\":\"text\",\"value\":\" (instead of \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"modules\"}]},{\"type\":\"text\",\"value\":\"). For example:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Avoid updating \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"process.env\"}]},{\"type\":\"text\",\"value\":\" within a Nuxt module and reading by a Nuxt plugin; use \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/directory-structure/nuxt.config#publicruntimeconfig\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"runtimeConfig\"}]}]},{\"type\":\"text\",\"value\":\" instead.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"(*) Avoid depending on runtime hooks like \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"vue-renderer:*\"}]},{\"type\":\"text\",\"value\":\" for production\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"(*) Avoid adding \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"serverMiddleware\"}]},{\"type\":\"text\",\"value\":\" by importing them inside the module. Instead, add them by referencing a file path so that they are independent of the module's context\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"(*) Unless it is for \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxt dev\"}]},{\"type\":\"text\",\"value\":\" purpose only and guarded with \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"if (nuxt.options.dev) { }\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"alert\",\"props\":{\"icon\":\"🔎\",\"type\":\"info\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Continue reading about Nuxt 3 modules in the \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/going-further/modules\"},\"children\":[{\"type\":\"text\",\"value\":\"Modules guide\"}]},{\"type\":\"text\",\"value\":\".\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"use-typescript-optional\"},\"children\":[{\"type\":\"text\",\"value\":\"Use TypeScript (Optional)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"While it is not essential, most of the Nuxt ecosystem is shifting to use TypeScript, so it is highly recommended to consider migration.\"}]},{\"type\":\"element\",\"tag\":\"alert\",\"props\":{\"icon\":\"💡\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can start migration by renaming \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".js\"}]},{\"type\":\"text\",\"value\":\" files, to \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".ts\"}]},{\"type\":\"text\",\"value\":\". TypeScript is designed to be progressive!\"}]}]},{\"type\":\"element\",\"tag\":\"alert\",\"props\":{\"icon\":\"💡\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can use TypeScript syntax for Nuxt 2 and 3 modules and plugins without any extra dependencies.\"}]}]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-10210d{color:#953800}\\n.ct-35bfbd{color:#8250DF}\\n.ct-97bf08{color:#0A3069}\\n.ct-268715{color:#24292F}\\n.ct-f3d2f1{color:#CF222E}\\n.ct-2535a7{color:#6E7781}\\n.dark .ct-2535a7{color:#8B949E}\\n.dark .ct-f3d2f1{color:#FF7B72}\\n.dark .ct-268715{color:#C9D1D9}\\n.dark .ct-97bf08{color:#A5D6FF}\\n.dark .ct-35bfbd{color:#D2A8FF}\\n.dark .ct-10210d{color:#FFA657}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"module-compatibility\",\"depth\":2,\"text\":\"Module Compatibility\",\"children\":[{\"id\":\"plugin-compatibility\",\"depth\":3,\"text\":\"Plugin Compatibility\"},{\"id\":\"vue-compatibility\",\"depth\":3,\"text\":\"Vue Compatibility\"}]},{\"id\":\"module-migration\",\"depth\":2,\"text\":\"Module Migration\",\"children\":[{\"id\":\"test-with-nuxtbridge\",\"depth\":3,\"text\":\"Test with @nuxt/bridge\"},{\"id\":\"migrate-from-commonjs-to-esm\",\"depth\":3,\"text\":\"Migrate from CommonJS to ESM\"},{\"id\":\"ensure-plugins-default-export\",\"depth\":3,\"text\":\"Ensure Plugins Default Export\"},{\"id\":\"avoid-runtime-modules\",\"depth\":3,\"text\":\"Avoid Runtime Modules\"},{\"id\":\"use-typescript-optional\",\"depth\":3,\"text\":\"Use TypeScript (Optional)\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:7.migration:20.module-authors.md\",\"_source\":\"content\",\"_file\":\"7.migration/20.module-authors.md\",\"_extension\":\"md\"},\"hash\":\"ZwESnqUvKc\"}";

export { _20_moduleAuthors as default };
//# sourceMappingURL=20.module-authors.mjs.map
