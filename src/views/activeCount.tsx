import { getDataview } from '../context';
import { PROJECT_FOLDER } from '../config';
import { h } from 'preact';

export function ActiveCount() {
    const dv = getDataview();

    const count = dv.pages(PROJECT_FOLDER)
        .where(p => p.status === "active")
        .length;

    return (
        <div class="p-4">
            <h2 class="text-lg font-bold mb-2">Active Project Count</h2>
            <p>{count}</p>
        </div>
    );
}
