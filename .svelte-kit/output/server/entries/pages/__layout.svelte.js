import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, v as validate_component, i as is_promise, n as noop } from "../../chunks/index-a5d9ba29.js";
import { c as checker, t as token } from "../../chunks/useToken-2b5e9c0a.js";
const Lorem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `The main purpose of this application is to allow companies and idividuals to generate documents including invoices with high encryption standards. 
            Indeed, only the person who has knowledge about the key, can view the documents. <br>Behind the scenes a Feistel algorithm is working to encrypt and decrypt your documents. 
            While we do not keep any copy of your keys, you can always regenerate a new one and receive an email as a reminder. <br>
            You can forward the email (Qr code + key) to the the concerned person/entity ,so that, he/she/they could view it and download it.<br>Remark:
<strong>Our encryption algorithm supports numbers and lowercase characters. In case you could not access your document with your key, you can always browse documents/invoices and &quot;regenerate a key&quot;.</strong>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { width = "8rem" } = $$props;
  let { height = "8rem" } = $$props;
  let { focusable = false } = $$props;
  let icons = [
    {
      box: 452.949,
      name: "gear",
      svg: `
<g>
	<g>
		<g>
			<path d="M452.949,164.23h-76.187l53.912-53.912l-88.043-88.043l-53.912,53.912V0H164.23v76.187l-53.912-53.912l-88.044,88.043
				l53.912,53.912H0.001v124.487h76.187L22.275,342.63l88.044,88.044l53.912-53.912v76.187h124.487v-76.187l53.912,53.913
				l88.044-88.044l-53.912-53.912h76.187V164.23z M340.55,273.718l68.912,68.912l-66.831,66.831l-68.912-68.913v97.4H179.23v-97.4
				l-68.912,68.913L43.488,342.63l68.912-68.912H15.001V179.23H112.4l-68.912-68.912l66.831-66.831L179.23,112.4V15h94.487v97.4
				l68.912-68.912l66.831,66.831l-68.912,68.912h97.399v94.487H340.55z"/>
			<path d="M226.475,124.417c-56.274,0-102.057,45.783-102.057,102.057S170.2,328.531,226.475,328.531
				c56.275,0,102.058-45.783,102.058-102.057C328.533,170.2,282.749,124.417,226.475,124.417z M218.975,139.744v34.986
				c-22.841,3.296-40.948,21.403-44.244,44.244h-34.986C143.349,176.942,176.943,143.348,218.975,139.744z M218.975,313.204
				c-42.032-3.603-75.626-37.198-79.23-79.23h34.986c3.296,22.841,21.403,40.948,44.244,44.244V313.204z M189.185,226.474
				c0-20.562,16.729-37.29,37.29-37.29c20.563,0,37.291,16.728,37.291,37.29s-16.729,37.29-37.291,37.29
				S189.185,247.036,189.185,226.474z M233.975,313.205v-34.986c22.841-3.296,40.949-21.403,44.245-44.244h34.986
				C309.602,276.006,276.007,309.601,233.975,313.205z M278.22,218.974c-3.296-22.841-21.404-40.948-44.245-44.244v-34.986
				c42.032,3.604,75.627,37.198,79.231,79.23H278.22z"/>
			<rect x="211.545" y="44.79" width="29.86" height="15"/>
			<rect x="211.545" y="393.158" width="29.86" height="15"/>
			<rect x="42.337" y="218.974" width="29.86" height="15"/>
			<rect x="380.752" y="218.974" width="29.86" height="15"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>


	`
    },
    {
      box: 490,
      name: "docs",
      svg: `<g>
	<g id="XMLID_25_">
		<g>
			<polygon style="fill:#AFB6BB;" points="430,100 340,100 340,10 			"/>
			<polygon style="fill:#FFFFFF;" points="430,100 430,480 60,480 60,10 340,10 340,100 			"/>
		</g>
		<g>
			<path style="fill:#231F20;" d="M439.976,100c-0.001-2.602-0.993-5.159-2.905-7.071l-90-90c-1.913-1.912-4.47-2.904-7.071-2.905V0
				H60c-5.523,0-10,4.477-10,10v470c0,5.523,4.477,10,10,10h370c5.523,0,10-4.477,10-10V100H439.976z M350,34.142L405.858,90H350
				V34.142z M70,470V20h260v80c0,5.523,4.477,10,10,10h80v360H70z"/>
			<rect x="130" y="160" style="fill:#231F20;" width="260" height="20"/>
			<rect x="100" y="220" style="fill:#231F20;" width="290" height="20"/>
			<rect x="100" y="280" style="fill:#231F20;" width="290" height="20"/>
			<rect x="100" y="340" style="fill:#231F20;" width="290" height="20"/>
			<rect x="100" y="400" style="fill:#231F20;" width="230" height="20"/>
			<rect x="355" y="400" style="fill:#231F20;" width="35" height="20"/>
			<rect x="100" y="45" style="fill:#231F20;" width="60" height="20"/>
			<rect x="100" y="80" style="fill:#231F20;" width="120" height="20"/>
		</g>
	</g>
