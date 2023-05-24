import { _ as _export_sfc, e as computedStyle, u as usePinceauRuntime, d as __nuxt_component_0$6, b as __nuxt_component_0$4 } from '../server.mjs';
import ContentSlot from './ContentSlot-e754006a.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ButtonLink",
  __ssrInlineRender: true,
  props: {
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    color: computedStyle("primary"),
    href: {
      type: String,
      required: true,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    ...{ "size": { "required": false, "type": [String, Object], "default": "medium" }, "transparent": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const _13E_buttonPrimary = computed(() => ((props = __$pProps) => `{color.${props.color}.600}`)());
    const _ukP_buttonSecondary = computed(() => ((props = __$pProps) => `{color.${props.color}.500}`)());
    const __$pVariants = { "size": { "small": { "padding": "{space.2} {space.4}", "fontSize": "{text.sm.fontSize}", "lineHeight": "{text.sm.lineHeight}" }, "medium": { "padding": "{space.rem.625} {space.5}", "fontSize": "{text.base.fontSize}", "lineHeight": "{text.base.lineHeight}" }, "large": { "padding": "{space.3} {space.6}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" }, "giant": { "padding": "{space.4} {space.8}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" } }, "transparent": { "true": { "backgroundColor": "transparent" } } };
    const { $pinceau } = usePinceauRuntime(__$pProps, __$pVariants, { _13E_buttonPrimary, _ukP_buttonSecondary });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Icon = __nuxt_component_0$4;
      const _component_ContentSlot = ContentSlot;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["button-link", [unref($pinceau)]],
        to: __props.href,
        target: __props.blank ? "_blank" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ContentSlot, {
              use: _ctx.$slots.default,
              unwrap: "p ul li"
            }, null, _parent2, _scopeId));
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: __props.icon
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createVNode(_component_ContentSlot, {
                use: _ctx.$slots.default,
                unwrap: "p ul li"
              }, null, 8, ["use"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6bf94fc7"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=ButtonLink-beb27be8.mjs.map
