// ROLLUP_NO_REPLACE 
 const add = "{\"parsed\":{\"_path\":\"/api/commands/add\",\"_dir\":\"commands\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"nuxi add\",\"description\":\"Scaffold an entity into your Nuxt application.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"nuxi-add\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add\"}]}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"npx nuxi add [--cwd] [--force] <TEMPLATE> <NAME>\\n\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"npx nuxi add [--cwd] [--force] <TEMPLATE> <NAME>\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"table\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"thead\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"tr\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"th\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Option\"}]},{\"type\":\"element\",\"tag\":\"th\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Default\"}]},{\"type\":\"element\",\"tag\":\"th\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Description\"}]}]}]},{\"type\":\"element\",\"tag\":\"tbody\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"tr\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"TEMPLATE\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"-\"}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Specify a template of the file to be generated.\"}]}]},{\"type\":\"element\",\"tag\":\"tr\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"NAME\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"-\"}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Specify a name of the file that will be created.\"}]}]},{\"type\":\"element\",\"tag\":\"tr\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--cwd\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"The directory of the target application.\"}]}]},{\"type\":\"element\",\"tag\":\"tr\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--force\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"false\"}]}]},{\"type\":\"element\",\"tag\":\"td\",\"props\":{\"align\":null},\"children\":[{\"type\":\"text\",\"value\":\"Force override file if it already exists.\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Modifiers:\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Some templates support additional modifier flags to add a suffix (like \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".client\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".get\"}]},{\"type\":\"text\",\"value\":\") to their name.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"text\",\"value\":\" \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"npx nuxi add plugin sockets --client\"}]},{\"type\":\"text\",\"value\":\" generates \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"/plugins/sockets.client.ts\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-component\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add component\"}]}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Modifier flags: \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--mode client|server\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--client\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--server\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `components/TheHeader.vue`\\r\\nnpx nuxi add component TheHeader\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `components/TheHeader.vue`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"component\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"TheHeader\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-composable\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add composable\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `composables/foo.ts`\\r\\nnpx nuxi add composable foo\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `composables/foo.ts`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"composable\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"foo\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-layout\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add layout\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `layouts/custom.vue`\\r\\nnpx nuxi add layout custom\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `layouts/custom.vue`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"layout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"custom\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-plugin\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add plugin\"}]}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Modifier flags: \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--mode client|server\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--client\"}]},{\"type\":\"text\",\"value\":\"or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--server\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `plugins/analytics.ts`\\r\\nnpx nuxi add plugin analytics\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `plugins/analytics.ts`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"plugin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"analytics\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-page\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add page\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `pages/about.vue`\\r\\nnpx nuxi add page about\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `pages/about.vue`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"page\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"about\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `pages/category/[id].vue`\\r\\nnpx nuxi add page \\\"category/[id]\\\"\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `pages/category/[id].vue`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"page\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"category/[id]\\\"\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-middleware\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add middleware\"}]}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Modifier flags: \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--global\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `middleware/auth.ts`\\r\\nnpx nuxi add middleware auth\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `middleware/auth.ts`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"middleware\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"auth\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxi-add-api\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxi add api\"}]}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Modifier flags: \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--method\"}]},{\"type\":\"text\",\"value\":\" (can accept \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"connect\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"delete\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"get\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"head\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"options\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"patch\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"post\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"put\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"trace\"}]},{\"type\":\"text\",\"value\":\") or alternatively you can directly use \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--get\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"--post\"}]},{\"type\":\"text\",\"value\":\", etc.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Example:\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"# Generates `server/api/hello.ts`\\r\\nnpx nuxi add api hello\\n\",\"language\":\"bash\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-cbd82e\"},\"children\":[{\"type\":\"text\",\"value\":\"# Generates `server/api/hello.ts`\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-ebc506\"},\"children\":[{\"type\":\"text\",\"value\":\"npx\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"nuxi\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"add\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"api\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8ae503\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-d5ce85\"},\"children\":[{\"type\":\"text\",\"value\":\"hello\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-d5ce85{color:#0A3069}\\n.ct-8ae503{color:#24292F}\\n.ct-ebc506{color:#953800}\\n.ct-cbd82e{color:#6E7781}\\n.dark .ct-cbd82e{color:#8B949E}\\n.dark .ct-ebc506{color:#FFA657}\\n.dark .ct-8ae503{color:#C9D1D9}\\n.dark .ct-d5ce85{color:#A5D6FF}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"nuxi-add-component\",\"depth\":2,\"text\":\"nuxi add component\"},{\"id\":\"nuxi-add-composable\",\"depth\":2,\"text\":\"nuxi add composable\"},{\"id\":\"nuxi-add-layout\",\"depth\":2,\"text\":\"nuxi add layout\"},{\"id\":\"nuxi-add-plugin\",\"depth\":2,\"text\":\"nuxi add plugin\"},{\"id\":\"nuxi-add-page\",\"depth\":2,\"text\":\"nuxi add page\"},{\"id\":\"nuxi-add-middleware\",\"depth\":2,\"text\":\"nuxi add middleware\"},{\"id\":\"nuxi-add-api\",\"depth\":2,\"text\":\"nuxi add api\"}]}},\"_type\":\"markdown\",\"_id\":\"content:3.api:5.commands:add.md\",\"_source\":\"content\",\"_file\":\"3.api/5.commands/add.md\",\"_extension\":\"md\"},\"hash\":\"UfL8hPhomE\"}";

export { add as default };
//# sourceMappingURL=add.mjs.map