</g>`
    },
    {
      box: 512,
      name: "Qr",
      svg: `<g>
	<g>
		<path d="M189.17,50.363H96.28c-5.271,0-9.545,4.274-9.545,9.545v92.89c0,5.271,4.274,9.545,9.545,9.545h92.89
			c5.271,0,9.545-4.274,9.545-9.545v-92.89C198.715,54.636,194.441,50.363,189.17,50.363z M179.625,143.252h-73.8v-73.8h73.8
			V143.252z"/>
	</g>
</g>
<g>
	<g>
		<path d="M454.327,94.288c5.271,0,9.545-4.274,9.545-9.545V59.908c0-5.271-4.274-9.545-9.545-9.545h-92.89
			c-5.271,0-9.545,4.274-9.545,9.545v92.89c0,5.271,4.274,9.545,9.545,9.545h92.89c5.271,0,9.545-4.274,9.545-9.545v-36.875
			c0-5.271-4.274-9.545-9.545-9.545c-5.271,0-9.545,4.274-9.545,9.545v27.33h-73.8v-73.8h73.8v15.291
			C444.782,90.015,449.056,94.288,454.327,94.288z"/>
	</g>
</g>
<g>
	<g>
		<path d="M454.327,315.52h-92.89c-5.271,0-9.545,4.274-9.545,9.545v92.89c0,5.271,4.274,9.545,9.545,9.545h92.89
			c5.271,0,9.545-4.274,9.545-9.545v-92.89C463.872,319.794,459.598,315.52,454.327,315.52z M444.782,408.41h-73.8v-73.8h73.8
			V408.41z"/>
	</g>
</g>
<g>
	<g>
		<path d="M502.455,2.228H48.143c-5.271,0-9.545,4.274-9.545,9.545v374.262c0,5.271,4.274,9.545,9.545,9.545
			c5.271,0,9.545-4.274,9.545-9.545V21.318H492.91V456.54h-83.382c-5.271,0-9.545,4.274-9.545,9.545
			c0,5.271,4.274,9.545,9.545,9.545h92.927c5.271,0,9.545-4.274,9.545-9.545V11.773C512,6.502,507.726,2.228,502.455,2.228z"/>
	</g>
</g>
<g>
	<g>
		<path d="M377.712,456.54H119.259c-5.271,0-9.545,4.274-9.545,9.545c0,5.271,4.274,9.545,9.545,9.545h258.453
			c5.271,0,9.545-4.274,9.545-9.545C387.257,460.814,382.983,456.54,377.712,456.54z"/>
	</g>
</g>
<g>
	<g>
		<path d="M271.485,116.032h-47.722c-5.271,0-9.545,4.274-9.545,9.545c0,5.271,4.274,9.545,9.545,9.545h47.722
			c5.271,0,9.545-4.274,9.545-9.545C281.03,120.305,276.756,116.032,271.485,116.032z"/>
	</g>
</g>
<g>
	<g>
		<path d="M420.378,243.926h-49.395v-47.721c0-5.271-4.274-9.545-9.545-9.545s-9.545,4.274-9.545,9.545v87.808
			c0,5.271,4.274,9.545,9.545,9.545s9.545-4.274,9.545-9.545v-20.997h49.395c5.271,0,9.545-4.274,9.545-9.545
			C429.923,248.199,425.649,243.926,420.378,243.926z"/>
	</g>
