import { Plugin } from 'obsidian';
import { h, Fragment, render } from 'preact';
import { ActiveList } from './views/activeList.tsx';

const APP_VERSION = "0.1.5";
const PROJECT_FOLDER = '"GTD/projects"';
let THIS_PLUGIN: Plugin;
const dv = app.plugins.plugins.dataview?.api;

function display_active_count(el: HTMLElement) {
  console.log("attempting active count");
  const count = dv.pages(PROJECT_FOLDER)
    .where(p => p.status === "active")
    .length;
  el.innerHTML = `Active Projects: ${count}`;
}

function display_button(el: HTMLElement) {
  el.innerHTML = `
    <button id="my-button">Click me</button>
  `;
  const button = el.querySelector('#my-button');
  if (button) {
    button.addEventListener('click', handleButtonClick);
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

module.exports = class ChrispyGTD extends Plugin {
  async onload() {
    console.log("Chrispy GTD plugin loaded! Version: " + APP_VERSION);
    THIS_PLUGIN = this;

    this.registerMarkdownCodeBlockProcessor("chrispy-gtd", async (source, el) => {
      const [command] = source.trim().split("\n");

      if (!dv) {
        el.innerHTML = "Dataview plugin not available.";
        return;
      }

      if (command === "active-count") {
        display_active_count(el);
      } else if (command === "display-button") {
        display_button(el);
      } else if (command === "active-list") {
        const projects = dv.pages(PROJECT_FOLDER)
          .where(p => p.status === "active")
          .map(p => p.file.name);

        render(<ActiveList projects={projects} />, el);
      } else {
        el.innerHTML = `Unknown command: ${command}`;
      }
    });
  }

  onunload() {
    console.log("Chrispy GTD plugin unloaded!");
  }
};
