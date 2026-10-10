import { getCollection, render, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** All projects, sorted by `order` (ascending). */
export async function getProjects(): Promise<Project[]> {
  return getAllProjectsSorted();
}

/** All projects ordered by their configured order value. */
export async function getAllProjectsSorted(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** The next project in order, wrapping to the first entry. */
export async function getAdjacentProjects(id: string): Promise<{ next: Project | undefined }> {
  const projects = await getAllProjectsSorted();
  const index = projects.findIndex((project) => project.id === id);
  if (index < 0 || projects.length === 0) return { next: undefined };
  return { next: projects[(index + 1) % projects.length] };
}

/** All project ids (slugs), for getStaticPaths. */
export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getCollection("projects");
  return projects.map((project) => project.id);
}

/** Render a project entry's MDX content. */
export async function renderProject(entry: Project) {
  return render(entry);
}
