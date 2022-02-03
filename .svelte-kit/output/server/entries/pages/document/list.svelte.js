import { c as create_ssr_component, b as subscribe, g as each, e as escape } from "../../../chunks/index-a5d9ba29.js";
import { t as token, f as fillyy } from "../../../chunks/useToken-2b5e9c0a.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $fillyy, $$unsubscribe_fillyy;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_fillyy = subscribe(fillyy, (value) => $fillyy = value);
  $$unsubscribe_token();
  $$unsubscribe_fillyy();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"2"}">Documents</th>
          <th><a href="${"/document"}">New</a></th></tr>
        <tr><th>id</th>
          <th>date</th>
          <th>action</th></tr></thead>
      <tbody>${each($fillyy, (inv) => {
    return `<tr><td><strong>${escape(inv._id)}</strong></td>
          <td>${escape(new Date(inv.created_at))}</td>
          
          <td><a href="${"#"}">Delete </a>  <a href="${"/document/" + escape(encodeURI(inv.encr))}">View</a>   <a href="${"#"}">regenerateKey</a></td>
         
        </tr>`;
  })}</tbody></table>`;
});
export { List as default };