</g>
<g>
	<g>
		<path d="M326.844,50.363h-103.08c-5.271,0-9.545,4.274-9.545,9.545c0,5.271,4.274,9.545,9.545,9.545h74.446v90.484
			c-0.001,5.27,4.272,9.544,9.544,9.544c5.271,0,9.545-4.274,9.545-9.545V69.453h9.545c5.271,0,9.545-4.274,9.545-9.545
			C336.389,54.636,332.115,50.363,326.844,50.363z"/>
	</g>
</g>
<g>
	<g>
		<path d="M292.159,217.6c-24.393-24.394-56.827-37.828-91.326-37.828c-34.498,0-66.931,13.434-91.326,37.828
			c-24.394,24.393-37.828,56.827-37.828,91.326c0,34.498,13.434,66.931,37.828,91.326c2.95,2.949,6.018,5.735,9.192,8.359
			l-78.451,78.439c-4.836,4.835-12.704,4.836-17.542,0c-4.836-4.836-4.836-12.705,0-17.542L87.8,404.402
			c3.728-3.728,3.726-9.771-0.001-13.498c-3.728-3.728-9.771-3.728-13.498,0.001L9.209,456.01
			c-12.279,12.279-12.279,32.259,0,44.538c5.948,5.948,13.857,9.224,22.268,9.224c0.003,0,0.006,0,0.009,0
			c8.41-0.003,16.315-3.278,22.261-9.224l80.756-80.743c19.836,11.915,42.594,18.275,66.331,18.275
			c34.498,0,66.931-13.434,91.326-37.828s37.828-56.828,37.828-91.326C329.988,274.427,316.553,241.994,292.159,217.6z
			 M278.66,386.752c-20.788,20.788-48.428,32.238-77.827,32.238s-57.038-11.449-77.827-32.238
			c-20.789-20.789-32.238-48.427-32.238-77.827s11.449-57.039,32.238-77.827s48.428-32.238,77.827-32.238
			s57.039,11.449,77.827,32.238c20.787,20.789,32.238,48.428,32.238,77.827S299.449,365.963,278.66,386.752z"/>
	</g>
</g>
<g>
	<g>
		<path d="M267.387,242.372c-36.697-36.697-96.409-36.698-133.107,0c-17.778,17.778-27.568,41.413-27.568,66.553
			c0,25.14,9.791,48.777,27.568,66.553c17.776,17.778,41.412,27.568,66.553,27.568c25.14,0,48.777-9.791,66.553-27.568
			C304.084,338.782,304.084,279.07,267.387,242.372z M253.888,361.98c-14.172,14.171-33.014,21.976-53.056,21.976
			s-38.883-7.805-53.054-21.976c-14.171-14.171-21.976-33.013-21.976-53.054s7.805-38.883,21.976-53.056
			c14.629-14.629,33.839-21.941,53.054-21.941c19.212,0,38.43,7.315,53.056,21.941C283.142,285.124,283.142,332.726,253.888,361.98z
			"/>
	</g>
</g>
<g>
	<g>
		<path d="M200.834,253.043c-5.271,0-9.545,4.274-9.545,9.545s4.274,9.545,9.545,9.545c20.287,0,36.792,16.505,36.792,36.792
			c0,5.271,4.274,9.545,9.545,9.545c5.271,0,9.545-4.274,9.545-9.545C256.716,278.112,231.647,253.043,200.834,253.043z"/>
	</g>
</g>`
    },
    {
      box: 512,
      name: "profile",
      svg: `<g>
	<g>
		<path d="M0,31.67v448.66h512V31.67H0z M496.165,464.495H15.835V121.402h480.33V464.495z M496.165,105.567H15.835V47.505h480.33
			V105.567z"/>
	</g>
</g>
<g>
	<g>
		<rect x="39.588" y="68.619" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="71.258" y="68.619" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="451.299" y="68.619" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<path d="M36.948,142.515v300.866h438.103V142.515H36.948z M190.021,427.546H52.784V158.351h137.237V427.546z M459.216,427.546
			H205.856V158.351h253.361V427.546z"/>
	</g>
