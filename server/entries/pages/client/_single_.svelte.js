import { c as create_ssr_component, b as subscribe, a as add_attribute } from "../../../chunks/index-a5d9ba29.js";
import { p as page } from "../../../chunks/stores-2b2fafba.js";
import { t as token, i as id } from "../../../chunks/useToken-2b5e9c0a.js";
const U5Bsingleu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_id;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_id = subscribe(id, (value) => value);
  let name = "", Faddress = "", postcode = "", city = "", country = "";
  $$unsubscribe_token();
  $$unsubscribe_page();
  $$unsubscribe_id();
  return `<form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Name</label>
        <input class="${"u-full-width"}" type="${"text"}"${add_attribute("placeholder", name, 0)} id="${"exampleEmailInput"}"${add_attribute("value", name, 0)}></div>
      <div class="${"six columns"}"><label for="${"exampleEmailInput"}">First Line Address</label>
        <input class="${"u-full-width"}" type="${"text"}"${add_attribute("placeholder", Faddress, 0)} id="${"exampleEmailInput"}"${add_attribute("value", Faddress, 0)}></div></div>
    <div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">postcode</label>
          <input class="${"u-full-width"}" type="${"text"}"${add_attribute("placeholder", postcode, 0)} id="${"exampleEmailInput"}"${add_attribute("value", postcode, 0)}></div>
        <div class="${"six columns"}"><label for="${"exampleEmailInput"}">city</label>
          <input class="${"u-full-width"}" type="${"text"}"${add_attribute("placeholder", city, 0)} id="${"exampleEmailInput"}"${add_attribute("value", city, 0)}></div></div>
      <div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">country</label>
          <input class="${"u-full-width"}" type="${"text"}"${add_attribute("placeholder", country, 0)} id="${"exampleEmailInput"}"${add_attribute("value", country, 0)}></div></div>
      ${$page.params.single == "new" ? `<input class="${"button-primary"}" type="${"submit"}" value="${"Add"}">` : `<input class="${"button-primary"}" type="${"submit"}" value="${"Edit"}">`}</form>`;
});
export { U5Bsingleu5D as default };
