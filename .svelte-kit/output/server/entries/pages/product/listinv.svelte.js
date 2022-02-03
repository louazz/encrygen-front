import { c as create_ssr_component, b as subscribe, e as escape, g as each, a as add_attribute } from "../../../chunks/index-a5d9ba29.js";
import { p as prodq, h as filtered } from "../../../chunks/useToken-2b5e9c0a.js";
const Listinv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prodq;
  let $filtered, $$unsubscribe_filtered;
  $$unsubscribe_prodq = subscribe(prodq, (value) => value);
  $$unsubscribe_filtered = subscribe(filtered, (value) => $filtered = value);
  let total = 0;
  $$unsubscribe_prodq();
  $$unsubscribe_filtered();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"4"}">Product</th>
          <th>Total: ${escape(total)} \xA3</th></tr>
        <tr><th>id</th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>action</th></tr></thead>
      <tbody>${each($filtered, (product) => {
    return `<tr><td><strong>${escape(product._id)}</strong></td>
          <td>${escape(product.name)}</td>
          <td>${escape(product.price)} \xA3</td>
          <td><input type="${"text"}" id="${"name"}" name="${"name"}" required minlength="${"4"}" maxlength="${"5"}" size="${"2"}"${add_attribute("value", product.quantity, 0)}></td>
          
          <td><a role="${"button"}" href="${"#"}">add</a> <a href="${"#"}">remove</a></td>
        </tr>`;
  })}</tbody></table>`;
});
export { Listinv as default };
