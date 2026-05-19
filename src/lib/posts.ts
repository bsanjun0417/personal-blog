import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const categoryLabels: Record<Post["data"]["category"], string> = {
  dev: "개발",
  english: "영어",
  memo: "메모",
  project: "프로젝트"
};

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

export function getPostPath(post: Post) {
  return `/posts/${post.slug}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function getAllTags(posts: Post[]) {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort(
    (a, b) => a.localeCompare(b)
  );
}

export function getCategoryCounts(posts: Post[]) {
  return Object.entries(categoryLabels).map(([key, label]) => ({
    key: key as Post["data"]["category"],
    label,
    count: posts.filter((post) => post.data.category === key).length
  }));
}
