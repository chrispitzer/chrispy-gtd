import { Plugin } from 'obsidian';
import { render } from 'preact';
import { ActiveList } from './views/activeList.tsx';
import { ActiveCount } from './views/activeCount.tsx';
import { APP_VERSION, PROJECT_FOLDER } from './config';
import { getDataview } from './context';

let done_dv_check = false;

let THIS_PLUGIN: Plugin;

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

      if (!done_dv_check) {
        const dv = getDataview();
        if (!dv) {
          el.innerHTML = "Dataview plugin not available.";
          return;
        }
        done_dv_check = true;
      }

      if (command === "active-count") {
        render(<ActiveCount />, el);

      } else if (command === "display-button") {
        display_button(el);

      } else if (command === "active-list") {
        render(<ActiveList />, el);

      } else {
        el.innerHTML = `Unknown command: ${command}`;
      }
    });
  }

  onunload() {
    console.log("Chrispy GTD plugin unloaded!");
  }
};
