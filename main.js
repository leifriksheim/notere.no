import options from "./options.js";

import { outlineWatcher } from "https://unpkg.com/core-elements@latest/dist/main.es.js";
import { Toggle } from "https://unpkg.com/core-elements@latest/dist/components/toggle.js";
import {
  Tabs,
  Tab,
} from "https://unpkg.com/core-elements@latest/dist/components/tabs.js";
import { Button } from "https://unpkg.com/core-elements@latest/dist/components/button.js";

outlineWatcher();

customElements.define("core-toggle", Toggle);
customElements.define("core-tabs", Tabs);
customElements.define("core-tab", Tab);
customElements.define("core-button", Button);

const initMode = localStorage.getItem("mode");
setMode(initMode);

const toggleButton = document.querySelector(".toggle");
toggleButton.checked = initMode === "dark";

function setMode(val) {
  document.body.setAttribute("mode", val);
  localStorage.setItem("mode", val);
}

toggleButton.addEventListener("change", (e) => {
  setMode(e.target.checked ? "dark" : "light");
});

var editor = new MediumEditor(".editable", options);
document.querySelector(".editable").focus();
