import { getCollection } from "astro:content";
import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Apprenti Astro | Blog",
    description: "Mon parcours d'apprentissage d'Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      readTime: post.data.readTime,
      image: post.data.image.url,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
