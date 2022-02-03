import { c as create_ssr_component, b as subscribe, g as each, e as escape } from "../../../chunks/index-a5d9ba29.js";
import { t as token, l as filly } from "../../../chunks/useToken-2b5e9c0a.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $filly, $$unsubscribe_filly;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_filly = subscribe(filly, (value) => $filly = value);
  $$unsubscribe_token();
  $$unsubscribe_filly();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"2"}">Invoices</th>
          <th><a href="${"/invoice#"}">New</a></th></tr>
        <tr><th>id</th>
          <th>date</th>
          <th>action</th></tr></thead>
      <tbody>${each($filly, (inv) => {
    return `<tr><td><strong>${escape(inv._id)}</strong></td>
          <td>${escape(new Date(inv.created_at))}</td>
          
          <td><a href="${"#"}">Delete </a>  <a href="${"/invoice/" + escape(encodeURI(inv.encr))}">View</a>   <a href="${"#"}">regenerateKey</a></td>
         
        </tr>`;
  })}</tbody></table>`;
});
export { List as default };
