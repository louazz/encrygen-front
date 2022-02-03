import { c as create_ssr_component, b as subscribe, a as add_attribute } from "../../../chunks/index-a5d9ba29.js";
import { i as id, t as token } from "../../../chunks/useToken-2b5e9c0a.js";
const Document = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_id;
  let $$unsubscribe_token;
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_token = subscribe(token, (value) => value);
  let key = "";
  let title = "";
  $$unsubscribe_id();
  $$unsubscribe_token();
  return `<form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Title</label>
        <input class="${"u-full-width"}" type="${"text"}" placeholder="${"Title of the document"}"${add_attribute("value", title, 0)}></div>
      <div class="${"six columns"}"><label for="${"exampleEmailInput"}">Key</label>
        <input class="${"u-full-width"}" type="${"text"}" placeholder="${"Encryption key (secret)"}"${add_attribute("value", key, 0)}></div></div>
    <label for="${"exampleMessage"}">Content</label>
    <textarea class="${"u-full-width"}" placeholder="${"Content..."}">${""}</textarea>
    
    <input class="${"button-primary"}" type="${"submit"}" value="${"Generate"}"></form>`;
});
export { Document as default };
