import { c as create_ssr_component, b as subscribe, g as each, e as escape } from "../../../chunks/index-a5d9ba29.js";
import { t as token, j as fil } from "../../../chunks/useToken-2b5e9c0a.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $fil, $$unsubscribe_fil;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_fil = subscribe(fil, (value) => $fil = value);
  $$unsubscribe_token();
  $$unsubscribe_fil();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"3"}">Client</th>
          <th><a href="${"/client/new"}">New</a></th></tr>
        <tr><th>id</th>
          <th>name</th>
          <th>postcode</th>
          <th>action</th></tr></thead>
      <tbody>${each($fil, (client) => {
    return `<tr><td><strong>${escape(client._id)}</strong></td>
          <td>${escape(client.name)}</td>
          <td>${escape(client.postcode)}</td>
          
          <td><a href="${"/client/" + escape(client._id)}">Edit</a> <a>Delete</a></td>
         
        </tr>`;
  })}</tbody></table>`;
});
export { List as default };