</g>
<g>
	<g>
		<path d="M121.402,174.186c-29.105,0-52.784,23.679-52.784,52.784c0,29.105,23.679,52.784,52.784,52.784
			c29.105,0,52.784-23.679,52.784-52.784C174.186,197.864,150.507,174.186,121.402,174.186z M121.402,263.918
			c-20.373,0-36.948-16.575-36.948-36.948c0-20.373,16.575-36.948,36.948-36.948c20.373,0,36.948,16.575,36.948,36.948
			C158.351,247.342,141.775,263.918,121.402,263.918z"/>
	</g>
</g>
<g>
	<g>
		<rect x="65.979" y="300.866" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="65.979" y="337.814" width="100.289" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="65.979" y="374.763" width="100.289" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="97.649" y="300.866" width="47.505" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="155.711" y="300.866" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<path d="M226.969,179.464v121.402h211.134V179.464H226.969z M422.268,285.031H242.804v-89.732h179.464V285.031z"/>
	</g>
</g>
<g>
	<g>
		<rect x="419.629" y="321.979" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="387.959" y="321.979" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="224.33" y="321.979" width="21.113" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="224.33" y="353.649" width="216.412" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<rect x="224.33" y="385.32" width="216.412" height="15.835"/>
	</g>
</g>
<g>
	<g>
		<polygon points="263.918,216.412 263.918,250.722 279.753,250.722 279.753,232.247 298.227,232.247 298.227,216.412 		"/>
	</g>
