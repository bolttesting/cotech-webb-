"use client";

import { useState } from "react";
import { upsertPost } from "@/app/actions/posts";
import type { BlogPost } from "@/lib/blog/types";
import { CoverImageField } from "@/components/admin/CoverImageField";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { SeoFieldsPanel } from "@/components/admin/SeoFieldsPanel";

type Props = {
  post?: BlogPost | null;
};

export function PostForm({ post }: Props) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [status, setStatus] = useState<"draft" | "published">(post?.status ?? "draft");
  const initialBody =
    post?.body_format === "markdown" && post.body
      ? `<p>${post.body.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>`
      : post?.body ?? "";

  return (
    <form action={upsertPost} className="space-y-6">
      {post?.id ? <input type="hidden" name="id" value={post.id} /> : null}
      {post?.published_at ? (
        <input type="hidden" name="published_at" value={post.published_at} />
      ) : null}
      <input type="hidden" name="body_format" value="html" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-[#0b2e33]">Title</span>
          <input
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 bg-white px-4 py-2.5 text-[#0b2e33] shadow-sm outline-none focus:border-[#0d666c]/40"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#0b2e33]">Slug</span>
          <input
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="auto-from-title"
            className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 bg-white px-4 py-2.5 font-mono text-sm text-[#0b2e33] shadow-sm outline-none focus:border-[#0d666c]/40"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#0b2e33]">Category</span>
          <input
            name="category"
            defaultValue={post?.category ?? ""}
            placeholder="Marketing, Design…"
            className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 bg-white px-4 py-2.5 text-[#0b2e33] shadow-sm outline-none focus:border-[#0d666c]/40"
          />
        </label>
        <div className="sm:col-span-2">
          <CoverImageField name="cover_image_path" defaultValue={post?.cover_image_path ?? ""} />
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-[#0b2e33]">Excerpt</span>
        <textarea
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt ?? ""}
          className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 bg-white px-4 py-2.5 text-[#0b2e33] shadow-sm outline-none focus:border-[#0d666c]/40"
        />
      </label>

      <div>
        <span className="mb-2 block text-sm font-medium text-[#0b2e33]">Body</span>
        <RichTextEditor name="body" initialHtml={initialBody} />
      </div>

      <SeoFieldsPanel
        showRobots={false}
        showNoindex
        canonicalName="canonical_path"
        defaults={{
          meta_title: post?.meta_title ?? title,
          meta_description: post?.meta_description ?? post?.excerpt ?? "",
          og_title: post?.og_title ?? "",
          og_description: post?.og_description ?? "",
          og_image_path: post?.og_image_path ?? post?.cover_image_path ?? "",
          canonical_path: post?.canonical_path ?? (slug ? `/blog/${slug}` : ""),
          seo_noindex: post?.seo_noindex ?? false,
        }}
      />

      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm font-medium text-[#0b2e33]">
          Status
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="rounded-lg border border-[#0b2e33]/10 bg-white px-3 py-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#0d666c] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0b2e33]"
        >
          Save
        </button>
      </div>
    </form>
  );
}
