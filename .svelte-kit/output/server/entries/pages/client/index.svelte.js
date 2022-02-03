import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../chunks/index-a5d9ba29.js";
import { g as t, t as token, i as id, e as profile } from "../../../chunks/useToken-2b5e9c0a.js";
import { g as goto } from "../../../chunks/navigation-92f05dd6.js";
import List from "./list.svelte.js";
import Listinv from "./listinv.svelte.js";
const Client = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $$unsubscribe_id;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_token = subscribe(token, (value2) => value2);
  $$unsubscribe_id = subscribe(id, (value2) => value2);
  $$unsubscribe_profile = subscribe(profile, (value2) => $profile = value2);
  let value = "";
  let { invoice } = $$props;
  if ($profile == false) {
    goto("/profile#");
  }
  if ($$props.invoice === void 0 && $$bindings.invoice && invoice !== void 0)
    $$bindings.invoice(invoice);
  {
    t.set(value);
  }
  $$unsubscribe_token();
  $$unsubscribe_id();
  $$unsubscribe_profile();
  return `<center><input type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", value, 0)}></center>
    <hr>
    ${invoice == true ? `${validate_component(Listinv, "Listinv").$$render($$result, {}, {}, {})}` : `${validate_component(List, "List").$$render($$result, {}, {}, {})}`}`;
});
export { Client as default };
