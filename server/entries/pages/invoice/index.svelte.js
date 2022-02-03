import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../chunks/index-a5d9ba29.js";
import Product from "../product/index.svelte.js";
import Client from "../client/index.svelte.js";
import { p as prodq, i as id, b as clientt, t as token } from "../../../chunks/useToken-2b5e9c0a.js";
import "../../../chunks/navigation-92f05dd6.js";
import "../product/list.svelte.js";
import "../product/listinv.svelte.js";
import "../client/list.svelte.js";
import "../client/listinv.svelte.js";
const Invoice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prodq;
  let $$unsubscribe_id;
  let $$unsubscribe_clientt;
  let $$unsubscribe_token;
  $$unsubscribe_prodq = subscribe(prodq, (value) => value);
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_clientt = subscribe(clientt, (value) => value);
  $$unsubscribe_token = subscribe(token, (value) => value);
  let key = "";
  $$unsubscribe_prodq();
  $$unsubscribe_id();
  $$unsubscribe_clientt();
  $$unsubscribe_token();
  return `<div class="${"navbar"}">
    <a class="${"active"}" href="${"#"}">Generate</a>
    
    <a hrf="${"#"}"><input type="${"text"}" placeholder="${"Choose a Key"}"${add_attribute("value", key, 0)}></a></div>
  
<div class="${"main"}"><h3>Add Products</h3>
<hr>
${validate_component(Product, "Product").$$render($$result, { invoice: true }, {}, {})}
<hr>
<h3>Select Client</h3>
<hr>
${validate_component(Client, "Client").$$render($$result, { invoice: true }, {}, {})}
<hr>
<br>
<br></div>`;
});
export { Invoice as default };