</g>`
    }
  ];
  let displayIcon = icons.find((e) => e.name === name);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  return `<svg${add_attribute("class", $$props.class, 0)}${add_attribute("focusable", focusable, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 " + escape(displayIcon.box) + " " + escape(displayIcon.box)}"><!-- HTML_TAG_START -->${displayIcon.svg}<!-- HTML_TAG_END --></svg>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $checker, $$unsubscribe_checker;
  let $token, $$unsubscribe_token;
  $$unsubscribe_checker = subscribe(checker, (value) => $checker = value);
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  $$unsubscribe_checker();
  $$unsubscribe_token();
  return `<br>
	<br>

	

	<center><h1>Ecry ${validate_component(Icon, "Icon").$$render($$result, { name: "gear" }, {}, {})} geN</h1></center>
	<br>
    ${$token == null ? `${$checker == false ? `<center><button class="${"button"}">Login</button></center>` : `<center><button class="${"button-primary"}">Sign Up</button></center>`}` : `<center><button class="${"button button-primary"}">Log out</button></center>`}
	<hr>
	<div class="${"row"}"><div class="${"one-third column"}"><center>${validate_component(Icon, "Icon").$$render($$result, { name: "profile" }, {}, {})} <br><strong>Step 1: </strong><em>Configure your profile; those data will be displayed on generated documents</em></center><br></div>
		<div class="${"one-third column"}"><center>${validate_component(Icon, "Icon").$$render($$result, { name: "docs" }, {}, {})} <br><strong>Step 2: </strong><em>Generate documents including incoices and receive an email with your key and Qr code</em></center><br></div>
		<div class="${"one-third column"}"><center>${validate_component(Icon, "Icon").$$render($$result, { name: "Qr" }, {}, {})}<br><strong>Step 3: </strong><em>Verify shared or owned documents by scanning the Qr code and entering the key</em></center>
			<br></div></div>

	<hr>
	<nav class="${"crumbs"}"><ol>${$token != null ? `<li class="${"crumb"}"><a href="${"/profile#"}">Profile</a></li>
			<li class="${"crumb"}"><a href="${"/product#"}">Product</a></li>
			<li class="${"crumb"}"><a href="${"/client#"}">Client</a></li>
			<li class="${"crumb"}"><a href="${"/invoice/display#"}">Invoice</a></li>
			<li class="${"crumb"}"><a href="${"/document/display#"}">Document</a></li>` : ``}
			<li class="${"crumb"}"><a href="${"/"}">Contact us</a></li></ol></nav>
	<hr>
	<strong>${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}</strong>
    <hr>`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "", password = "", username = "";
  return `<center><h1>Login</h1></center>
    <hr>
    <form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Your email</label>
          <input class="${"u-full-width"}" type="${"email"}" placeholder="${"test@mailbox.com"}" id="${"exampleEmailInput"}"${add_attribute("value", email, 0)}></div>
        <div class="${"six columns"}"><label for="${"username"}">Your username</label>
          <input class="${"u-full-width"}" type="${"text"}" placeholder="${"username"}" id="${"username"}"${add_attribute("value", username, 0)}></div></div>
      <label for="${"password"}">Password</label>
      <input class="${"u-full-width"}" type="${"password"}" placeholder="${"password"}" id="${"password"}"${add_attribute("value", password, 0)}>
      <label class="${"example-save-credentials"}"><input type="${"checkbox"}">
        <span class="${"label-body"}">Save credentials</span></label>
      <button class="${"button button-primary"}" type="${"submit"}" value="${"Submit"}">Submit</button></form>`;
});
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "", password = "", rpassword = "", username = "";
  return `<center><h1>Sign up</h1></center>
<hr>
<form><div class="${"row"}"><div class="${"six columns"}"><label for="${"exampleEmailInput"}">Your email</label>
      <input class="${"u-full-width"}" type="${"email"}" placeholder="${"test@mailbox.com"}" id="${"exampleEmailInput"}"${add_attribute("value", email, 0)}></div>
    <div class="${"six columns"}"><label for="${"username"}">Your username</label>
      <input class="${"u-full-width"}" type="${"text"}" placeholder="${"username"}" id="${"username"}"${add_attribute("value", username, 0)}></div></div>

  <div class="${"row"}"><div class="${"six columns"}"><label for="${"password"}">Password</label>
  <input class="${"u-full-width"}" type="${"password"}" placeholder="${"new password"}" id="${"password"}"${add_attribute("value", password, 0)}></div>
<div class="${"six columns"}"><label for="${"password"}">Repeat Password</label>
    <input class="${"u-full-width"}" type="${"password"}" placeholder="${"repeat password"}" id="${"password"}"${add_attribute("value", rpassword, 0)}></div></div>



  <label class="${"example-save-credentials"}"><input type="${"checkbox"}">
    <span class="${"label-body"}">Save credentials</span></label>
  <button class="${"button button-primary"}" type="${"submit"}" value="${"Submit"}">Submit</button></form>`;
});
var Circle_svelte_svelte_type_style_lang = "";
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-nlgli4{height:var(--size);width:var(--size);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;position:relative}.circle-one.svelte-nlgli4{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-nlgli4{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}@keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}",
  map: null
};
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.6s" } = $$props;
  let { size = "60" } = $$props;
  let moonSize = +size / 7;
  let top = +size / 2 - moonSize / 2;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-nlgli4"}" style="${"--size: " + escape(size) + escape(unit) + "; --color: " + escape(color) + "; --moonSize: " + escape(top) + escape(unit) + "; --duration: " + escape(duration) + ";"}"><div class="${"circle-one svelte-nlgli4"}"></div>
  <div class="${"circle-two svelte-nlgli4"}"></div></div>`;
});
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  let $checker, $$unsubscribe_checker;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  $$unsubscribe_checker = subscribe(checker, (value) => $checker = value);
  let p = new Promise((resolve) => setTimeout(resolve, 400));
  $$unsubscribe_token();
  $$unsubscribe_checker();
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `

<div class="${"loading"}"><div class="${"loader"}">${validate_component(Moon, "Moon").$$render($$result, {
        class: "d",
        size: "150",
        color: "#33C3F0",
        unit: "px",
        duration: "1s"
      }, {}, {})}</div></div>



`;
    }
    return function(n) {
      return `
<div class="${"container"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${$token == null ? `${$checker == true ? `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}` : `${validate_component(Signup, "SignUp").$$render($$result, {}, {}, {})}`}` : `${slots.default ? slots.default({}) : ``}`}</div>
`;
    }();
  }(p)}`;
});
export { _layout as default };
