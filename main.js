const APP_VERSION = "0.1.3";
const PROJECT_FOLDER = '"GTD/projects"';
const dv = app.plugins.plugins.dataview?.api; // Access Dataview API if available


function display_active_count(el) {
  console.log("attempting active count");
  const count = dv.pages(PROJECT_FOLDER)
    .where(p => p.status === "active")
    .length;
  el.innerHTML = `Active Projects: ${count}`;
}

function display_active_list(el) {
  const projects = dv.pages('"GTD/projects"')
    .where(p => p.status === "active")
    .map(p => p.file.name);
  const listEl = document.createElement("ul");
  projects.forEach(project => {
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

  // Attach click handler after the button is inserted into the DOM
  const button = el.querySelector('#my-button');
  if (button) {
    button.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick() {
  console.log("Button was clicked!");
  // Add any behavior you want here
}




async function forceReload(plugin) {
  const id = plugin.manifest.id;
  await plugin.app.plugins.disablePlugin(id);
  await plugin.app.plugins.enablePlugin(id);
}


// Import the necessary Plugin class
module.exports = class ChrispyGTD extends require('obsidian').Plugin {


  async onload() {
    console.log("Chrispy GTD plugin loaded! Version: " + APP_VERSION);

    // Register a custom Markdown post-processor for multiline ```...``` commands
    this.registerMarkdownCodeBlockProcessor("chrispy-gtd", async (source, el, ctx) => {
      console.log("...attempting multi line command");

      // Parse the source block content (e.g., commands)
      const [command, ...args] = source.trim().split("\n");


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

