import __nuxt_component_0 from './DocsTocLinks-5f7b5ce0.mjs';
import { _ as _export_sfc, i as useContent } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'destr';
import 'klona';
import 'ohash';
import 'cookie-es';
import 'nanoid';
import 'scule';
import 'defu';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsToc",
  __ssrInlineRender: true,
  emits: ["move"],
  setup(__props, { emit }) {
    const { toc } = useContent();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_DocsTocLinks = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-toc" }, _attrs))} data-v-ebd2b6b2>`);
      if ((_b = (_a = unref(toc)) == null ? void 0 : _a.links) == null ? void 0 : _b.length) {
        _push(`<!--[--><div class="docs-toc-title" data-v-ebd2b6b2><span data-v-ebd2b6b2>Table of Contents</span></div>`);
        _push(ssrRenderComponent(_component_DocsTocLinks, {
          links: unref(toc).links,
          onMove: ($event) => emit("move")
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebd2b6b2"]]);

export { __nuxt_component_7 as default };
//# sourceMappingURL=DocsToc-7574150e.mjs.map
