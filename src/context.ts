import { DataviewApi } from 'obsidian-dataview';

declare global {
    interface Window {
        app: App;
    }
}

export const getDataview = (): DataviewApi | undefined => {
    return (window.app as any)?.plugins?.plugins?.dataview?.api;
};
