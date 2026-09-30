import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { SupabaseSetupNotice } from "@/components/cms/SupabaseSetupNotice";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { coverPublicUrl } from "@/lib/blog/types";
import { isBlogSchemaMissing } from "@/lib/supabase/env";
import { tryCreateClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = await tryCreateClient();
  if (!supabase) {
    return { title: "Blog | COTech" };
  }
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | COTech Blog`,
    description: post.excerpt ?? undefined,
  };
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
            <article className="blog-details-markdown mx-auto max-w-[884px]">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </article>
          </div>
        </section>
      </main>
    </MarketingPageLayout>
  );
}
