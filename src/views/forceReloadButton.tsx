import { Plugin } from 'obsidian';
import { h } from 'preact';

type Props = {
    plugin: Plugin;
};

export function ForceReloadButton({ plugin }: Props) {
    const handleClick = async () => {
        console.log("Force reload button clicked!");
        const id = plugin.manifest.id;
        await plugin.app.plugins.disablePlugin(id);
        await plugin.app.plugins.enablePlugin(id);
    };

    return (
        <div class="p-4">
            <button class="btn btn-primary" onClick={handleClick}>
                Force Reload Plugin
            </button>
        </div>
    );
}
