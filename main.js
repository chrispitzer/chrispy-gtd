// Import the necessary Plugin class
module.exports = class ChrispyGTD extends require('obsidian').Plugin {
    async onload() {
        console.log("Chrispy GTD plugin loaded!");

        // Function to display the count of active projects
        window.displayActiveProjectCount = function (dv) {
            const activeCount = dv.pages('"GTD/projects"')
                .where(p => p.status === "active")
                .length;
            dv.paragraph(`Active Projects: ${activeCount}`);
        };

        // Function to display the list of active projects
        window.displayActiveProjects = function (dv) {
            const activeProjects = dv.pages('"GTD/projects"')
                .where(p => p.status === "active")
                .map(p => p.file.name);
            dv.list(activeProjects);
        };
    }

    onunload() {
        console.log("Chrispy GTD plugin unloaded!");
        delete window.displayActiveProjectCount;
        delete window.displayActiveProjects;
    }
};

