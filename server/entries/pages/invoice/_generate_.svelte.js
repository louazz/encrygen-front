import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, g as each } from "../../../chunks/index-a5d9ba29.js";
import { p as page } from "../../../chunks/stores-2b2fafba.js";
import QrJs from "./QrJs.svelte.js";
const U5Bgenerateu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let products = [], total = 0, client = {}, id = "", profile = {}, date = null;
  $$unsubscribe_page();
  return `<center><button class="${"button-secondary"}">Download PDF</button></center>
<hr>
<div id="${"capture"}"><div class="${"row"}"><div class="${"one-half column"}"><p><small>${escape(client["name"])}<br>
     ${escape(client["Faddress"])}<br>
    ${escape(client["country"])}<br>
 ${escape(client["city"])}<br>
     ${escape(client["postcode"])}</small></p></div>
<div class="${"one-half column"}"><p class="${"u-pull-right"}"><small>${escape(profile.Institution)} <br>
  ${escape(profile.postcode)} <br>
   ${escape(profile.city)} <br>
   ${escape(profile.country)}</small></p></div></div>

<center><h5>Invoice</h5><p><small>id: ${escape(id)}</small></p> <p>${validate_component(QrJs, "QrCode").$$render($$result, {
    codeValue: window.location.href,
    squareSize: "100"
  }, {}, {})} <small>scan and share</small></p></center>

<table class="${"u-full-width"}"><thead><tr><th colspan="${"3"}">Product</th>
      <th>Total: ${escape(total)} \xA3</th></tr>
    <tr><th>id</th>
      <th>name</th>
      <th>price</th>
      <th>quantity</th></tr></thead>
  <tbody>${each(products, (product) => {
    return `<tr><td><strong>${escape(product.id)}</strong></td>
      <td>${escape(product.name)}</td>
      <td>${escape(product.price)} \xA3</td>
      <td>${escape(product.quantity)}</td>
    </tr>`;
  })}</tbody></table>
  <div class="${"row"}"><div class="${"one-half column"}"><small>Date and time: ${escape(date)}</small></div>
    <div class="${"one-half column"}"><p class="${"u-pull-right"}"><small>signature</small></p></div></div></div>`;
});
export { U5Bgenerateu5D as default };
