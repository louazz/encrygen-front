import { c as create_ssr_component } from "../../../chunks/index-a5d9ba29.js";
var QrJs_svelte_svelte_type_style_lang = "";
const css = {
  code: "#qrcode.svelte-18fow5x{width:100px;height:100x;margin-top:1px}",
  map: null
};
const QrJs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { codeValue } = $$props;
  let { squareSize } = $$props;
  if ($$props.codeValue === void 0 && $$bindings.codeValue && codeValue !== void 0)
    $$bindings.codeValue(codeValue);
  if ($$props.squareSize === void 0 && $$bindings.squareSize && squareSize !== void 0)
    $$bindings.squareSize(squareSize);
  $$result.css.add(css);
  return `<div id="${"qrcode"}" class="${"svelte-18fow5x"}"></div>`;
});
export { QrJs as default };
