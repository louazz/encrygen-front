import { c as create_ssr_component, b as subscribe, g as each, e as escape } from "../../../chunks/index-a5d9ba29.js";
import { t as token, h as filtered } from "../../../chunks/useToken-2b5e9c0a.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $filtered, $$unsubscribe_filtered;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_filtered = subscribe(filtered, (value) => $filtered = value);
  $$unsubscribe_token();
  $$unsubscribe_filtered();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"3"}">Product</th>
        <th><a href="${"/product/new"}">New</a></th></tr>
      <tr><th>id</th>
        <th>name</th>
        <th>price</th>
        <th>action</th></tr></thead>
    <tbody>${each($filtered, (product) => {
    return `<tr><td><strong>${escape(product._id)}</strong></td>
        <td>${escape(product.name)}</td>
        <td>${escape(product.price)}</td>
        
        <td><a href="${"/product/" + escape(product._id)}">Edit</a> <a>Delete</a></td>
       
      </tr>`;
  })}</tbody></table>`;
});
export { List as default };
