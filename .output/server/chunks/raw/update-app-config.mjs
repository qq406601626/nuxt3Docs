// ROLLUP_NO_REPLACE 
 const updateAppConfig = "{\"parsed\":{\"_path\":\"/api/utils/update-app-config\",\"_dir\":\"utils\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"updateAppConfig\",\"description\":\"Updates app config using deep assignment. Existing (nested) properties will be preserved.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"updateappconfig\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"updateAppConfig\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Updates \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/guide/directory-structure/app-config\"},\"children\":[{\"type\":\"text\",\"value\":\"app config\"}]},{\"type\":\"text\",\"value\":\" using deep assignment. Existing (nested) properties will be preserved.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Usage:\"}]}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"code\":\"const appConfig = useAppConfig() // { foo: 'bar' }\\r\\n\\r\\nconst newAppConfig = { foo: 'baz' }\\r\\n\\r\\nupdateAppConfig(newAppConfig)\\r\\n\\r\\nconsole.log(appConfig) // { foo: 'baz' }\\n\",\"language\":\"js\",\"meta\":null},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8124dc\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-29a3b3\"},\"children\":[{\"type\":\"text\",\"value\":\"appConfig\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8124dc\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-010544\"},\"children\":[{\"type\":\"text\",\"value\":\"useAppConfig\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\"() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-90b000\"},\"children\":[{\"type\":\"text\",\"value\":\"// { foo: 'bar' }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8124dc\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-29a3b3\"},\"children\":[{\"type\":\"text\",\"value\":\"newAppConfig\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-8124dc\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" { foo: \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-5726cf\"},\"children\":[{\"type\":\"text\",\"value\":\"'baz'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\" }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-010544\"},\"children\":[{\"type\":\"text\",\"value\":\"updateAppConfig\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\"(newAppConfig)\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\"console.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-010544\"},\"children\":[{\"type\":\"text\",\"value\":\"log\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-1552c7\"},\"children\":[{\"type\":\"text\",\"value\":\"(appConfig) \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-90b000\"},\"children\":[{\"type\":\"text\",\"value\":\"// { foo: 'baz' }\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"read-more\",\"props\":{\"link\":\"/docs/guide/directory-structure/app-config\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-5726cf{color:#0A3069}\\n.ct-90b000{color:#6E7781}\\n.ct-010544{color:#8250DF}\\n.ct-29a3b3{color:#0550AE}\\n.ct-1552c7{color:#24292F}\\n.ct-8124dc{color:#CF222E}\\n.dark .ct-8124dc{color:#FF7B72}\\n.dark .ct-1552c7{color:#C9D1D9}\\n.dark .ct-29a3b3{color:#79C0FF}\\n.dark .ct-010544{color:#D2A8FF}\\n.dark .ct-90b000{color:#8B949E}\\n.dark .ct-5726cf{color:#A5D6FF}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:3.api:3.utils:update-app-config.md\",\"_source\":\"content\",\"_file\":\"3.api/3.utils/update-app-config.md\",\"_extension\":\"md\"},\"hash\":\"LEW9Mudp27\"}";

export { updateAppConfig as default };
//# sourceMappingURL=update-app-config.mjs.map
