// src/utils/htm.module.js
var n = function(t2, s, r, e) {
  var u;
  s[0] = 0;
  for (var h2 = 1; h2 < s.length; h2++) {
    var p = s[h2++], a = s[h2] ? (s[0] |= p ? 1 : 2, r[s[h2++]]) : s[++h2];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h2]] = a : 6 === p ? e[1][s[++h2]] += a + "" : p ? (u = t2.apply(a, n(t2, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h2 - 2] = 0, s[h2] = u)) : e.push(a);
  }
  return e;
};
var t = /* @__PURE__ */ new Map();
function htm_module_default(s) {
  var r = t.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n2) {
    for (var t2, s2, r2 = 1, e = "", u = "", h2 = [0], p = function(n3) {
      1 === r2 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e) : 3 === r2 && (n3 || e) ? (h2.push(3, n3, e), r2 = 2) : 2 === r2 && "..." === e && n3 ? h2.push(4, n3, 0) : 2 === r2 && e && !n3 ? h2.push(5, 0, true, e) : r2 >= 5 && ((e || !n3 && 5 === r2) && (h2.push(r2, 0, e, s2), r2 = 6), n3 && (h2.push(r2, n3, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n2.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n2[a].length; l++) t2 = n2[a][l], 1 === r2 ? "<" === t2 ? (p(), h2 = [h2], r2 = 3) : e += t2 : 4 === r2 ? "--" === e && ">" === t2 ? (r2 = 1, e = "") : e = t2 + e[0] : u ? t2 === u ? u = "" : e += t2 : '"' === t2 || "'" === t2 ? u = t2 : ">" === t2 ? (p(), r2 = 1) : r2 && ("=" === t2 ? (r2 = 5, s2 = e, e = "") : "/" === t2 && (r2 < 5 || ">" === n2[a][l + 1]) ? (p(), 3 === r2 && (h2 = h2[0]), r2 = h2, (h2 = h2[0]).push(2, 0, r2), r2 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p(), r2 = 2) : e += t2), 3 === r2 && "!--" === e && (r2 = 4, h2 = h2[0]);
    }
    return p(), h2;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}

// src/utils/view.js
function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (key === "class") {
      el.className = value;
    } else if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }
  children.flat().forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });
  return el;
}
var html = htm_module_default.bind(h);

// src/main.js
var APP_VERSION = "0.1.5";
var PROJECT_FOLDER = '"GTD/projects"';
var dv = app.plugins.plugins.dataview?.api;
var THIS_PLUGIN;
console.log(html`<div>Hello!</div>`);
function display_active_count(el) {
  console.log("attempting active count");
  const count = dv.pages(PROJECT_FOLDER).where((p) => p.status === "active").length;
  el.innerHTML = `Active Projects: ${count}`;
}
function display_active_list(el) {
  const projects = dv.pages('"GTD/projects"').where((p) => p.status === "active").map((p) => p.file.name);
  const listEl = document.createElement("ul");
  projects.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project;
    listEl.appendChild(item);
  });
  el.appendChild(listEl);
}
function display_button(el) {
  el.innerHTML = `
    <button id="my-button">Click me</button>
  `;
  const button = el.querySelector("#my-button");
  if (button) {
    button.addEventListener("click", handleButtonClick);
  }
}
function handleButtonClick() {
  console.log("Button was clicked!");
  forceReload();
}
async function forceReload() {
  const id = THIS_PLUGIN.manifest.id;
  await THIS_PLUGIN.app.plugins.disablePlugin(id);
  await THIS_PLUGIN.app.plugins.enablePlugin(id);
}
module.exports = class ChrispyGTD extends require("obsidian").Plugin {
  async onload() {
    console.log("Chrispy GTD plugin loaded! Version: " + APP_VERSION);
    THIS_PLUGIN = this;
    this.registerMarkdownCodeBlockProcessor("chrispy-gtd", async (source, el, ctx) => {
      console.log("...attempting multi line command, source: " + source);
      const [command, ...args] = source.trim().split("\n");
      for (const arg of args) {
        console.log("...argument: " + arg);
      }
      if (!dv) {
        el.innerHTML = "Dataview plugin not available.";
        return;
      }
      try {
        if (command === "active-count") {
          display_active_count(el);
        } else if (command === "display-button") {
          display_button(el);
        } else if (command === "active-list") {
          display_active_list(el);
        } else {
          el.innerHTML = `Unknown command: ${command}`;
        }
      } catch (error) {
        el.innerHTML = `Error processing command: ${error.message}`;
      }
    });
  }
  onunload() {
    console.log("Chrispy GTD plugin unloaded!");
  }
};
