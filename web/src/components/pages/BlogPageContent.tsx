import { DEMO_BLOG_POSTS } from "@/lib/blog/demo-posts";
import type { BlogListPost } from "@/lib/blog/queries";
import { BlogCtaSection } from "@/components/pages/blog/BlogCtaSection";
import { BlogFeaturedSwiper } from "@/components/pages/blog/BlogFeaturedSwiper";
import { BlogPostGrid } from "@/components/pages/blog/BlogPostGrid";

type Props = { posts: BlogListPost[] };

export function BlogPageContent({ posts }: Props) {
  const fromCms = posts.length > 0;
  const displayPosts = fromCms ? posts : DEMO_BLOG_POSTS;

  return (
    <main className="bg-background-13">
      <BlogFeaturedSwiper posts={displayPosts} fromCms={fromCms} />
      <BlogPostGrid posts={displayPosts} fromCms={fromCms} />
      <BlogCtaSection />
    </main>
  );
}
