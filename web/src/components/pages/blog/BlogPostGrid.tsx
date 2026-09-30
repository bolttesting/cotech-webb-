import Link from "next/link";
import { categoryFilterSlug, uniqueCategoryFilters } from "@/lib/blog/categories";
import { coverPublicUrl } from "@/lib/blog/types";
import { demoCoverForIndex, postHref } from "@/lib/blog/demo-posts";
import type { BlogListPost } from "@/lib/blog/queries";
import { BlogCategoryBadge } from "@/components/pages/blog/BlogCategoryBadge";
import { BlogReadMoreButton } from "@/components/pages/blog/BlogReadMoreButton";

type Props = { posts: BlogListPost[]; fromCms: boolean };

function filterLabel(slug: string): string {
  if (slug === "all") return "All";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function BlogPostGrid({ posts, fromCms }: Props) {
  const categorySlugs = uniqueCategoryFilters(posts.map((p) => p.category));
  const filters = ["all", ...categorySlugs];

  return (
    <section className="bg-background-2 py-14 md:py-[100px]">
      <div className="main-container" data-filter-root>
        <div
          role="tablist"
          aria-label="Filter articles by category"
          data-tab-bar
          className="border-stroke-2 relative hidden items-center justify-center border-b md:flex"
        >
          <div
            data-active-tab-bar
            className="bg-primary-500 absolute bottom-[-0.8px] z-[1] h-[2px] transition-all duration-500 ease-in-out"
          />
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              data-tab-button
              data-filter={filter}
              className="data-[state=selected]:text-secondary text-secondary/60 -mb-px cursor-pointer px-10 py-3 focus-visible:outline-0"
            >
              <span className="md:text-tagline-2 text-tagline-1 lg:text-tagline-1 font-medium">
                {filterLabel(filter)}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 items-center justify-center gap-4 md:hidden">
          {filters.map((filter) => (
            <button
              key={`m-${filter}`}
              type="button"
              data-mobile-tab-button
              data-filter={filter}
              className="text-tagline-2 text-secondary/60 border-stroke-2 data-[mobile-active=true]:bg-primary-500 data-[mobile-active=true]:border-primary-600 col-span-4 cursor-pointer rounded-md border bg-white px-3.5 py-2 font-medium transition-all data-[mobile-active=true]:scale-105 data-[mobile-active=true]:text-white md:col-span-2"
            >
              {filterLabel(filter)}
            </button>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-12 gap-y-6 sm:gap-5 md:gap-8">
          {posts.map((post, index) => {
            const cover =
              coverPublicUrl(post.cover_image_path) ?? demoCoverForIndex(index + 2);
            const href = postHref(post.slug, fromCms);
            const filterCat = categoryFilterSlug(post.category);

            return (
              <div
                key={post.slug}
                data-filter-item
                data-filter-category={filterCat}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              >
                <article className="border-stroke-4 mx-auto max-w-[500px] overflow-hidden rounded-[20px] border bg-white md:mx-0 md:max-w-full">
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cover} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </figure>
                  <div className="space-y-6 p-6">
                    <div className="flex items-center gap-3.5 xl:gap-6">
                      <BlogCategoryBadge category={post.category} />
                    </div>
                    <div className="space-y-2">
                      <p className="xl:text-heading-5 text-heading-6 text-secondary">
                        <Link href={href}>{post.title}</Link>
                      </p>
                      {post.excerpt ? (
                        <p className="line-clamp-2 text-secondary/70">{post.excerpt}</p>
                      ) : null}
                    </div>
                    <BlogReadMoreButton href={href} />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
