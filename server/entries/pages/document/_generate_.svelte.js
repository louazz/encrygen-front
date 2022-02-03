import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../chunks/index-a5d9ba29.js";
import { p as page } from "../../../chunks/stores-2b2fafba.js";
import QrJs from "./QrJs.svelte.js";
const U5Bgenerateu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let title = null, content = null, profile = {}, id = null, date = null;
  $$unsubscribe_page();
  return `<center><button class="${"button-secondary"}">Download PDF</button></center>
<hr>
<div id="${"capture"}"><div class="${"row"}"><div class="${"one-half column"}"><p><small>id: ${escape(id)}</small></p> <p>${validate_component(QrJs, "QrCode").$$render($$result, {
    codeValue: window.location.href,
    squareSize: "100"
  }, {}, {})} <small>scan and share</small></p></div>
    <div class="${"one-half column"}"><p class="${"u-pull-right"}"><small>${escape(profile.Institution)} <br>
      ${escape(profile.postcode)} <br>
       ${escape(profile.city)} <br>
       ${escape(profile.country)}</small></p></div></div>

<center><h5>${escape(title)}</h5></center>
<p>${escape(content)}</p>

      <div class="${"row"}"><div class="${"one-half column"}"><small>Date and time: ${escape(date)}</small></div>
        <div class="${"one-half column"}"><p class="${"u-pull-right"}"><small>signature</small></p></div></div></div>`;
});
export { U5Bgenerateu5D as default };
