import __nuxt_component_1 from './ButtonLink-beb27be8.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './ContentSlot-e754006a.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ButtonLink = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-not-found not-prose" }, _attrs))} data-v-b556344b><main data-v-b556344b><p data-v-b556344b> 404 </p><div class="content" data-v-b556344b><div class="text-section" data-v-b556344b><h1 data-v-b556344b> Not Found </h1><p data-v-b556344b> This is not the page you&#39;re looking for. </p></div><div class="button-section" data-v-b556344b>`);
  _push(ssrRenderComponent(_component_ButtonLink, {
    href: "/",
    size: "large",
    variant: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Go back home `);
      } else {
        return [
          createTextVNode(" Go back home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b556344b"]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=DocumentDrivenNotFound-9b0c148b.mjs.map
