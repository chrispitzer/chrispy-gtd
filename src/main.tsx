import { Plugin } from 'obsidian';
import { render } from 'preact';
import { APP_VERSION, PROJECT_FOLDER } from './config';
import { getDataview } from './context';

// Internal Views
import { ActiveList } from './views/activeList';
import { ActiveCount } from './views/activeCount';
import { ForceReloadButton } from './views/forceReloadButton';

let done_dv_check = false;


module.exports = class ChrispyGTD extends Plugin {
  async onload() {
    console.log("Chrispy GTD plugin loaded! Version: " + APP_VERSION);

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
        render(<ForceReloadButton plugin={this} />, el);

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
