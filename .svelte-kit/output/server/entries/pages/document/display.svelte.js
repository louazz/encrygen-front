import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../chunks/index-a5d9ba29.js";
import { a as tttt, t as token, i as id } from "../../../chunks/useToken-2b5e9c0a.js";
import List from "./list.svelte.js";
const Display = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $$unsubscribe_id;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_id = subscribe(id, (value) => value);
  let val = "";
  {
    tttt.set(val);
  }
  $$unsubscribe_token();
  $$unsubscribe_id();
  return `<center><input type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", val, 0)}></center>
          <hr>
      
         ${validate_component(List, "List").$$render($$result, {}, {}, {})}`;
});
export { Display as default };
