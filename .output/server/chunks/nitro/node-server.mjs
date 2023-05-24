globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, appendHeader, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, pascalCase, kebabCase, camelCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import { visit } from 'unist-util-visit';
import { BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'shiki-es';
import { consola } from 'unenv/runtime/npm/consola';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "nuxtstudio",
      github: "nuxt-themes/docus"
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "docus",
      owner: "nuxt-themes",
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: "https://nuxt.com",
          icon: "simple-icons:nuxtdotjs"
        }
      ]
    }
  }
});

const appConfig1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig3 = defineAppConfig({});

const inlineAppConfig = {};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, appConfig3, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "plausible": {
      "hashMode": false,
      "trackLocalhost": false,
      "domain": "",
      "apiHost": "https://plausible.io",
      "autoPageviews": true,
      "autoOutboundTracking": false
    },
    "studio": {
      "apiURL": "https://api.nuxt.studio"
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1684919680849,
      "experimental": {
        "stripQueryParameters": false,
        "clientDB": false,
        "advancedIgnoresPattern": false
      },
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "E:/nuxt3Docs/.nuxt/pinceau/"
  },
  "studio": {},
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "l08ig8BKLQ",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "documentDriven": true,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false,
      "advancedIgnoresPattern": false
    }
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure the defaults of Nuxt Icon",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded",
                "@studioInputObjectValueType icon"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {}
          }
        },
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {}
        },
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {}
      },
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
        }
      }
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {
  ["nitro:bundled:pinceau:index.css"]: {
    import: () => import('../raw/index.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"65ed-Hl7V/jVvasV0zqiV6WMqMU3dvog\"","mtime":"2023-05-24T09:15:36.691Z"}
  },
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"3712-IBBG+C/KPDQh7osQolsNkSXUZ/A\"","mtime":"2023-05-24T09:15:36.702Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"3403-eQDJc1Gkr2ZrHaR535usAk6bVRw\"","mtime":"2023-05-24T09:15:36.702Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:0.index.md"]: {
    import: () => import('../raw/0.index.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"265e-tCXWxxIBNNTGGKo02R4IpD9FaLc\"","mtime":"2023-05-24T09:15:36.717Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:1.introduction.md"]: {
    import: () => import('../raw/1.introduction.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4436-vNGJOYkAyecGFDgz5gfDZ/u23Gg\"","mtime":"2023-05-24T09:15:36.709Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:10.deployment.md"]: {
    import: () => import('../raw/10.deployment.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"7732-Yix6+HII0iW5Lz/S+492vG/ujKs\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:11.testing.md"]: {
    import: () => import('../raw/11.testing.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"7317-2mjKbbPIKl4s5S4TOjbgYY8l/FM\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:12.upgrade.md"]: {
    import: () => import('../raw/12.upgrade.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"33a7-8311rLx87C4r0iaBlldnnAreoNw\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:2.installation.md"]: {
    import: () => import('../raw/2.installation.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"50f3-9cGtVBpcr9KbpH+Usa1nkFoof8A\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:3.configuration.md"]: {
    import: () => import('../raw/3.configuration.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"88bd-j+/ZDDzTmfTz0XJ8hSKcO+YFHs8\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:3.views.md"]: {
    import: () => import('../raw/3.views.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"7ba2-1Rw/010ynSslKFJiokcn794Haeo\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:4.assets.md"]: {
    import: () => import('../raw/4.assets.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5866-8ctgTUMfKc/0Ew3/Ik44WOEibg0\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:5.routing.md"]: {
    import: () => import('../raw/5.routing.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"985a-tDoht2t5aNSD3MKIKwg330QrbNw\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:5.seo-meta.md"]: {
    import: () => import('../raw/5.seo-meta.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1905e-f+jJhSTsPZzCgHenjda3cJ0vClo\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:5.transitions.md"]: {
    import: () => import('../raw/5.transitions.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"21139-B1M+8/zYqodOLMePSvplGqVMh4U\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:6.data-fetching.md"]: {
    import: () => import('../raw/6.data-fetching.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1c5bf-yYp74KVWDGdp5XBn0ZV7sp2WFKM\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:7.state-management.md"]: {
    import: () => import('../raw/7.state-management.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5d63-RaaJVcnIHZ0iUd2pHkLI+xJBku8\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:8.error-handling.md"]: {
    import: () => import('../raw/8.error-handling.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"95ad-LnePRVfQLhN2StT5Re0rt74PyfU\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:9.layers.md"]: {
    import: () => import('../raw/9.layers.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1f3f-7qTNW5rUOnhzhXB2Zp61a2UlMyk\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"172-1y0Jbfg/dn5wxdOFxq8/FBfqFkg\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:index.md"]: {
    import: () => import('../raw/index2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1a1-Lub6Go8bsWnNVvDihFUYMKvogrI\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:_dir.yml"]: {
    import: () => import('../raw/_dir2.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"10e-67V6S/l1cGwmnQOhMsAdZR+1fPg\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:index.md"]: {
    import: () => import('../raw/index3.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"19e-sZSJURcErbPVhks2Q0jM95RSal4\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:_dir.yml"]: {
    import: () => import('../raw/_dir3.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"104-cO8STkSv2aHdZFDVkdZzE8+VDhU\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:index.md"]: {
    import: () => import('../raw/index4.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1b6-kT+mXaZaw5n3Ac4lXn5n3pGtj0o\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:_dir.yml"]: {
    import: () => import('../raw/_dir4.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"11d-FrKyHnmjmJwQ4M4S8dBLteNbKc8\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.bridge:1.overview.md"]: {
    import: () => import('../raw/1.overview.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10ce6-dhJAwM4PsuaXPz4jjfa1Q3+dF8k\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.bridge:2.bridge-composition-api.md"]: {
    import: () => import('../raw/2.bridge-composition-api.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"e2ad-cacyrn0AcEA9gDklMJ962cUcNQM\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.bridge:_dir.yml"]: {
    import: () => import('../raw/_dir5.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"13a-kJrVXo1eYFqAndp3luABmxGjrfs\"","mtime":"2023-05-24T09:15:36.721Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:1.nuxt-community.md"]: {
    import: () => import('../raw/1.nuxt-community.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2f39-vjYTqgDSAuYEazipUYMmVwLisxI\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:2.getting-help.md"]: {
    import: () => import('../raw/2.getting-help.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"158d-H/nlV8D9OMFq4xt+hNK13xCvhv0\"","mtime":"2023-05-24T09:15:36.719Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:3.reporting-bugs.md"]: {
    import: () => import('../raw/3.reporting-bugs.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1b15-KHw4XEpKkHEX3G6Vl4/5qOngj0o\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:4.contribution.md"]: {
    import: () => import('../raw/4.contribution.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"8f64-15mAUYEg0+WlF37st70DlaQNsjU\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:5.framework-contribution.md"]: {
    import: () => import('../raw/5.framework-contribution.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"522f-zQV3Nle/dAljz+m7TdqE7I1E9JU\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:6.roadmap.md"]: {
    import: () => import('../raw/6.roadmap.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"528e-Ewp+ljdfeOf7qnglrIjmy3OkWtQ\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:7.changelog.md"]: {
    import: () => import('../raw/7.changelog.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2d8-hATuCNc28Qyc7y24or3otSK9SxA\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:index.md"]: {
    import: () => import('../raw/index5.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1b1-lkzfYzUI7005mYnn3cPERZoSI5k\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:_contributors.yml"]: {
    import: () => import('../raw/_contributors.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"14a-KG5+f/K6iQKy2BJY2oU3Or1rs/I\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.community:_dir.yml"]: {
    import: () => import('../raw/_dir6.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"122-titaM5ldejF5YobRBjSzjmV+x6g\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:1.overview.md"]: {
    import: () => import('../raw/1.overview2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"940-3suEAl6drX9PxKB4Xq7H6O4mdZ4\"","mtime":"2023-05-24T09:15:36.721Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:10.bundling.md"]: {
    import: () => import('../raw/10.bundling.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10ca-QPDn3EARJpudFtsjBNSPYWEgd6Q\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:11.server.md"]: {
    import: () => import('../raw/11.server.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"cf3-TlADYO94gj9wVHF9HMINm/jLfes\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:2.configuration.md"]: {
    import: () => import('../raw/2.configuration.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"603a-xj0lQaLNuMbuYjSfisuxedRiV4I\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:20.module-authors.md"]: {
    import: () => import('../raw/20.module-authors.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"40b6-jYBCq81rKX7ph7BDybCdtIKK9Lw\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:3.auto-imports.md"]: {
    import: () => import('../raw/3.auto-imports.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"c87-IHNZp93fRdx/S7ckzMN8rvc7mvc\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:4.meta.md"]: {
    import: () => import('../raw/4.meta.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"8d45-6v4FsaNXHXg1CcurGrZvtcuWZ38\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:5.plugins-and-middleware.md"]: {
    import: () => import('../raw/5.plugins-and-middleware.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"57eb-f95TCs2SWLnsgw756S8d0kO4Xlg\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:6.pages-and-layouts.md"]: {
    import: () => import('../raw/6.pages-and-layouts.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"c516-5pllx1hfBeOW9fJPxAztydRukSY\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:7.component-options.md"]: {
    import: () => import('../raw/7.component-options.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9ff5-dPuan9douWMi0BCFa+yk1JECkBg\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:8.runtime-config.md"]: {
    import: () => import('../raw/8.runtime-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3e82-ZATXQkTQMlx0eAJoGv9aJQSBXS4\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.migration:_dir.yml"]: {
    import: () => import('../raw/_dir7.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"146-Jfemw2AoUz6etzMTBJ13nKhUPNM\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:1.auto-imports.md"]: {
    import: () => import('../raw/1.auto-imports.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"871f-fS0yTYc/ISzUHQ/Qt3aDUvAOIxk\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:2.vuejs-development.md"]: {
    import: () => import('../raw/2.vuejs-development.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5b7c-rr3MXXoqj5qm1Uj+nnfTchGiFAI\"","mtime":"2023-05-24T09:15:36.700Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:3.rendering.md"]: {
    import: () => import('../raw/3.rendering.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6824-audy/Nk/UVeTPapR8iIHeTRF8Mw\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:4.server-engine.md"]: {
    import: () => import('../raw/4.server-engine.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2584-WYVm0BD6mQjismdWZLDx96IaixA\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:5.modules.md"]: {
    import: () => import('../raw/5.modules.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2c47-YNILPOLYv9jUQQhTVsMWNcqg9A8\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:7.esm.md"]: {
    import: () => import('../raw/7.esm.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"16744-Go23vbcGmt6J7WrAJVMBJiTh5YM\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:8.typescript.md"]: {
    import: () => import('../raw/8.typescript.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3315-gqy9rWIxrFNDRrVFhUT5WmOA2RY\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:index.md"]: {
    import: () => import('../raw/index6.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1c5-DJObdkt1O7zZowkPg2kbIXopvqQ\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:1.concepts:_dir.yml"]: {
    import: () => import('../raw/_dir8.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"18c-dpK/iSONxxWcEi+5eig2qum1s58\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:0.nuxt.md"]: {
    import: () => import('../raw/0.nuxt.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"86b-NFH9z9RVUIwj8ZFVeo3S4dXgC+0\"","mtime":"2023-05-24T09:15:36.723Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:0.output.md"]: {
    import: () => import('../raw/0.output.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6a7-nXTOxeKVRd3UoFibwe68f+A4Wdg\"","mtime":"2023-05-24T09:15:36.734Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.assets.md"]: {
    import: () => import('../raw/1.assets.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"86d-hTRqE2rKXVTPQhwQ59EVUusjtc4\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.components.md"]: {
    import: () => import('../raw/1.components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1a25a-HazwUS16s5gcBSlbbyrR3v/RmDs\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.composables.md"]: {
    import: () => import('../raw/1.composables.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"86c4-CPvvOQ5Hjw9g0uoW0ENUs7/iEGU\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.content.md"]: {
    import: () => import('../raw/1.content.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3b29-weStHDo8Xq8fY/JZEBULo0d6iYc\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.layouts.md"]: {
    import: () => import('../raw/1.layouts.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"be5a-j9qjIRTPahCySzBD4niWfl1VOYU\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.middleware.md"]: {
    import: () => import('../raw/1.middleware.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"77b3-ZHNJ08CK6BVHwDUW0fvGYz64ICg\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.modules.md"]: {
    import: () => import('../raw/1.modules.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"36e1-7WciuJKU9HkNfpZikHXNksgNNp8\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.node_modules.md"]: {
    import: () => import('../raw/1.node_modules.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6f2-JiehHEWCYXY31Xu2+rv3hwlnKAc\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.pages.md"]: {
    import: () => import('../raw/1.pages.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"20eb8-wQQnR5ap0HxdY1NK5SRGHF5n/9s\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.plugins.md"]: {
    import: () => import('../raw/1.plugins.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"cb2e-AkvoUhRoNCLx6k5sU9hdPF+QuGE\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.public.md"]: {
    import: () => import('../raw/1.public.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"755-QA7/XFNFZZr7OP79n5IMtgyR/rs\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.server.md"]: {
    import: () => import('../raw/1.server.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1a01f-Ff4u0s06jViVmLUwrYnIIVFjeEc\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:1.utils.md"]: {
    import: () => import('../raw/1.utils.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"86f-qNoCMotTv/5iGE1cSwjuFgFcfkI\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:2.env.md"]: {
    import: () => import('../raw/2.env.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1fba-iVn2n6RDtGbx48SwQaUgEMwWITI\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:2.gitignore.md"]: {
    import: () => import('../raw/2.gitignore.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"eb6-Z3G9bdyq/Jz8a+WCVjvMWOZkCsc\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:2.nuxtignore.md"]: {
    import: () => import('../raw/2.nuxtignore.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1d70-8Pb+AFcxXS3GPKekIbLg7MNXM1U\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:3.app-config.md"]: {
    import: () => import('../raw/3.app-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5b22-eevgo8eI+sPk0gtX2lcDZWNJR+s\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:3.app.md"]: {
    import: () => import('../raw/3.app.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"232c-SKip7OFw9Fpco/YTR5NRaw++d+o\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:3.nuxt.config.md"]: {
    import: () => import('../raw/3.nuxt.config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1b8e-pF3mf4l3a6pJi0Ag5qsKJ+ILMkk\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:3.package.md"]: {
    import: () => import('../raw/3.package.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4cd-t9s2ez7tMvaPugfiDS+kcL+bxaE\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:3.tsconfig.md"]: {
    import: () => import('../raw/3.tsconfig.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1095-Q6jxwwlu5JAc6IxOtAa23bAYTI0\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:index.md"]: {
    import: () => import('../raw/index7.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1e9-vQHtYI8Rv5uYa6m2P9IPEWCvc9Y\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:2.directory-structure:_dir.yml"]: {
    import: () => import('../raw/_dir9.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"1cc-UmWGlC4b3Eci3nHKWJvwgECop9o\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:1.internals.md"]: {
    import: () => import('../raw/1.internals.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"46d5-owres+fn2L0QM0Uls6ZA5ubM40g\"","mtime":"2023-05-24T09:15:36.726Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:10.runtime-config.md"]: {
    import: () => import('../raw/10.runtime-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a248-bYxB8DnA84j30k27AefJE5yPUfI\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:11.edge-channel.md"]: {
    import: () => import('../raw/11.edge-channel.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2361-VbDk4YdzBLr3fd1OoG/2AyummMk\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:2.hooks.md"]: {
    import: () => import('../raw/2.hooks.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5187-c31xVlwFbshLKOK7+VD9jD2geFk\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:3.modules.md"]: {
    import: () => import('../raw/3.modules.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"16bd9-R8LPxMx/9pebzGIKZ3EMchrTsM0\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:4.kit.md"]: {
    import: () => import('../raw/4.kit.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"27e1-aWSASENu1qXCPHUUrnSO/e/S51w\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:6.nuxt-app.md"]: {
    import: () => import('../raw/6.nuxt-app.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"29c5-zvFDbvmfCBzb7XNKrJXS+0qsKvs\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:7.layers.md"]: {
    import: () => import('../raw/7.layers.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"c2ce-CAK2YduBlVZhbbzaAzmaJ7qnl6g\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:index.md"]: {
    import: () => import('../raw/index8.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1d4-hIsWjGhkPf/X+EOAFiuKY/HX+O0\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.guide:3.going-further:_dir.yml"]: {
    import: () => import('../raw/_dir10.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"19d-0om2A/ByQfStTrIU0ftuN5HxLtw\"","mtime":"2023-05-24T09:15:36.735Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-app-config.md"]: {
    import: () => import('../raw/use-app-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"cf2-0SnSoFmSPiGuK1mGlpQVTqy1Hg4\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-async-data.md"]: {
    import: () => import('../raw/use-async-data.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9cad-ZkZIgKtoMgvcUdZ/tslxmQ1Oxtw\"","mtime":"2023-05-24T09:15:36.711Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-cookie.md"]: {
    import: () => import('../raw/use-cookie.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"f3d8-4A/uQbkbEZkKhvcidEojsmd+1jc\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-error.md"]: {
    import: () => import('../raw/use-error.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1127-UMbJukKW8b63LOv9rJQULpjvOLw\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-fetch.md"]: {
    import: () => import('../raw/use-fetch.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"e629-/C+rMMJLNxaWyEXylfE4n/bwjl8\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-head.md"]: {
    import: () => import('../raw/use-head.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"52a5-ooSlZWQZkgH7/70KcCwFipH9C8g\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-hydration.md"]: {
    import: () => import('../raw/use-hydration.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1d84-vB/E5rVcNmVIUVc9SetL3quFW4I\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-lazy-async-data.md"]: {
    import: () => import('../raw/use-lazy-async-data.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2efa-fakbTU30zfYDlmJoIiDH+JbSv+0\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-lazy-fetch.md"]: {
    import: () => import('../raw/use-lazy-fetch.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"375a-bJ59CUhz9MbU18Is++uszcOjx64\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-nuxt-app.md"]: {
    import: () => import('../raw/use-nuxt-app.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a6d1-wN64PKz6heARMOzVhW63z9afQrk\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-nuxt-data.md"]: {
    import: () => import('../raw/use-nuxt-data.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"775d-nFHsSq3WAkw1H3EkPyH5+BcPkMM\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-request-event.md"]: {
    import: () => import('../raw/use-request-event.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1116-ZtSAfkMZ30dCFwalyaH+ZprOOF8\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-request-headers.md"]: {
    import: () => import('../raw/use-request-headers.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"26a6-RwS9dNeM8MmpZK0lleKDTqWs+P4\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-route.md"]: {
    import: () => import('../raw/use-route.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"32b0-bvVnuwgWbRDFZlqii2+4HhCLhkw\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-router.md"]: {
    import: () => import('../raw/use-router.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3791-wsNXJYlOk/uMenokUYO2GQCv7G4\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-runtime-config.md"]: {
    import: () => import('../raw/use-runtime-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"90e1-jWnmq1cg0nmB1adpfCRedd3zceA\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:use-state.md"]: {
    import: () => import('../raw/use-state.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1e1a-uZJOmLDeA10lx99/bkPfcB8WSUs\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:1.composables:_dir.yml"]: {
    import: () => import('../raw/_dir11.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"1a1-DYYEa3MMUC2KyjqPkMSrtAY6yPQ\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:1.client-only.md"]: {
    import: () => import('../raw/1.client-only.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3210-kKObXyBuoVh6TEDSW6N9UJ5AvZs\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:2.nuxt-page.md"]: {
    import: () => import('../raw/2.nuxt-page.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"359d-gAUjCImNSlmDsOvvW2V7YA7WFzs\"","mtime":"2023-05-24T09:15:36.729Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:3.nuxt-layout.md"]: {
    import: () => import('../raw/3.nuxt-layout.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4e26-exzapHGw6cgCFz3tJJ6VV3i9gGA\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:4.nuxt-link.md"]: {
    import: () => import('../raw/4.nuxt-link.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9c05-g2MrA57urwesD+U1eT2s7wO9wB0\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:5.nuxt-loading-indicator.md"]: {
    import: () => import('../raw/5.nuxt-loading-indicator.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1edf-aZeUbClNyqGItjznvhrgHpoN74U\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:6.nuxt-error-boundary.md"]: {
    import: () => import('../raw/6.nuxt-error-boundary.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"26bd-/Iucj1hdvnqUdGClZ0JrwBHo/To\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:7.nuxt-welcome.md"]: {
    import: () => import('../raw/7.nuxt-welcome.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5f4-5w+3aeMxs9m3Fog/7wEXltmrvtM\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:8.teleports.md"]: {
    import: () => import('../raw/8.teleports.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"371b-qNeNVZ4dInVtyVWs9fIiQ6IAOTg\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:index.md"]: {
    import: () => import('../raw/index9.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1ca-Zh7qTCikJUVDAyXpXhHKbhce5es\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:2.components:_dir.yml"]: {
    import: () => import('../raw/_dir12.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"18e-vDxxAfA6TCJPHkqD6EHNh01p+Xg\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:4.advanced:1.hooks.md"]: {
    import: () => import('../raw/1.hooks.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a257-nyde3Cd44YH+oI5ijo/0fAxbBBY\"","mtime":"2023-05-24T09:15:36.731Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:4.advanced:2.kit.md"]: {
    import: () => import('../raw/2.kit.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3408-nEQALpFe0/4y5mu6ZCvVO22HD8k\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:4.advanced:_dir.yml"]: {
    import: () => import('../raw/_dir13.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"14e-d6TGopM81IJVhtlAlqaXjWji034\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:$fetch.md"]: {
    import: () => import('../raw/_fetch.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a23-U/rT97vyOhvMteEgsnewH9dTXqQ\"","mtime":"2023-05-24T09:15:36.730Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:abort-navigation.md"]: {
    import: () => import('../raw/abort-navigation.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4e13-TlQ3Vmr2IouK3cQWFeY6RGWkyjo\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:add-route-middleware.md"]: {
    import: () => import('../raw/add-route-middleware.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"54b2-yhEJ4JysInqlHYNfh4T45+sEWI8\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:clear-error.md"]: {
    import: () => import('../raw/clear-error.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10cc-LHzMsRUpED1ufURQ21JLpa2MydI\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:clear-nuxt-data.md"]: {
    import: () => import('../raw/clear-nuxt-data.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"11ed-EGZOuFnRykmcQU/SdYFv4AWJtSA\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:create-error.md"]: {
    import: () => import('../raw/create-error.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3360-Hu2CpAIX7ipVyzmwjblu7dplHW4\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:define-nuxt-component.md"]: {
    import: () => import('../raw/define-nuxt-component.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"32dc-zugpXDifHpvtYTsmBxALzZ0ztik\"","mtime":"2023-05-24T09:15:36.736Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:define-nuxt-route-middleware.md"]: {
    import: () => import('../raw/define-nuxt-route-middleware.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4be0-eID4Q6C8LKezqjlhKNhqnCn7jUY\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:define-page-meta.md"]: {
    import: () => import('../raw/define-page-meta.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"e0dc-YL+y0Tdo23C6kFwN0OUN7h9cQ44\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:index.md"]: {
    import: () => import('../raw/index10.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1a8-eR3+bYEtPdulH1YDbXf28Y+ikuQ\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:navigate-to.md"]: {
    import: () => import('../raw/navigate-to.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"75a9-8z04dTh9ndqkJceePip2mICwkFE\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:on-before-route-leave.md"]: {
    import: () => import('../raw/on-before-route-leave.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4a4-acWTIkHpBEQSzxhVjfW1rQrq1jY\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:on-before-route-update.md"]: {
    import: () => import('../raw/on-before-route-update.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4b0-J61Ipwdf3ARs2VBelV5YsJVSkbo\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:on-nuxt-ready.md"]: {
    import: () => import('../raw/on-nuxt-ready.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"19cc-sucWSzxKZHF+vsFWsmgZ4BydnAk\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:prefetch-components.md"]: {
    import: () => import('../raw/prefetch-components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"144b-GaIN40f6aHy/E0GsjC77py2M7jY\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:preload-components.md"]: {
    import: () => import('../raw/preload-components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"11db-1rxsCZ9Y3R1WpXHmZB88a9PRZGE\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:preload-route-components.md"]: {
    import: () => import('../raw/preload-route-components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"239b-taP2DgduQh9c3FYioaaOON3xjHA\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:refresh-nuxt-data.md"]: {
    import: () => import('../raw/refresh-nuxt-data.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6005-oQrBMDlt2ovOcqO5vjez1bfVmJI\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:set-page-layout.md"]: {
    import: () => import('../raw/set-page-layout.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"11e1-ZBSpWWsP82C4kXJ8AKS3JJ3fLOM\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:set-response-status.md"]: {
    import: () => import('../raw/set-response-status.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10f8-McoGRjdveUmkKIURoqUBTvB35LM\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:show-error.md"]: {
    import: () => import('../raw/show-error.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"115a-3K8EQo/dw3L2nm4BfYQdm3M+qqU\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:update-app-config.md"]: {
    import: () => import('../raw/update-app-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1536-JasK0DWqNRP3+gUEqG6uzg3iBqU\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:3.utils:_dir.yml"]: {
    import: () => import('../raw/_dir14.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"16b-fIBD3IdFhtgMD5qsK09tc5Ru6M4\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:add.md"]: {
    import: () => import('../raw/add.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"579c-I7JrzKRCfsaTQXJDDoDvArDAAik\"","mtime":"2023-05-24T09:15:36.731Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:analyze.md"]: {
    import: () => import('../raw/analyze.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"ab8-A4p31qOIzkyRU7awJ/aK8ZvSIAs\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:build-module.md"]: {
    import: () => import('../raw/build-module.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"10f8-RpOLLunuPFi20TexC1mCvS3e4bU\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:build.md"]: {
    import: () => import('../raw/build.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1117-cXnltFkbFk1OHJuaJVx9MjiX7Hc\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:cleanup.md"]: {
    import: () => import('../raw/cleanup.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"be9-vyVMSW0C23oRSht3gZ0iOXNAHyI\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:dev.md"]: {
    import: () => import('../raw/dev.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"21bd-mxx7Ip/OsM4JOV7Psmq0r82Lbvo\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:devtools.md"]: {
    import: () => import('../raw/devtools.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"bc8-b2ayK4zLWcHmphdcnfjvo9QxcRQ\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:generate.md"]: {
    import: () => import('../raw/generate.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"e6e-Gss0CGceKzKYuM04j2g5iD/ULG8\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:info.md"]: {
    import: () => import('../raw/info.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"944-IhPeUUzyn+4oKbKUwYPwLlzY0W4\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:init.md"]: {
    import: () => import('../raw/init.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"178a-JEmuv1qLEd3JRusTzpE4CvJjviw\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:prepare.md"]: {
    import: () => import('../raw/prepare.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"b2d-wX/Nf4WsOX8oUgl6dYAFKjGTUD0\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:preview.md"]: {
    import: () => import('../raw/preview.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"11de-X24hJ3At2LtiEw2aZGAD+X+DVEw\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:typecheck.md"]: {
    import: () => import('../raw/typecheck.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"114c-XPdruok5YdPqIAd1DhDhGQ8H7B0\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:upgrade.md"]: {
    import: () => import('../raw/upgrade.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9c2-kUo6bqRfxpxKcRitvY3ddhN9hDM\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:5.commands:_dir.yml"]: {
    import: () => import('../raw/_dir15.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"155-n0FMrdhk7621M87HEW7jDbvqn64\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:6.configuration:nuxt-config.md"]: {
    import: () => import('../raw/nuxt-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"56a-DSTGSfUo/RJQLqt8npxgtrRL6SE\"","mtime":"2023-05-24T09:15:36.731Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.api:6.configuration:_dir.yml"]: {
    import: () => import('../raw/_dir16.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"169-wBMuoTkAbCgpH+lfOVODxTkFNLk\"","mtime":"2023-05-24T09:15:36.737Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:0.essentials:hello-world.md"]: {
    import: () => import('../raw/hello-world.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4db-aCpekrII0K8HknTCHZQ9zh8eFOo\"","mtime":"2023-05-24T09:15:36.716Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:1.app:app-config.md"]: {
    import: () => import('../raw/app-config.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"582-ZGGQAiJMX5qzMlnFPSBeaNnjAz4\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:1.app:error-handling.md"]: {
    import: () => import('../raw/error-handling.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"417-+vvBwNV8vi58gFs0C88hx5BxaWU\"","mtime":"2023-05-24T09:15:36.732Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:1.app:plugins.md"]: {
    import: () => import('../raw/plugins.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"405-g0LYwH1iDER4SdlNMitHfiIoti0\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:1.app:teleport.md"]: {
    import: () => import('../raw/teleport.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"706-sz6e3Hbj+IzuGmxtsABuiMAGiF0\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:2.auto-imports:components.md"]: {
    import: () => import('../raw/components.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"52b-kEJpYzDeQDVhgMuUVFTxSo/dt7U\"","mtime":"2023-05-24T09:15:36.732Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:2.auto-imports:composables.md"]: {
    import: () => import('../raw/composables.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4f1-4rshoIIoqKDLH1BWvGTrFPo2aeE\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:3.composables:use-async-data.md"]: {
    import: () => import('../raw/use-async-data2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5df-CCKw4o0zEZ6dlcW0KOO7e/XzWQI\"","mtime":"2023-05-24T09:15:36.732Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:3.composables:use-cookie.md"]: {
    import: () => import('../raw/use-cookie2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"434-tAHjLWjo5TST3vhcHx1IIijky9o\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:3.composables:use-fetch.md"]: {
    import: () => import('../raw/use-fetch2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5b2-RG4Wpo2Ed0Jy/zVTFwKywUeqC9s\"","mtime":"2023-05-24T09:15:36.738Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:3.composables:use-head.md"]: {
    import: () => import('../raw/use-head2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"479-0PX5mTT53dw+nTY8hiGyIppsk0Q\"","mtime":"2023-05-24T09:15:36.739Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:3.composables:use-state.md"]: {
    import: () => import('../raw/use-state2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6ca-esrtZKkmZtfE7ROSzjH1/b496OI\"","mtime":"2023-05-24T09:15:36.739Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:4.routing:layouts.md"]: {
    import: () => import('../raw/layouts.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3ab-5euZ4fQk8hDii1Wml5/rUajwjlo\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:4.routing:middleware.md"]: {
    import: () => import('../raw/middleware.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"455-UjgO4h2x+i9dQL0yjSYMIGzlqv8\"","mtime":"2023-05-24T09:15:36.739Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:4.routing:nuxt-link.md"]: {
    import: () => import('../raw/nuxt-link.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"63f-74INyveri1aJSloUFMvsKBB6EfY\"","mtime":"2023-05-24T09:15:36.739Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:4.routing:pages.md"]: {
    import: () => import('../raw/pages.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3bb-drLCX8JpLZausubG3uvJvjMcaJA\"","mtime":"2023-05-24T09:15:36.740Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:4.routing:universal-router.md"]: {
    import: () => import('../raw/universal-router.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4b2-sFOZQouRVcvhtIAbckutYcIJe1k\"","mtime":"2023-05-24T09:15:36.740Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:5.server:routes.md"]: {
    import: () => import('../raw/routes.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"446-sWEI/K40+Ttu3Dta8od5fami0sg\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:6.advanced:config-extends.md"]: {
    import: () => import('../raw/config-extends.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"5ed-kMzQ1QEBAFQhGQ/JexsWjYXNuH4\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:6.advanced:jsx.md"]: {
    import: () => import('../raw/jsx.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4ad-PtWkovoYKQ1VWV4d0+J0LxLUIjQ\"","mtime":"2023-05-24T09:15:36.740Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:6.advanced:module-extend-pages.md"]: {
    import: () => import('../raw/module-extend-pages.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4fe-awe3ShBZUF8Bgw/g2sznZaXyFLc\"","mtime":"2023-05-24T09:15:36.740Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:6.advanced:testing.md"]: {
    import: () => import('../raw/testing.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4e1-aA73JpuLLDIrWyzaDDnmzGh0tm4\"","mtime":"2023-05-24T09:15:36.743Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:7.experimental:reactivity-transform.md"]: {
    import: () => import('../raw/reactivity-transform.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"45f-CQt1OrTj73d5Xs8MJdSmLjvICDs\"","mtime":"2023-05-24T09:15:36.733Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:7.experimental:wasm.md"]: {
    import: () => import('../raw/wasm.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"357-61BA762GW//BuFVBiHxd0Z2wbRs\"","mtime":"2023-05-24T09:15:36.744Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.examples:8.other:locale.md"]: {
    import: () => import('../raw/locale.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4b6-y0tFFEdkJD42Nl0/RLA3vjJ4vgk\"","mtime":"2023-05-24T09:15:36.733Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

const bundledStorage = ["pinceau","/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _D0DBwstURg = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_D0DBwstURg
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-p4uyv3Eo1x9Jh1+8ZiNT2QPMMWQ\"",
    "mtime": "2023-03-28T09:44:54.597Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/__studio.json": {
    "type": "application/json",
    "etag": "\"5e745-jcrQacqk1OX1za85H/+Mbe57jmc\"",
    "mtime": "2023-05-24T09:15:36.476Z",
    "size": 386885,
    "path": "../public/__studio.json"
  },
  "/_nuxt/Alert.8a878c54.js": {
    "type": "application/javascript",
    "etag": "\"207-KLWp6938poxRC6RciTdWEUSMQm4\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 519,
    "path": "../public/_nuxt/Alert.8a878c54.js"
  },
  "/_nuxt/Alert.f24f4058.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a16-VRNQaIyOAuOBb3PXRl6WhnRkudc\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 6678,
    "path": "../public/_nuxt/Alert.f24f4058.css"
  },
  "/_nuxt/asyncData.f00b5ec0.js": {
    "type": "application/javascript",
    "etag": "\"944-UWDawXwJ6jWcdTiyFHgZTWz49w8\"",
    "mtime": "2023-05-24T09:15:19.352Z",
    "size": 2372,
    "path": "../public/_nuxt/asyncData.f00b5ec0.js"
  },
  "/_nuxt/Badge.05529646.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a36-wZcWUaatyZNJYT/1H8a99Hxtqb4\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 6710,
    "path": "../public/_nuxt/Badge.05529646.css"
  },
  "/_nuxt/Badge.76d7458d.js": {
    "type": "application/javascript",
    "etag": "\"1da-nA3cRkYbyrHjRP/X24KboVoCxzc\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 474,
    "path": "../public/_nuxt/Badge.76d7458d.js"
  },
  "/_nuxt/BlockHero.31145e04.js": {
    "type": "application/javascript",
    "etag": "\"769-S8HziPzbjdTW/gMISoViaj4CprA\"",
    "mtime": "2023-05-24T09:15:19.382Z",
    "size": 1897,
    "path": "../public/_nuxt/BlockHero.31145e04.js"
  },
  "/_nuxt/BlockHero.bbfbfa5f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a56-EDxR5JzWg9DN/x26HQaXDTNMse4\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 2646,
    "path": "../public/_nuxt/BlockHero.bbfbfa5f.css"
  },
  "/_nuxt/ButtonLink.29b23a98.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"297-lo2UFbrb4qfGD+L3Qgfb7aH0HGI\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 663,
    "path": "../public/_nuxt/ButtonLink.29b23a98.css"
  },
  "/_nuxt/ButtonLink.d509040e.js": {
    "type": "application/javascript",
    "etag": "\"5c9-YTdRKdB8BmoBvWTc9A+N+AlA2oU\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 1481,
    "path": "../public/_nuxt/ButtonLink.d509040e.js"
  },
  "/_nuxt/Callout.53a4c668.js": {
    "type": "application/javascript",
    "etag": "\"3b1-tZsM18/VeEr5Fj6mThv//NxSK+A\"",
    "mtime": "2023-05-24T09:15:19.367Z",
    "size": 945,
    "path": "../public/_nuxt/Callout.53a4c668.js"
  },
  "/_nuxt/Callout.a5db879a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ccd-PVf6hQKz6CPZgMy7HKkzqR3Kiso\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 7373,
    "path": "../public/_nuxt/Callout.a5db879a.css"
  },
  "/_nuxt/Card.3047bccb.js": {
    "type": "application/javascript",
    "etag": "\"2de-9UQFQQudC3kNy42jK9m+NJnX6zg\"",
    "mtime": "2023-05-24T09:15:19.380Z",
    "size": 734,
    "path": "../public/_nuxt/Card.3047bccb.js"
  },
  "/_nuxt/Card.8460d175.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37b-MEHuI1QkYahhVcK1rw2NP65MlpY\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 891,
    "path": "../public/_nuxt/Card.8460d175.css"
  },
  "/_nuxt/CardGrid.36b10326.js": {
    "type": "application/javascript",
    "etag": "\"257-Jbx24bK09T5MSlNIJZAY2L7Xd28\"",
    "mtime": "2023-05-24T09:15:19.370Z",
    "size": 599,
    "path": "../public/_nuxt/CardGrid.36b10326.js"
  },
  "/_nuxt/CardGrid.fb979640.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"407-HPXBt/a/0gpJcGD3T83JvD0Liow\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 1031,
    "path": "../public/_nuxt/CardGrid.fb979640.css"
  },
  "/_nuxt/client-db.144351f0.js": {
    "type": "application/javascript",
    "etag": "\"4bb8-GtJB9BZyDK7OqvRHJrqxPNQ/YvQ\"",
    "mtime": "2023-05-24T09:15:19.354Z",
    "size": 19384,
    "path": "../public/_nuxt/client-db.144351f0.js"
  },
  "/_nuxt/CodeBlock.58b2659d.js": {
    "type": "application/javascript",
    "etag": "\"1aa-Xm8KyFtMccb9v+Ybx9uqfSB71D4\"",
    "mtime": "2023-05-24T09:15:19.364Z",
    "size": 426,
    "path": "../public/_nuxt/CodeBlock.58b2659d.js"
  },
  "/_nuxt/CodeBlock.e43dab4c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-nweqRivy9aabD6QXnxHC31KLDvo\"",
    "mtime": "2023-05-24T09:15:19.338Z",
    "size": 93,
    "path": "../public/_nuxt/CodeBlock.e43dab4c.css"
  },
  "/_nuxt/CodeGroup.74bf9d88.js": {
    "type": "application/javascript",
    "etag": "\"453-/phLxSK4Fw6vi8ff2bRWylH2nzY\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 1107,
    "path": "../public/_nuxt/CodeGroup.74bf9d88.js"
  },
  "/_nuxt/CodeGroup.a88f53ac.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ed-XIiT7MVoKTa1mF948ZxyTjbSfa8\"",
    "mtime": "2023-05-24T09:15:19.338Z",
    "size": 493,
    "path": "../public/_nuxt/CodeGroup.a88f53ac.css"
  },
  "/_nuxt/ComponentPlayground.28f27573.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d6-+tRkTed3FOMaQY9DwMmEynTtW48\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 1238,
    "path": "../public/_nuxt/ComponentPlayground.28f27573.css"
  },
  "/_nuxt/ComponentPlayground.45fcc68a.js": {
    "type": "application/javascript",
    "etag": "\"ae7-PNYneN6YkltLXAR3Xg3pEfhL1IY\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 2791,
    "path": "../public/_nuxt/ComponentPlayground.45fcc68a.js"
  },
  "/_nuxt/ComponentPlaygroundData.2ba66f99.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e8-eRIBDachbuHQgcxmMyQhlHa6tXo\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 232,
    "path": "../public/_nuxt/ComponentPlaygroundData.2ba66f99.css"
  },
  "/_nuxt/ComponentPlaygroundData.a81731ef.js": {
    "type": "application/javascript",
    "etag": "\"5c6-rv2gWoPg2UJlpdpG3PenZSILAKk\"",
    "mtime": "2023-05-24T09:15:19.369Z",
    "size": 1478,
    "path": "../public/_nuxt/ComponentPlaygroundData.a81731ef.js"
  },
  "/_nuxt/ComponentPlaygroundProps.2d1adca4.js": {
    "type": "application/javascript",
    "etag": "\"58f-ANL+6ZeZNijWUmdxUGQJaJfy3ns\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 1423,
    "path": "../public/_nuxt/ComponentPlaygroundProps.2d1adca4.js"
  },
  "/_nuxt/ComponentPlaygroundProps.54f42c7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"339-BJnAxWNkwK91+x6XqFg1Bh8QVR8\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 825,
    "path": "../public/_nuxt/ComponentPlaygroundProps.54f42c7a.css"
  },
  "/_nuxt/ComponentPlaygroundSlots.fc6878fb.js": {
    "type": "application/javascript",
    "etag": "\"71-XNh6WQqeo53g5t2Jd84YBFJvBks\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 113,
    "path": "../public/_nuxt/ComponentPlaygroundSlots.fc6878fb.js"
  },
  "/_nuxt/ComponentPlaygroundSlots.vue.f88bc4de.js": {
    "type": "application/javascript",
    "etag": "\"140-agzFEX+2cQcy/qX2d4xLUeb0hFo\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 320,
    "path": "../public/_nuxt/ComponentPlaygroundSlots.vue.f88bc4de.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.3f5f6d50.js": {
    "type": "application/javascript",
    "etag": "\"72-X8j6M07XJHHM+WJokMfiOb6rM9g\"",
    "mtime": "2023-05-24T09:15:19.349Z",
    "size": 114,
    "path": "../public/_nuxt/ComponentPlaygroundTokens.3f5f6d50.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.vue.13421895.js": {
    "type": "application/javascript",
    "etag": "\"118-q4jMsJK2a7P/a5nDOfzN1Ww+Dsg\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 280,
    "path": "../public/_nuxt/ComponentPlaygroundTokens.vue.13421895.js"
  },
  "/_nuxt/ContentDoc.bf5fd947.js": {
    "type": "application/javascript",
    "etag": "\"596-utwkqvttaYioBdnpMqZsI94ph6w\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 1430,
    "path": "../public/_nuxt/ContentDoc.bf5fd947.js"
  },
  "/_nuxt/ContentList.4f42736b.js": {
    "type": "application/javascript",
    "etag": "\"362-Z8A5r7o1BCg3DvA7qYoeSsoh7+M\"",
    "mtime": "2023-05-24T09:15:19.351Z",
    "size": 866,
    "path": "../public/_nuxt/ContentList.4f42736b.js"
  },
  "/_nuxt/ContentNavigation.77585ea0.js": {
    "type": "application/javascript",
    "etag": "\"35b-kX9pyunXEPFCky/rrOnTOQuo9Cg\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 859,
    "path": "../public/_nuxt/ContentNavigation.77585ea0.js"
  },
  "/_nuxt/ContentQuery.ddfbeab2.js": {
    "type": "application/javascript",
    "etag": "\"8b6-eA1ySOC0ZWFJDdiqC94Aqe0wAgQ\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 2230,
    "path": "../public/_nuxt/ContentQuery.ddfbeab2.js"
  },
  "/_nuxt/ContentRenderer.9b5fbf90.js": {
    "type": "application/javascript",
    "etag": "\"4b6-z754rfRC48Ywi+c86l5AmL+sq1I\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 1206,
    "path": "../public/_nuxt/ContentRenderer.9b5fbf90.js"
  },
  "/_nuxt/ContentRendererMarkdown.503f2b8b.js": {
    "type": "application/javascript",
    "etag": "\"5753-Xv9jv4eGJbd/zhWoaSJkdJCuCKY\"",
    "mtime": "2023-05-24T09:15:19.354Z",
    "size": 22355,
    "path": "../public/_nuxt/ContentRendererMarkdown.503f2b8b.js"
  },
  "/_nuxt/ContentSlot.09c35bed.js": {
    "type": "application/javascript",
    "etag": "\"3c7-kSCyR7qbF8emyDGwjhh7oiZtkvM\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 967,
    "path": "../public/_nuxt/ContentSlot.09c35bed.js"
  },
  "/_nuxt/CopyButton.de13045c.js": {
    "type": "application/javascript",
    "etag": "\"2d3-I0etZ8f47oXXJrzwol0ryxrdoE8\"",
    "mtime": "2023-05-24T09:15:19.352Z",
    "size": 723,
    "path": "../public/_nuxt/CopyButton.de13045c.js"
  },
  "/_nuxt/debug.099adc0e.js": {
    "type": "application/javascript",
    "etag": "\"254-lChgruU2RUpx8Pin4MY0NHLwlB0\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 596,
    "path": "../public/_nuxt/debug.099adc0e.js"
  },
  "/_nuxt/default.d15633e9.js": {
    "type": "application/javascript",
    "etag": "\"258-Zemqn9sgh/qXDWlvGL0WE6wD4tg\"",
    "mtime": "2023-05-24T09:15:19.346Z",
    "size": 600,
    "path": "../public/_nuxt/default.d15633e9.js"
  },
  "/_nuxt/DocsAside.7397caed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"184-bGDal9LcY/4Y5dkldAsGQXyScVo\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 388,
    "path": "../public/_nuxt/DocsAside.7397caed.css"
  },
  "/_nuxt/DocsAside.9bfb16c3.js": {
    "type": "application/javascript",
    "etag": "\"271-M/Wtu3QSsp1uoGp+MQ+rZAd87Wg\"",
    "mtime": "2023-05-24T09:15:19.370Z",
    "size": 625,
    "path": "../public/_nuxt/DocsAside.9bfb16c3.js"
  },
  "/_nuxt/DocsPageBottom.927dff9e.js": {
    "type": "application/javascript",
    "etag": "\"3dd-xOVG2pj+73IEMI4PzXEUdmuF/wM\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 989,
    "path": "../public/_nuxt/DocsPageBottom.927dff9e.js"
  },
  "/_nuxt/DocsPageBottom.9f7ccbf0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-FUqlf+XbbYvS5sEf8esd1/GlSGw\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 397,
    "path": "../public/_nuxt/DocsPageBottom.9f7ccbf0.css"
  },
  "/_nuxt/DocsPageLayout.273b7c94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1311-Hpyw6DtIVT1kyxxo/jTrn7iaQso\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 4881,
    "path": "../public/_nuxt/DocsPageLayout.273b7c94.css"
  },
  "/_nuxt/DocsPageLayout.ac072a7e.js": {
    "type": "application/javascript",
    "etag": "\"c14-nE6IyxLvBlY21vGVBSZ8Q5jmJVc\"",
    "mtime": "2023-05-24T09:15:19.380Z",
    "size": 3092,
    "path": "../public/_nuxt/DocsPageLayout.ac072a7e.js"
  },
  "/_nuxt/DocsPrevNext.0d80e373.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d4-NvxMiJJWVDEz24cDcNI6MdD3pYo\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 2004,
    "path": "../public/_nuxt/DocsPrevNext.0d80e373.css"
  },
  "/_nuxt/DocsPrevNext.24356762.js": {
    "type": "application/javascript",
    "etag": "\"504-6lTeFVqaOqwnvmd6psDtrLh6SZc\"",
    "mtime": "2023-05-24T09:15:19.365Z",
    "size": 1284,
    "path": "../public/_nuxt/DocsPrevNext.24356762.js"
  },
  "/_nuxt/DocsToc.855ff635.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"152-xWK8LaACil1MZkjZVWd3uY1zBsE\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 338,
    "path": "../public/_nuxt/DocsToc.855ff635.css"
  },
  "/_nuxt/DocsToc.afdbf8ee.js": {
    "type": "application/javascript",
    "etag": "\"298-A4ehRmtGq5KmQaauXcwOqCVNUz8\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 664,
    "path": "../public/_nuxt/DocsToc.afdbf8ee.js"
  },
  "/_nuxt/DocsTocLinks.310b9647.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c8-lonyXVkMo/xEHiqv4gR/KbGs6xc\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 712,
    "path": "../public/_nuxt/DocsTocLinks.310b9647.css"
  },
  "/_nuxt/DocsTocLinks.5d22b5d0.js": {
    "type": "application/javascript",
    "etag": "\"647-JAVzuv2VZf7MpOn9xadZMC0K5ZQ\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 1607,
    "path": "../public/_nuxt/DocsTocLinks.5d22b5d0.js"
  },
  "/_nuxt/document-driven.a94f762d.js": {
    "type": "application/javascript",
    "etag": "\"550-jnLmCoSXnu4sPkMu9kkZZYYqSuw\"",
    "mtime": "2023-05-24T09:15:19.348Z",
    "size": 1360,
    "path": "../public/_nuxt/document-driven.a94f762d.js"
  },
  "/_nuxt/DocumentDrivenEmpty.33bb66d3.js": {
    "type": "application/javascript",
    "etag": "\"120-HPZxQhqliVybugtmVjAc5J6MZx8\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.33bb66d3.js"
  },
  "/_nuxt/DocumentDrivenNotFound.7238633c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a6-be2wI1aypSJ5mpoHOqs3uPaNlW8\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 2214,
    "path": "../public/_nuxt/DocumentDrivenNotFound.7238633c.css"
  },
  "/_nuxt/DocumentDrivenNotFound.eb6d0b15.js": {
    "type": "application/javascript",
    "etag": "\"2eb-2dHth/1LPWrhYJ5iSQhD8RZ3BM4\"",
    "mtime": "2023-05-24T09:15:19.370Z",
    "size": 747,
    "path": "../public/_nuxt/DocumentDrivenNotFound.eb6d0b15.js"
  },
  "/_nuxt/EditOnLink.2aba89de.js": {
    "type": "application/javascript",
    "etag": "\"63-25ZhYV4Psh1rEkANOAhMkFag9yM\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 99,
    "path": "../public/_nuxt/EditOnLink.2aba89de.js"
  },
  "/_nuxt/EditOnLink.vue.d056053e.js": {
    "type": "application/javascript",
    "etag": "\"8cc-qfcQPrk7itO75RoTunM6Ujagwk8\"",
    "mtime": "2023-05-24T09:15:19.352Z",
    "size": 2252,
    "path": "../public/_nuxt/EditOnLink.vue.d056053e.js"
  },
  "/_nuxt/Ellipsis.4b43d507.js": {
    "type": "application/javascript",
    "etag": "\"546-jqZGawZkyTwK25nJCwje1KKMTac\"",
    "mtime": "2023-05-24T09:15:19.354Z",
    "size": 1350,
    "path": "../public/_nuxt/Ellipsis.4b43d507.js"
  },
  "/_nuxt/Ellipsis.d14ef06a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a9-cOVs27uhiJLKWl4QhfNyDQdPR1c\"",
    "mtime": "2023-05-24T09:15:19.333Z",
    "size": 425,
    "path": "../public/_nuxt/Ellipsis.d14ef06a.css"
  },
  "/_nuxt/entry.66ca2ded.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"402e-g/osTiaft07X7oc7qWgjI7Pcfg0\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 16430,
    "path": "../public/_nuxt/entry.66ca2ded.css"
  },
  "/_nuxt/entry.723c59d8.js": {
    "type": "application/javascript",
    "etag": "\"3cf4c-P8idwoIHkHGfaUehScYNq4gvYUs\"",
    "mtime": "2023-05-24T09:15:19.382Z",
    "size": 249676,
    "path": "../public/_nuxt/entry.723c59d8.js"
  },
  "/_nuxt/error-404.97011ca1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1084-jwUCXv5wv0+M+ZZFjvzPnriy9wA\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 4228,
    "path": "../public/_nuxt/error-404.97011ca1.css"
  },
  "/_nuxt/error-404.c9b187f3.js": {
    "type": "application/javascript",
    "etag": "\"8ae-D0C2fKhU0gjEFcQRxdQ5AfshWK4\"",
    "mtime": "2023-05-24T09:15:19.367Z",
    "size": 2222,
    "path": "../public/_nuxt/error-404.c9b187f3.js"
  },
  "/_nuxt/error-500.82e14f63.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"902-rwmHo71QxN5BefTTkQkEWf7HG0o\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 2306,
    "path": "../public/_nuxt/error-500.82e14f63.css"
  },
  "/_nuxt/error-500.ad5b5716.js": {
    "type": "application/javascript",
    "etag": "\"757-n5Ofpld/jCBTe3OGesGhvYE+YCs\"",
    "mtime": "2023-05-24T09:15:19.382Z",
    "size": 1879,
    "path": "../public/_nuxt/error-500.ad5b5716.js"
  },
  "/_nuxt/error-component.04671798.js": {
    "type": "application/javascript",
    "etag": "\"45e-gZBRNvekIpywMscvPXl2t31mwLM\"",
    "mtime": "2023-05-24T09:15:19.350Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.04671798.js"
  },
  "/_nuxt/IconCodeSandBox.c87f713d.js": {
    "type": "application/javascript",
    "etag": "\"1a9-vzJ9G7ACMSUwNNC7cQETclzgiz4\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 425,
    "path": "../public/_nuxt/IconCodeSandBox.c87f713d.js"
  },
  "/_nuxt/IconCSS.2e610a50.js": {
    "type": "application/javascript",
    "etag": "\"359-vjKzktyqSsRcb4Ta6vzvyd8O334\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 857,
    "path": "../public/_nuxt/IconCSS.2e610a50.js"
  },
  "/_nuxt/IconCSS.b5e1ed11.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-FXpb9ho34tM+U1G7Spx9dmdE8Jw\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.b5e1ed11.css"
  },
  "/_nuxt/IconDocus.f4c53509.js": {
    "type": "application/javascript",
    "etag": "\"31a-3hYtE6/3ajNB50QJwNqutQLgGy4\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 794,
    "path": "../public/_nuxt/IconDocus.f4c53509.js"
  },
  "/_nuxt/IconNuxt.902c8b9f.js": {
    "type": "application/javascript",
    "etag": "\"497-0JOxre9IFJzZ2KmWgNiIZCVEsA8\"",
    "mtime": "2023-05-24T09:15:19.351Z",
    "size": 1175,
    "path": "../public/_nuxt/IconNuxt.902c8b9f.js"
  },
  "/_nuxt/IconNuxtContent.c45bc355.js": {
    "type": "application/javascript",
    "etag": "\"497-fuc5BkxKsu4vShCOy8OPMg7ajHw\"",
    "mtime": "2023-05-24T09:15:19.348Z",
    "size": 1175,
    "path": "../public/_nuxt/IconNuxtContent.c45bc355.js"
  },
  "/_nuxt/IconNuxtLabs.f30dabac.js": {
    "type": "application/javascript",
    "etag": "\"497-YqpaO2qfK6XXr80qW41Xr7PahPo\"",
    "mtime": "2023-05-24T09:15:19.348Z",
    "size": 1175,
    "path": "../public/_nuxt/IconNuxtLabs.f30dabac.js"
  },
  "/_nuxt/IconNuxtStudio.34390cd8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66-AA2ErH34Xmax3511FiYX4lQ+vjs\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 102,
    "path": "../public/_nuxt/IconNuxtStudio.34390cd8.css"
  },
  "/_nuxt/IconNuxtStudio.4485bf86.js": {
    "type": "application/javascript",
    "etag": "\"4ef-9iewjTPB9dtFNsj5vXgOPrfZwMg\"",
    "mtime": "2023-05-24T09:15:19.367Z",
    "size": 1263,
    "path": "../public/_nuxt/IconNuxtStudio.4485bf86.js"
  },
  "/_nuxt/IconStackBlitz.ce440a79.js": {
    "type": "application/javascript",
    "etag": "\"160-mn0hSsvyxyZ+NtwWZOTTXN8C4CI\"",
    "mtime": "2023-05-24T09:15:19.353Z",
    "size": 352,
    "path": "../public/_nuxt/IconStackBlitz.ce440a79.js"
  },
  "/_nuxt/IconVueTelescope.232a5ac6.js": {
    "type": "application/javascript",
    "etag": "\"2cf-Cqr92Yndc8g3nmQg25rv/wzQHjI\"",
    "mtime": "2023-05-24T09:15:19.348Z",
    "size": 719,
    "path": "../public/_nuxt/IconVueTelescope.232a5ac6.js"
  },
  "/_nuxt/index.1946ecb2.js": {
    "type": "application/javascript",
    "etag": "\"1397-+DdX/C8hCJqqkB2sSYs3Oz+EL1Q\"",
    "mtime": "2023-05-24T09:15:19.353Z",
    "size": 5015,
    "path": "../public/_nuxt/index.1946ecb2.js"
  },
  "/_nuxt/index.9fea434a.js": {
    "type": "application/javascript",
    "etag": "\"903f-9YjJ9Op1NyGGTL/ntvXf+JpE2bU\"",
    "mtime": "2023-05-24T09:15:19.362Z",
    "size": 36927,
    "path": "../public/_nuxt/index.9fea434a.js"
  },
  "/_nuxt/List.8844e032.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fa-M/Bh4G5w1whUmQr09457kF58o+8\"",
    "mtime": "2023-05-24T09:15:19.339Z",
    "size": 762,
    "path": "../public/_nuxt/List.8844e032.css"
  },
  "/_nuxt/List.c875afa6.js": {
    "type": "application/javascript",
    "etag": "\"357-pBr3FVz2+qjyLATqMDL9/k4x4eA\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 855,
    "path": "../public/_nuxt/List.c875afa6.js"
  },
  "/_nuxt/Markdown.d8b0fba2.js": {
    "type": "application/javascript",
    "etag": "\"149-M3LS2njM4axyYXPtFbOluUv6mfI\"",
    "mtime": "2023-05-24T09:15:19.349Z",
    "size": 329,
    "path": "../public/_nuxt/Markdown.d8b0fba2.js"
  },
  "/_nuxt/NuxtImg.7c9893f4.js": {
    "type": "application/javascript",
    "etag": "\"60-Bex0uMz4uys0+fC4x3wwGjiSlDE\"",
    "mtime": "2023-05-24T09:15:19.346Z",
    "size": 96,
    "path": "../public/_nuxt/NuxtImg.7c9893f4.js"
  },
  "/_nuxt/NuxtImg.vue.407d205c.js": {
    "type": "application/javascript",
    "etag": "\"266-EEIeSfWWuaBW3ZnZjDgBB8QvcNw\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 614,
    "path": "../public/_nuxt/NuxtImg.vue.407d205c.js"
  },
  "/_nuxt/page.0e44e856.js": {
    "type": "application/javascript",
    "etag": "\"221-v9Ha2OPo01uErhByTp158LYgQQ0\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 545,
    "path": "../public/_nuxt/page.0e44e856.js"
  },
  "/_nuxt/page.70291227.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-uOA00wk0cEmpJxEpeb5dxVl/zhQ\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 84,
    "path": "../public/_nuxt/page.70291227.css"
  },
  "/_nuxt/PreviewLayout.05ed95ae.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e-6E2gPJaG4gG9DuSxb51gBBQNOWI\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 78,
    "path": "../public/_nuxt/PreviewLayout.05ed95ae.css"
  },
  "/_nuxt/PreviewLayout.dac235fe.js": {
    "type": "application/javascript",
    "etag": "\"fb-yQIGU8Fxbx7zzEXIeC4YbEd9JmU\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 251,
    "path": "../public/_nuxt/PreviewLayout.dac235fe.js"
  },
  "/_nuxt/Props.d0e8d199.js": {
    "type": "application/javascript",
    "etag": "\"c48-4P+0iBphrRadELQ8Py1vVg0tkDA\"",
    "mtime": "2023-05-24T09:15:19.352Z",
    "size": 3144,
    "path": "../public/_nuxt/Props.d0e8d199.js"
  },
  "/_nuxt/ProseA.573d2c50.js": {
    "type": "application/javascript",
    "etag": "\"1a5-Cb0vMdOI8W62keCQdY6ys5nm/vI\"",
    "mtime": "2023-05-24T09:15:19.370Z",
    "size": 421,
    "path": "../public/_nuxt/ProseA.573d2c50.js"
  },
  "/_nuxt/ProseA.e2976377.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47f-Bd1cJI2QymcfBXsls3kQ5ZE7caw\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 1151,
    "path": "../public/_nuxt/ProseA.e2976377.css"
  },
  "/_nuxt/ProseBlockquote.922901e7.js": {
    "type": "application/javascript",
    "etag": "\"ef-wut0Evc5TchlSdsrc+pcpUrMeMQ\"",
    "mtime": "2023-05-24T09:15:19.354Z",
    "size": 239,
    "path": "../public/_nuxt/ProseBlockquote.922901e7.js"
  },
  "/_nuxt/ProseBlockquote.fa85f476.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"262-fs+d+3AfSUaK8XtPGzf+VqUouFo\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 610,
    "path": "../public/_nuxt/ProseBlockquote.fa85f476.css"
  },
  "/_nuxt/ProseCode.c30ad557.js": {
    "type": "application/javascript",
    "etag": "\"710-WjWiYPo2wGHTIRODcGkz4bqrHYU\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 1808,
    "path": "../public/_nuxt/ProseCode.c30ad557.js"
  },
  "/_nuxt/ProseCode.c324a1f0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c74-JYWe5NjI8c18zcuTkkAFtBy+9Z0\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 3188,
    "path": "../public/_nuxt/ProseCode.c324a1f0.css"
  },
  "/_nuxt/ProseCodeInline.21ce328c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d1-1/Z1/IkqkivW4P3OS3+WKgWaimM\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 721,
    "path": "../public/_nuxt/ProseCodeInline.21ce328c.css"
  },
  "/_nuxt/ProseCodeInline.ca0563ef.js": {
    "type": "application/javascript",
    "etag": "\"e9-emGIK4Z49LvBmy4q/9NyLWfTmnM\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 233,
    "path": "../public/_nuxt/ProseCodeInline.ca0563ef.js"
  },
  "/_nuxt/ProseEm.26a085fc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f-/WrDUH4MFh0hLZFKn/kRGt7Vtc0\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 79,
    "path": "../public/_nuxt/ProseEm.26a085fc.css"
  },
  "/_nuxt/ProseEm.d19f2725.js": {
    "type": "application/javascript",
    "etag": "\"e7-Xus0Iy++dQ7qq0bdIpjZcq+MeOc\"",
    "mtime": "2023-05-24T09:15:19.364Z",
    "size": 231,
    "path": "../public/_nuxt/ProseEm.d19f2725.js"
  },
  "/_nuxt/ProseH1.50cf236a.js": {
    "type": "application/javascript",
    "etag": "\"2e3-otEzxIvY3ReqeMJGXf6FkpQJ0sY\"",
    "mtime": "2023-05-24T09:15:19.365Z",
    "size": 739,
    "path": "../public/_nuxt/ProseH1.50cf236a.js"
  },
  "/_nuxt/ProseH1.e1e961cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-aRnNfaUDYvwsTmpejIkdpTXZ8AU\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 504,
    "path": "../public/_nuxt/ProseH1.e1e961cd.css"
  },
  "/_nuxt/ProseH2.6637dca2.js": {
    "type": "application/javascript",
    "etag": "\"2e3-ywJs0nuRG3e0emyUn837NJgshBA\"",
    "mtime": "2023-05-24T09:15:19.372Z",
    "size": 739,
    "path": "../public/_nuxt/ProseH2.6637dca2.js"
  },
  "/_nuxt/ProseH2.e253cafd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-DBrRnkd6yf3z/zIIyppkmqYx2W8\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 504,
    "path": "../public/_nuxt/ProseH2.e253cafd.css"
  },
  "/_nuxt/ProseH3.6b7b29d8.js": {
    "type": "application/javascript",
    "etag": "\"2e3-9CGg/wYqcNXDY6puLifkAv0VJ90\"",
    "mtime": "2023-05-24T09:15:19.380Z",
    "size": 739,
    "path": "../public/_nuxt/ProseH3.6b7b29d8.js"
  },
  "/_nuxt/ProseH3.8da2d137.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-yrzO+JVGtF+0WpTe1DRwu+ioKMM\"",
    "mtime": "2023-05-24T09:15:19.336Z",
    "size": 504,
    "path": "../public/_nuxt/ProseH3.8da2d137.css"
  },
  "/_nuxt/ProseH4.a48d61b3.js": {
    "type": "application/javascript",
    "etag": "\"2e8-oI+tDbFmDGcNd8TxVpRZ2MzmbGU\"",
    "mtime": "2023-05-24T09:15:19.381Z",
    "size": 744,
    "path": "../public/_nuxt/ProseH4.a48d61b3.js"
  },
  "/_nuxt/ProseH4.f75faa9e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-IEZZ3MAByjJ08BMJ9M2UiD87q44\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 504,
    "path": "../public/_nuxt/ProseH4.f75faa9e.css"
  },
  "/_nuxt/ProseH5.a146e214.js": {
    "type": "application/javascript",
    "etag": "\"2e3-jOn/MGYO1j+9OA0z6ZjLVpoz6fQ\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 739,
    "path": "../public/_nuxt/ProseH5.a146e214.js"
  },
  "/_nuxt/ProseH5.ad165fe2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c9-JNEeBDZizdcYFbqjVlZYi8vlP+o\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 457,
    "path": "../public/_nuxt/ProseH5.ad165fe2.css"
  },
  "/_nuxt/ProseH6.98a17339.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c9-vYqtKF5eq2j8R20k5Awp5jy1eXk\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 457,
    "path": "../public/_nuxt/ProseH6.98a17339.css"
  },
  "/_nuxt/ProseH6.f95008cd.js": {
    "type": "application/javascript",
    "etag": "\"2e3-OT3iV/bnx1PYwvgZScRESvKmvco\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 739,
    "path": "../public/_nuxt/ProseH6.f95008cd.js"
  },
  "/_nuxt/ProseHr.228bd68b.js": {
    "type": "application/javascript",
    "etag": "\"b6-rNw2Hd6Xg962m6ytGBpI9u/qmtk\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 182,
    "path": "../public/_nuxt/ProseHr.228bd68b.js"
  },
  "/_nuxt/ProseHr.c7c78bbe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-INEPhPPD9t2+R6o6gFRIQ5CI4Ik\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 128,
    "path": "../public/_nuxt/ProseHr.c7c78bbe.css"
  },
  "/_nuxt/ProseImg.018721e2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35-/P+VAtl+aDWpPVCPQAbTsFW52HM\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 53,
    "path": "../public/_nuxt/ProseImg.018721e2.css"
  },
  "/_nuxt/ProseImg.1f321afb.js": {
    "type": "application/javascript",
    "etag": "\"268-TOl1YaWfEoX2bvm0ik5oHVtDVjI\"",
    "mtime": "2023-05-24T09:15:19.379Z",
    "size": 616,
    "path": "../public/_nuxt/ProseImg.1f321afb.js"
  },
  "/_nuxt/ProseLi.ac05b421.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91-eiqKu/ywnE10Nr/KZRFEXPPAFjo\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 145,
    "path": "../public/_nuxt/ProseLi.ac05b421.css"
  },
  "/_nuxt/ProseLi.fcf82070.js": {
    "type": "application/javascript",
    "etag": "\"e7-qxpuvVTpAyNrwxWHrgfs+i2xRo0\"",
    "mtime": "2023-05-24T09:15:19.365Z",
    "size": 231,
    "path": "../public/_nuxt/ProseLi.fcf82070.js"
  },
  "/_nuxt/ProseOl.134fe95b.js": {
    "type": "application/javascript",
    "etag": "\"e7-8/+11Ry/OiPhY1eUUXsusBxMXoY\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 231,
    "path": "../public/_nuxt/ProseOl.134fe95b.js"
  },
  "/_nuxt/ProseOl.987a3cd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-Uspv2a4Jau9LfRlhs7gh7b1macE\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 379,
    "path": "../public/_nuxt/ProseOl.987a3cd5.css"
  },
  "/_nuxt/ProseP.945916cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f0-wFnUHeg48g/JyGSDwWH/o0sfb10\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 240,
    "path": "../public/_nuxt/ProseP.945916cd.css"
  },
  "/_nuxt/ProseP.dcc31657.js": {
    "type": "application/javascript",
    "etag": "\"e6-1pVY1bgur0oWKpgJ3Q5pX2qrglA\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 230,
    "path": "../public/_nuxt/ProseP.dcc31657.js"
  },
  "/_nuxt/ProseStrong.1d7d74ca.js": {
    "type": "application/javascript",
    "etag": "\"e6-wnQHbXv/sLY5MsSFKpeWqSGVLyA\"",
    "mtime": "2023-05-24T09:15:19.364Z",
    "size": 230,
    "path": "../public/_nuxt/ProseStrong.1d7d74ca.js"
  },
  "/_nuxt/ProseStrong.263d77e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c-MD65Ps8jSjh1cMdTmfC4f+7oAlU\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 108,
    "path": "../public/_nuxt/ProseStrong.263d77e1.css"
  },
  "/_nuxt/ProseTable.c65fbffe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"164-lnhXgUriM9WndiBRXv31OET1Xko\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 356,
    "path": "../public/_nuxt/ProseTable.c65fbffe.css"
  },
  "/_nuxt/ProseTable.fc0a2d27.js": {
    "type": "application/javascript",
    "etag": "\"118-LzirteEuF+rrpnx+meu+ov8Q3Tk\"",
    "mtime": "2023-05-24T09:15:19.372Z",
    "size": 280,
    "path": "../public/_nuxt/ProseTable.fc0a2d27.js"
  },
  "/_nuxt/ProseTbody.24548b1c.js": {
    "type": "application/javascript",
    "etag": "\"bd-9fcX9260zlUuAGVkC72XGO6lruk\"",
    "mtime": "2023-05-24T09:15:19.347Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.24548b1c.js"
  },
  "/_nuxt/ProseTd.026b7440.js": {
    "type": "application/javascript",
    "etag": "\"e7-1MtBgcPDXs5OpfmqXHVyE1pW204\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTd.026b7440.js"
  },
  "/_nuxt/ProseTd.cd8fde4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10e-PtYThxn1bqNyaoIsMlARhEWZZ04\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 270,
    "path": "../public/_nuxt/ProseTd.cd8fde4d.css"
  },
  "/_nuxt/ProseTh.1d027244.js": {
    "type": "application/javascript",
    "etag": "\"e7-3fZNHh6MVwf9I6kHm8e2Qx8xVSE\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTh.1d027244.js"
  },
  "/_nuxt/ProseTh.4e8fa436.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"161-WEYZi3wV7//CXzgqZKUKB3hDs7g\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 353,
    "path": "../public/_nuxt/ProseTh.4e8fa436.css"
  },
  "/_nuxt/ProseThead.332c0b8a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"172-PHOMt/h1NbLuYickVBw+mixlAp4\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 370,
    "path": "../public/_nuxt/ProseThead.332c0b8a.css"
  },
  "/_nuxt/ProseThead.b73443fa.js": {
    "type": "application/javascript",
    "etag": "\"ea-KgOSNLOET12dKLZgczaJxVmqbsM\"",
    "mtime": "2023-05-24T09:15:19.373Z",
    "size": 234,
    "path": "../public/_nuxt/ProseThead.b73443fa.js"
  },
  "/_nuxt/ProseTr.65bec588.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a4-8+Ah6srlM/sVnhpyI2/xpaSKd9I\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 164,
    "path": "../public/_nuxt/ProseTr.65bec588.css"
  },
  "/_nuxt/ProseTr.6db8e3ea.js": {
    "type": "application/javascript",
    "etag": "\"e7-5ByzAZI+DfI8z6M7/9zMXCkfYCE\"",
    "mtime": "2023-05-24T09:15:19.367Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTr.6db8e3ea.js"
  },
  "/_nuxt/ProseUl.a51ada81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17b-W/sUvlix7f9Qo8Scw39EZDaMj3w\"",
    "mtime": "2023-05-24T09:15:19.337Z",
    "size": 379,
    "path": "../public/_nuxt/ProseUl.a51ada81.css"
  },
  "/_nuxt/ProseUl.e57cdba3.js": {
    "type": "application/javascript",
    "etag": "\"e7-mBxRXABm+kYcE/0kfpAN7j0Pqa4\"",
    "mtime": "2023-05-24T09:15:19.363Z",
    "size": 231,
    "path": "../public/_nuxt/ProseUl.e57cdba3.js"
  },
  "/_nuxt/Sandbox.2ae1fc75.js": {
    "type": "application/javascript",
    "etag": "\"5a6-r/jqdbi3mIzONDWBesarlhgE7lQ\"",
    "mtime": "2023-05-24T09:15:19.382Z",
    "size": 1446,
    "path": "../public/_nuxt/Sandbox.2ae1fc75.js"
  },
  "/_nuxt/Sandbox.cca703cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-mHxEbUrTDVS69EfFsv//OsC6XxA\"",
    "mtime": "2023-05-24T09:15:19.342Z",
    "size": 435,
    "path": "../public/_nuxt/Sandbox.cca703cd.css"
  },
  "/_nuxt/SourceLink.546395ad.js": {
    "type": "application/javascript",
    "etag": "\"ed-WrPidluCSYR3i0+RCYMxDGuNLOk\"",
    "mtime": "2023-05-24T09:15:19.345Z",
    "size": 237,
    "path": "../public/_nuxt/SourceLink.546395ad.js"
  },
  "/_nuxt/TabsHeader.56d3bbc7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a6-LCAge+xW5+p5e4FXAJ85Zxp0wtc\"",
    "mtime": "2023-05-24T09:15:19.338Z",
    "size": 1702,
    "path": "../public/_nuxt/TabsHeader.56d3bbc7.css"
  },
  "/_nuxt/TabsHeader.8a4e1d28.js": {
    "type": "application/javascript",
    "etag": "\"492-313xEoGhwtYfV2x7xOgs7d5mJlA\"",
    "mtime": "2023-05-24T09:15:19.371Z",
    "size": 1170,
    "path": "../public/_nuxt/TabsHeader.8a4e1d28.js"
  },
  "/_nuxt/Terminal.f422c615.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b1e-ZLxn7N24puHhqaOZYtjgtCfm+ps\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 2846,
    "path": "../public/_nuxt/Terminal.f422c615.css"
  },
  "/_nuxt/Terminal.f64a34ff.js": {
    "type": "application/javascript",
    "etag": "\"4dc-HCYPxhy8Ph4js6QjFaN1zG1gFaE\"",
    "mtime": "2023-05-24T09:15:19.373Z",
    "size": 1244,
    "path": "../public/_nuxt/Terminal.f64a34ff.js"
  },
  "/_nuxt/TokensPlayground.a27a8b97.js": {
    "type": "application/javascript",
    "etag": "\"fa-PDSjFkcc3He1+3V3Wg81g7FgRC4\"",
    "mtime": "2023-05-24T09:15:19.353Z",
    "size": 250,
    "path": "../public/_nuxt/TokensPlayground.a27a8b97.js"
  },
  "/_nuxt/useStudio.533f9b41.js": {
    "type": "application/javascript",
    "etag": "\"27b5-p/deW7NZpwBjX2DW/U9XVcdxrfg\"",
    "mtime": "2023-05-24T09:15:19.361Z",
    "size": 10165,
    "path": "../public/_nuxt/useStudio.533f9b41.js"
  },
  "/_nuxt/useStudio.6612a527.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"db3-2n8JUBjehamysCtZOP9F/4+B7YY\"",
    "mtime": "2023-05-24T09:15:19.335Z",
    "size": 3507,
    "path": "../public/_nuxt/useStudio.6612a527.css"
  },
  "/_nuxt/VideoPlayer.9fe4e6b2.js": {
    "type": "application/javascript",
    "etag": "\"756-/Od5IwcGIBVNjzGuWE3kI2J0XW0\"",
    "mtime": "2023-05-24T09:15:19.374Z",
    "size": 1878,
    "path": "../public/_nuxt/VideoPlayer.9fe4e6b2.js"
  },
  "/_nuxt/VideoPlayer.afedae8c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d8-IrkmvEwgcTRtoeLS0SMvnBUVGkg\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 1496,
    "path": "../public/_nuxt/VideoPlayer.afedae8c.css"
  },
  "/_nuxt/VoltaBoard.72364313.js": {
    "type": "application/javascript",
    "etag": "\"131-vL4uJ33621KGU1d5783Fw771StQ\"",
    "mtime": "2023-05-24T09:15:19.366Z",
    "size": 305,
    "path": "../public/_nuxt/VoltaBoard.72364313.js"
  },
  "/_nuxt/VoltaBoard.a5d6b336.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ce-T4Y7eyTZZLXoes5nCIc24C8K79M\"",
    "mtime": "2023-05-24T09:15:19.344Z",
    "size": 1230,
    "path": "../public/_nuxt/VoltaBoard.a5d6b336.css"
  },
  "/api/_content/cache.1684919680849.json": {
    "type": "application/json",
    "etag": "\"301384-bw313IEuWvBCdfsdl0HSHKFdoM8\"",
    "mtime": "2023-05-24T09:15:34.407Z",
    "size": 3150724,
    "path": "../public/api/_content/cache.1684919680849.json"
  },
  "/assets/docs/concepts/rendering/csr.svg": {
    "type": "image/svg+xml",
    "etag": "\"e3c4-bFaksTKQoNGW74xNXC2ND59V9sg\"",
    "mtime": "2023-05-22T06:49:06.384Z",
    "size": 58308,
    "path": "../public/assets/docs/concepts/rendering/csr.svg"
  },
  "/assets/docs/concepts/rendering/ssr.svg": {
    "type": "image/svg+xml",
    "etag": "\"12a34-PZNcUvaUzl0M8WRSPmA/4sC9vdw\"",
    "mtime": "2023-05-22T06:47:37.502Z",
    "size": 76340,
    "path": "../public/assets/docs/concepts/rendering/ssr.svg"
  },
  "/assets/docs/getting-started/views/app.svg": {
    "type": "image/svg+xml",
    "etag": "\"163a-muKiu75lpAlHDyCwYhMd+Pdw8S0\"",
    "mtime": "2023-03-28T09:44:54.596Z",
    "size": 5690,
    "path": "../public/assets/docs/getting-started/views/app.svg"
  },
  "/assets/docs/getting-started/views/components.svg": {
    "type": "image/svg+xml",
    "etag": "\"19e6-LmER9EN1b2U9A72s/oQ+qnYeXjw\"",
    "mtime": "2023-03-28T09:44:54.596Z",
    "size": 6630,
    "path": "../public/assets/docs/getting-started/views/components.svg"
  },
  "/assets/docs/getting-started/views/layouts.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e99-OSqot8M3eNs6suzKSnIao0XSUI0\"",
    "mtime": "2023-03-28T09:44:54.596Z",
    "size": 11929,
    "path": "../public/assets/docs/getting-started/views/layouts.svg"
  },
  "/assets/docs/getting-started/views/pages.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e42-fQX/iYscl16l/6+bAaXTJhk5Knc\"",
    "mtime": "2023-03-28T09:44:54.597Z",
    "size": 11842,
    "path": "../public/assets/docs/getting-started/views/pages.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

var version = "0.12.1";

const components = {
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                45,
                95
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                99,
                150
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "2000"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "meta": {
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"0\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"50px\""
        },
        {
          "name": "colors",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "[\"rgba(0, 71, 225, 0.22)\", \"rgba(26, 214, 255, 0.22)\", \"rgba(0, 220, 130, 0.22)\"]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "colors",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        }
      ]
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onMove",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "TocLink[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "TocLink[]",
                "schema": [
                  {
                    "kind": "object",
                    "type": "TocLink",
                    "schema": {
                      "id": {
                        "name": "id",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "declarations": [
                          {
                            "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                            "range": [
                              1924,
                              1934
                            ]
                          }
                        ],
                        "schema": "string"
                      },
                      "text": {
                        "name": "text",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "declarations": [
                          {
                            "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                            "range": [
                              1937,
                              1949
                            ]
                          }
                        ],
                        "schema": "string"
                      },
                      "depth": {
                        "name": "depth",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "number",
                        "declarations": [
                          {
                            "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                            "range": [
                              1952,
                              1965
                            ]
                          }
                        ],
                        "schema": "number"
                      },
                      "children": {
                        "name": "children",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "TocLink[] | undefined",
                        "declarations": [
                          {
                            "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                            "range": [
                              1968,
                              1988
                            ]
                          }
                        ],
                        "schema": "TocLink[] | undefined"
                      }
                    }
                  }
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": [
              {
                "kind": "object",
                "type": "TocLink",
                "schema": {
                  "id": {
                    "name": "id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                        "range": [
                          1924,
                          1934
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "text": {
                    "name": "text",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                        "range": [
                          1937,
                          1949
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "depth": {
                    "name": "depth",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                        "range": [
                          1952,
                          1965
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "TocLink[] | undefined",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/types.d.ts",
                        "range": [
                          1968,
                          1988
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "enum",
                      "type": "TocLink[] | undefined",
                      "schema": [
                        "undefined",
                        "TocLink[]"
                      ]
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "name": "onMove",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "props": [
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                273,
                388
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                434,
                547
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                613,
                730
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                852,
                963
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1056,
                1139
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from @nuxt/content.",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1197,
                1295
              ]
            }
          ],
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1367,
                1498
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.dir || \"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1670
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.edit"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "owner",
          "type": "string | undefined",
          "description": "Repository owner.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                273,
                388
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "repo",
          "type": "string | undefined",
          "description": "Repository name.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                434,
                547
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "branch",
          "type": "string | undefined",
          "description": "The branch to use for the edit link.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                613,
                730
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "dir",
          "type": "string | undefined",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                852,
                963
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "source",
          "type": "string | undefined",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1056,
                1139
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from @nuxt/content.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1197,
                1295
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "contentDir",
          "type": "string | undefined",
          "description": "Content directory (to be used with `page`)",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1367,
                1498
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "edit",
          "type": "boolean | undefined",
          "description": "Send to an edit page or not.",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1670
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "url",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                3787,
                3790
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "meta": {
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "source",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "meta": {
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "undefined"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string | undefined",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "meta": {
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Lang | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "Lang | undefined",
            "schema": [
              "undefined",
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"blade\"",
              "\"c\"",
              "\"cadence\"",
              "\"cdc\"",
              "\"clarity\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cmake\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"cs\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"erl\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"fs\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"glsl\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hs\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"imba\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"json5\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"liquid\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"marko\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"mermaid\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"proto\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"rel\"",
              "\"riscv\"",
              "\"rst\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stata\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"v\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\"",
              "\"zenscript\""
            ]
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "Lang",
            "schema": [
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"blade\"",
              "\"c\"",
              "\"cadence\"",
              "\"cdc\"",
              "\"clarity\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cmake\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"cs\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"erl\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"fs\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"glsl\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hs\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"imba\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"json5\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"liquid\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"marko\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"mermaid\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"proto\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"rel\"",
              "\"riscv\"",
              "\"rst\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stata\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"v\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\"",
              "\"zenscript\""
            ]
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string | number | undefined",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        },
        {
          "name": "height",
          "type": "string | number | undefined",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "props": [
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "ComputedStyleProp<\"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\"> | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                204,
                264
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp<\"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\"> | undefined",
            "schema": [
              "undefined",
              "\"white\"",
              "\"black\"",
              "\"gray\"",
              "\"green\"",
              "\"yellow\"",
              "\"orange\"",
              "\"red\"",
              "\"pear\"",
              "\"teal\"",
              "\"lightblue\"",
              "\"blue\"",
              "\"indigoblue\"",
              "\"royalblue\"",
              "\"purple\"",
              "\"pink\"",
              "\"ruby\"",
              "\"primary\"",
              "\"secondary\"",
              "\"shadow\"",
              "{ dark?: \"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\" | undefined; ... 10 more ...; portrait?: \"white\" | ... 18 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "blank",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                129,
                200
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                268,
                333
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                337,
                382
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; } | undefined",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; } | undefined",
            "schema": [
              "undefined",
              "\"small\"",
              "\"medium\"",
              "\"large\"",
              "\"giant\"",
              "{ dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "transparent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "color",
          "type": "ComputedStyleProp<\"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\">",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                204,
                264
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp<\"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\">",
            "schema": [
              "\"white\"",
              "\"black\"",
              "\"gray\"",
              "\"green\"",
              "\"yellow\"",
              "\"orange\"",
              "\"red\"",
              "\"pear\"",
              "\"teal\"",
              "\"lightblue\"",
              "\"blue\"",
              "\"indigoblue\"",
              "\"royalblue\"",
              "\"purple\"",
              "\"pink\"",
              "\"ruby\"",
              "\"primary\"",
              "\"secondary\"",
              "\"shadow\"",
              "{ dark?: \"white\" | \"black\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | \"ruby\" | \"primary\" | \"secondary\" | \"shadow\" | undefined; ... 10 more ...; portrait?: \"white\" | ... 18 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "blank",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                129,
                200
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                268,
                333
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
              "range": [
                337,
                382
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }",
            "schema": [
              "\"small\"",
              "\"medium\"",
              "\"large\"",
              "\"giant\"",
              "{ dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "transparent",
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
            "schema": {
              "summary": {
                "name": "summary",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              },
              "content": {
                "name": "content",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "preview",
          "global": false,
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "preview",
          "type": "boolean",
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "meta": {
      "props": [
        {
          "name": "as",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "keyof HTMLElementTagNameMap | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
              "range": [
                131,
                228
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap | undefined",
            "schema": [
              "undefined",
              "\"object\"",
              "\"map\"",
              "\"style\"",
              "\"label\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"code\"",
              "\"col\"",
              "\"colgroup\"",
              "\"data\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"html\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"link\"",
              "\"main\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"ruby\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"small\"",
              "\"source\"",
              "\"span\"",
              "\"strong\"",
              "\"sub\"",
              "\"summary\"",
              "\"sup\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"template\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"title\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          },
          "default": "\"div\""
        },
        {
          "name": "padded",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        },
        {
          "name": "fluid",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "as",
          "type": "keyof HTMLElementTagNameMap",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
              "range": [
                131,
                228
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap",
            "schema": [
              "\"object\"",
              "\"map\"",
              "\"style\"",
              "\"label\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"code\"",
              "\"col\"",
              "\"colgroup\"",
              "\"data\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"html\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"link\"",
              "\"main\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"ruby\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"small\"",
              "\"source\"",
              "\"span\"",
              "\"strong\"",
              "\"sub\"",
              "\"summary\"",
              "\"sup\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"template\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"title\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          }
        },
        {
          "name": "padded",
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        },
        {
          "name": "fluid",
          "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; md?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ]
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"app.vue\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:activeTabIndex",
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
            "schema": {
              "footer": {
                "name": "footer",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "onUpdate:activeTabIndex",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string | string[]",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "any[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "any[]",
                "schema": [
                  "any"
                ]
              }
            ]
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "props": [
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "[]"
        },
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "[]"
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | string[] | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[] | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "cta",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "secondary",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "video",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "snippet",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "meta": {
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { root?(_: {}): any; default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { root?(_: {}): any; default?(_: {}): any; }",
            "schema": {
              "root": {
                "name": "root",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              },
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "name": "title",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "token",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "meta": {
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": [
              "undefined",
              "Record<string, any>"
            ]
          },
          "default": "{}"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": [
              "undefined",
              "Record<string, any>"
            ]
          },
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "meta": {
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4274,
                4308
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "((...args: any[]) => any) | undefined",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "enum",
            "type": "((...args: any[]) => any) | undefined",
            "schema": [
              "undefined",
              {
                "kind": "event",
                "type": "(...args: any[]): any",
                "schema": [
                  "any"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "meta": {
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "meta": {
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "PreviewLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "pascalName": "PreviewLayout",
    "kebabName": "preview-layout",
    "chunkName": "components/preview-layout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "E:/nuxt3Docs/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8406,
                8433
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((_: {}) => any) | undefined",
                "declarations": [],
                "schema": {
                  "kind": "enum",
                  "type": "((_: {}) => any) | undefined",
                  "schema": [
                    "undefined",
                    {
                      "kind": "event",
                      "type": "(_: {}): any",
                      "schema": []
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "priority": 1,
    "fullPath": "E:/nuxt3Docs/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  }
};

const _N18lxh = eventHandler(async () => {
  const componentsIgnoredPrefix = ["Content", "DocumentDriven", "Markdown", "Prose"];
  const filteredComponents = Object.values(components).filter((c) => c.global && !componentsIgnoredPrefix.some((prefix) => c.pascalName.startsWith(prefix))).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { app, appConfigSchema, content: { sources, ignores, locales, highlight, navigation, documentDriven, experimental } } = runtimeConfig;
  const hasPinceau = runtimeConfig?.pinceau?.studio;
  let tokensConfig;
  let tokensConfigSchema;
  if (hasPinceau) {
    tokensConfig = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_config.json")).then((r) => r.json());
    tokensConfigSchema = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_schema.json")).then((r) => r.json());
  }
  return {
    // Studio version
    version,
    // app.config
    appConfigSchema: appConfigSchema || {},
    appConfig,
    // tokens.config
    tokensConfigSchema,
    tokensConfig,
    // @nuxt/content
    content: { sources, ignores, locales, highlight, navigation, documentDriven, experimental },
    // nuxt-component-meta
    components: filteredComponents
  };
});

const _yTtRLq = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = event.context.params["component?"];
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta: node.meta,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "").replace(/^(\d)/, "_$1");
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return void 0;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return void 0;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withTag("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const splitCodeToLines = (code) => {
    const lines = code.split(/\r\n|\r|\n/);
    return [...lines.map((line) => [{ content: line }])];
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return splitCodeToLines(code);
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return splitCodeToLines(code);
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false });
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], colorMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => {
      if (lineIndex !== lines.length - 1) {
        if (line.length === 0) {
          line.push({ content: "" });
        }
        line[line.length - 1].content += "\n";
      }
      return {
        type: "element",
        tag: "span",
        props: {
          class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim(),
          line: lineIndex + 1
        },
        children: line.map(tokenSpan)
      };
    });
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!colorMap[key]) {
        colorMap[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
          // hash(key)
        };
      }
      return { class: colorMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const colorMap = opts2?.colorMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { colorMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(colorMap)
    };
  };
  const generateStyles = (colorMap) => {
    const colors = [];
    for (const colorClass of Object.values(colorMap)) {
      Object.entries(colorClass.colors).forEach(([variant, color]) => {
        if (variant === "default") {
          colors.unshift(`.${colorClass.className}{color:${color}}`);
        } else {
          colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
        }
      });
    }
    return colors.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        color: {
          ...getColors(right, index),
          ...getColors(left, index)
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const colorMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, colorMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, colorMap)));
      if (Object.values(colorMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(colorMap) }]
        });
      }
    }
    async function highlightInline(node, colorMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { colorMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, colorMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { colorMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores, experimental = false) {
  ignores = ignores.map((e) => e);
  if (experimental) {
    const rxAll2 = ["/\\.", "/-", ...ignores].map((p) => new RegExp(p));
    return function isIgnored(key) {
      const path = "/" + key.replaceAll(":", "/");
      return rxAll2.some((rx) => rx.test(path));
    };
  }
  const rxAll = ["\\.", "-", ...ignores].map((p) => new RegExp(`^${p}|:${p}`));
  return function isIgnored(key) {
    return rxAll.some((rx) => rx.test(key));
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores, contentConfig.experimental.advancedIgnoresPattern);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _UEUhc2 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _cQmPfL = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _PWWC8a = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_Yja5gP = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Yja5gP, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _N18lxh, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _yTtRLq, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _yTtRLq, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid/**:params', handler: _UEUhc2, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _UEUhc2, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _UEUhc2, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1684919680849.json', handler: _cQmPfL, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _PWWC8a, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _PWWC8a, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _PWWC8a, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_Yja5gP, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
