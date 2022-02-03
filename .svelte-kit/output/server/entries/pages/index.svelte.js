import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-a5d9ba29.js";
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Your email</label>
        <input class="${"u-full-width"}" type="${"email"}" placeholder="${"test@mailbox.com"}" id="${"exampleEmailInput"}"${add_attribute("value", email, 0)}></div>
      <div class="${"six columns"}"><label for="${"exampleRecipientInput"}">Reason for contacting</label>
        <select class="${"u-full-width"}" id="${"exampleRecipientInput"}"><option value="${"Option 1"}">Questions</option><option value="${"Option 2"}">Admiration</option><option value="${"Option 3"}">Can I get your number?</option></select></div></div>
    <label for="${"exampleMessage"}">Message</label>
    <textarea class="${"u-full-width"}" placeholder="${"Hi Dave \u2026"}" id="${"exampleMessage"}">${""}</textarea>
    <label class="${"example-send-yourself-copy"}"><input type="${"checkbox"}">
      <span class="${"label-body"}">Agree to terms</span></label>
    <input class="${"button-primary"}" type="${"submit"}" value="${"Submit"}"></form>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Form, "Form").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
