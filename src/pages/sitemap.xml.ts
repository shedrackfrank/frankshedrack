import { getCollection } from "astro:content";
import { SITE_URL } from "../data/site";

export async function GET() {
  const projects = await getCollection("projects");
  const urls = [
    { loc: "/" },
    ...projects.map((project) => ({ loc: `/work/${project.id}/` })),
  ];
  const entries = urls
    .map((url) => `  <url><loc>${SITE_URL}${url.loc}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
