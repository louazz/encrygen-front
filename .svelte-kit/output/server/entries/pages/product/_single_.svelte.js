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
  let name = "", price = "";
  $$unsubscribe_token();
  $$unsubscribe_page();
  $$unsubscribe_id();
  return `<br>
   <form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Name</label>
           <input class="${"form-control form-control-solid"}" type="${"text"}" id="${"exampleEmailInput"}"${add_attribute("value", name, 0)}></div>
         <div class="${"six columns"}"><label for="${"exampleEmailInput"}">Price</label>
          <input class="${"form-control form-control-solid"}" type="${"text"}" id="${"exampleEmailInput"}"${add_attribute("value", price, 0)}></div>     
       
         <br>
         ${$page.params.single == "new" ? `<button class="${"button-primary"}">Add</button>` : `<button class="${"button-secondary"}">Edit</button>`}</div></form>`;
});
export { U5Bsingleu5D as default };
