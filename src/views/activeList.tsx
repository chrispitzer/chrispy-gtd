import { getDataview } from '../context';
import { PROJECT_FOLDER } from '../config';


export function ActiveList() {
  const dv = getDataview();

  const projects: string[] = dv.pages(PROJECT_FOLDER)
    .where(p => p.status === "active")
    .map(p => p.file.name);


  const openNote = (fileName: string) => {
    app.workspace.openLinkText(fileName, '', false);
  };


  return (
    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">Active Projects</h2>
      <ul class="list-disc list-inside space-y-1">
        {projects.map(name => (
          <li>
            <button
              class="text-blue-500 hover:underline bg-transparent p-0 m-0 border-none cursor-pointer"
              onClick={() => openNote(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}
