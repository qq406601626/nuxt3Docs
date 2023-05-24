import { useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useClipboard } from './index-6c9c9e4d.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "Terminal",
  __ssrInlineRender: true,
  props: {
    content: {
      type: [Array, String],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useClipboard();
    const state = ref("init");
    const lines = computed(() => {
      if (typeof props.content === "string") {
        return [props.content];
      }
      return props.content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terminal" }, _attrs))} data-v-63eb7158>`);
      if (unref(state) === "copied") {
        _push(`<div class="copied" data-v-63eb7158><div class="scrim" data-v-63eb7158></div><div class="content" data-v-63eb7158> Copied! </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header" data-v-63eb7158><div class="controls" data-v-63eb7158><div data-v-63eb7158></div><div data-v-63eb7158></div><div data-v-63eb7158></div></div><div class="title" data-v-63eb7158> Bash </div></div><div class="window" data-v-63eb7158><!--[-->`);
      ssrRenderList(unref(lines), (line) => {
        _push(`<span class="line" data-v-63eb7158><span class="sign" data-v-63eb7158>$</span><span class="content" data-v-63eb7158>${ssrInterpolate(line)}</span></span>`);
      });
      _push(`<!--]--></div>`);
      if (unref(state) !== "copied") {
        _push(`<div class="prompt" data-v-63eb7158> Click to copy </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Terminal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63eb7158"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Terminal-be009126.mjs.map
