import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const categoryLabels: Record<Post["data"]["category"], string> = {
  dev: "개발",
  english: "영어",
  memo: "메모",
  project: "프로젝트"
};

export const POSTS_PER_PAGE = 4;

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

export function getRecentTags(posts: Post[]) {
  const tags = new Set<string>();

  // 최신 글 순서를 유지해 사이드바 태그가 최근 사용 흐름을 먼저 보여주게 한다.
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
}

export function getCategoryCounts(posts: Post[]) {
  return Object.entries(categoryLabels).map(([key, label]) => ({
    key: key as Post["data"]["category"],
    label,
    count: posts.filter((post) => post.data.category === key).length
  }));
}

export function getCategoryTree(posts: Post[]) {
  return getCategoryCounts(posts).map((category) => {
    const categoryPosts = posts.filter((post) => post.data.category === category.key);
    const subcategories = getAllTags(categoryPosts).map((tag) => ({
      key: tag,
      label: tag,
      count: categoryPosts.filter((post) => post.data.tags.includes(tag)).length
    }));

    return {
      ...category,
      subcategories
    };
  });
}

export function getPageCount(posts: Post[], pageSize = POSTS_PER_PAGE) {
  return Math.max(1, Math.ceil(posts.length / pageSize));
}

export function getPaginatedPosts(posts: Post[], page: number, pageSize = POSTS_PER_PAGE) {
  const start = (page - 1) * pageSize;

  return posts.slice(start, start + pageSize);
}
