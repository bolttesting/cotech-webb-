import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { SupabaseSetupNotice } from "@/components/cms/SupabaseSetupNotice";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import type { BlogBodyFormat } from "@/lib/blog/types";
import { coverPublicUrl } from "@/lib/blog/types";
import { resolveBlogPostMetadata } from "@/lib/seo/page-seo";
import { isBlogSchemaMissing } from "@/lib/supabase/env";
import { tryCreateClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

function effectiveBodyFormat(body: string, bodyFormat: string | null | undefined): BlogBodyFormat {
  if (bodyFormat === "markdown") return "markdown";
  if (bodyFormat === "html") {
    const t = body.trim();
    if (t && !t.startsWith("<")) return "markdown";
    return "html";
  }
  return body.trim().startsWith("<") ? "html" : "markdown";
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = await tryCreateClient();
  if (!supabase) {
    return { title: "Blog | COTech" };
  }
  const { data: post } = await supabase
    .from("blog_posts")
    .select(
      "title, excerpt, slug, meta_title, meta_description, og_title, og_description, og_image_path, cover_image_path, canonical_path, seo_noindex",
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (!post) return { title: "Post not found" };
  return resolveBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await tryCreateClient();

  if (!supabase) {
    return (
      <MarketingPageLayout>
        <main className="bg-background-13">
          <section className="main-container py-32">
            <SupabaseSetupNotice />
            <Link href="/blog" className="mt-6 inline-block text-tagline-2 text-primary-500">
              ← Back to blog
            </Link>
          </section>
        </main>
      </MarketingPageLayout>
    );
  }

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error && isBlogSchemaMissing(error.message)) {
    notFound();
  }
  if (!post) notFound();

  const cover = coverPublicUrl(post.cover_image_path);
  const bodyFormat = effectiveBodyFormat(post.body, post.body_format);

  return (
    <MarketingPageLayout>
      <main className="bg-background-13">
        <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
          <div className="main-container">
            <div className="mx-auto max-w-[1209px] space-y-3">
              <Link
                href="/blog"
                className="text-tagline-2 text-secondary/60 hover:text-secondary mb-4 inline-block"
              >
                ← All articles
              </Link>
              {post.category ? (
                <p className="font-inter-tight text-tagline-2 font-normal uppercase text-secondary">
                  {post.category}
                </p>
              ) : null}
              <h1 data-ns-animate data-delay="0.1" className="max-w-[884px]">
                {post.title}
              </h1>
              {post.published_at ? (
                <time
                  dateTime={post.published_at}
                  data-ns-animate
                  data-delay="0.2"
                  className="text-tagline-2 text-secondary/60 block font-normal"
                >
                  {new Date(post.published_at).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              ) : null}
            </div>
            {cover ? (
              <figure
                data-ns-animate
                data-delay="0.3"
                className="my-10 max-w-full overflow-hidden rounded-lg md:my-[70px] md:rounded-4xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cover}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </figure>
            ) : null}
            {post.excerpt ? (
              <p
                data-ns-animate
                data-delay="0.2"
                className="text-tagline-1 text-secondary/60 mx-auto max-w-[884px] font-normal"
              >
                {post.excerpt}
              </p>
            ) : null}
            <BlogPostBody body={post.body} bodyFormat={bodyFormat} />
          </div>
        </section>
      </main>
    </MarketingPageLayout>
  );
}
