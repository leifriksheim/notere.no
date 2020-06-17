import options from "./options.js";
import { Toggle } from "https://unpkg.com/core-elements@0.0.24/dist/components/toggle.js";

customElements.define("core-toggle", Toggle);

const initTheme = localStorage.getItem("theme");
setTheme(initTheme);

const toggleButton = document.querySelector(".toggle");
toggleButton.checked = initTheme === "dark";

function setTheme(val) {
  document.body.setAttribute("theme", val);
  localStorage.setItem("theme", val);
}

toggleButton.addEventListener("change", (e) => {
  setTheme(e.target.checked ? "dark" : "light");
});

var editor = new MediumEditor(".editable", options);
document.querySelector(".editable").focus();
