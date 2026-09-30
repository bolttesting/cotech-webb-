import Link from "next/link";
import { coverPublicUrl } from "@/lib/blog/types";
import { demoCoverForIndex, postHref } from "@/lib/blog/demo-posts";
import type { BlogListPost } from "@/lib/blog/queries";
import { BlogCategoryBadge } from "@/components/pages/blog/BlogCategoryBadge";
import { BlogReadMoreButton } from "@/components/pages/blog/BlogReadMoreButton";

type Props = { posts: BlogListPost[]; fromCms: boolean };

export function BlogFeaturedSwiper({ posts, fromCms }: Props) {
  const featured = posts.slice(0, 3);
  if (!featured.length) return null;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <h2 data-ns-animate data-delay="0.2" className="mx-auto max-w-[700px] text-center">
            Insights from the COTech studio
          </h2>
          <div className="relative" data-ns-animate data-delay="0.3">
            <div className="swiper blog-article-swiper overflow-hidden">
              <div className="swiper-wrapper">
                {featured.map((post, index) => {
                  const cover =
                    coverPublicUrl(post.cover_image_path) ?? demoCoverForIndex(index);
                  const href = postHref(post.slug, fromCms);
                  const date = post.published_at
                    ? new Date(post.published_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : null;

                  return (
                    <div key={post.slug} className="swiper-slide">
                      <article>
                        <figure className="max-h-[550px] w-full overflow-hidden rounded-t-[20px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={cover} alt="" className="h-full w-full object-cover" />
                        </figure>
                        <div className="bg-background-1 space-y-6 rounded-b-[20px] px-4 py-8 md:p-8">
                          <div className="flex flex-wrap items-center gap-2">
                            <BlogCategoryBadge category={post.category} />
                            {date ? (
                              <>
                                <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]" />
                                <time
                                  dateTime={post.published_at ?? undefined}
                                  className="text-tagline-3 text-secondary/60 font-normal"
                                >
                                  {date}
                                </time>
                              </>
                            ) : null}
                          </div>
                          <div>
                            <h3 className="sm:text-heading-5 text-tagline-1 mb-2 font-normal">
                              <Link href={href}>{post.title}</Link>
                            </h3>
                            {post.excerpt ? (
                              <p className="sm:text-tagline-1 text-tagline-2 text-secondary/60 font-normal">
                                {post.excerpt}
                              </p>
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
            <div className="pagination-bullets mt-5 flex justify-center md:mt-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
