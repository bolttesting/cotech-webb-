import ReactMarkdown from "react-markdown";
import sanitizeHtml from "sanitize-html";
import type { BlogBodyFormat } from "@/lib/blog/types";

type Props = {
  body: string;
  bodyFormat: BlogBodyFormat;
};

export function BlogPostBody({ body, bodyFormat }: Props) {
  if (bodyFormat === "markdown") {
    return (
      <article className="blog-details-markdown mx-auto max-w-[884px]">
        <ReactMarkdown>{body}</ReactMarkdown>
      </article>
    );
  }

  const html = sanitizeHtml(body, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "name", "target", "rel", "class"],
      img: ["src", "alt", "title", "class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });

  return (
    <article
      className="blog-details-markdown prose prose-neutral mx-auto max-w-[884px] [&_a]:text-primary-500 [&_a]:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
