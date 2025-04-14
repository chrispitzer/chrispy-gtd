type Props = {
  projects: string[];
};

export function ActiveList({ projects }: Props) {
  return (
    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">Active Projects</h2>
      <ul class="list-disc list-inside space-y-1">
        {projects.map(name => <li>{name}</li>)}
      </ul>
    </div>
  );
}
