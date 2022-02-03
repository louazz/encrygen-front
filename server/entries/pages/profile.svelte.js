import { c as create_ssr_component, b as subscribe, a as add_attribute } from "../../chunks/index-a5d9ba29.js";
import { t as token, i as id, e as profile } from "../../chunks/useToken-2b5e9c0a.js";
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_token;
  let $$unsubscribe_id;
  let $$unsubscribe_profile;
  $$unsubscribe_token = subscribe(token, (value) => value);
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  let Institution = "", country = "", city = "", postcode = "";
  $$unsubscribe_token();
  $$unsubscribe_id();
  $$unsubscribe_profile();
  return `
<form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Institution</label>
        <input class="${"u-full-width"}" type="${"text"}" placeholder="${"Birkbeck College"}"${add_attribute("value", Institution, 0)}></div>
      <div class="${"six columns"}"><label for="${"exampleEmailInput"}">country</label>
        <input class="${"u-full-width"}" type="${"text"}" placeholder="${"England, UK"}"${add_attribute("value", country, 0)}></div></div>
    <div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">city</label>
            <input class="${"u-full-width"}" type="${"text"}" placeholder="${"London"}"${add_attribute("value", city, 0)}></div>
          <div class="${"six columns"}"><label for="${"exampleEmailInput"}">postcode</label>
            <input class="${"u-full-width"}" type="${"text"}" placeholder="${"N1 6RU"}"${add_attribute("value", postcode, 0)}></div></div>
    <button class="${"button-primary"}" type="${"submit"}" value="${"Submit"}">Submit</button></form>`;
});
export { Profile as default };
