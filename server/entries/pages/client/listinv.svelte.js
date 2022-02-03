import { c as create_ssr_component, b as subscribe, g as each, e as escape, a as add_attribute } from "../../../chunks/index-a5d9ba29.js";
import { b as clientt, j as fil } from "../../../chunks/useToken-2b5e9c0a.js";
const Listinv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $fil, $$unsubscribe_fil;
  $$unsubscribe_fil = subscribe(fil, (value) => $fil = value);
  let cliient = "";
  {
    clientt.set(cliient);
  }
  $$unsubscribe_fil();
  return `<table class="${"u-full-width"}"><thead><tr><th colspan="${"3"}">Client</th>
          <th><a href="${"/"}">New</a></th></tr>
        <tr><th>id</th>
          <th>name</th>
          <th>postcode</th>
          <th>action</th></tr></thead>
      <tbody>${each($fil, (client) => {
    return `<tr><td><strong>${escape(client._id)}</strong></td>
          <td>${escape(client.name)}</td>
          <td>${escape(client.postcode)}</td>
          <td><input type="${"radio"}" name="${"scoops"}"${add_attribute("value", client._id, 0)}${client._id === cliient ? add_attribute("checked", true, 1) : ""}></td>
         
        </tr>`;
  })}</tbody></table>`;
});
export { Listinv as default };
