import { ImageUploadField } from "@/components/admin/ImageUploadField";

type Props = {
  prefix?: string;
  defaults: {
    meta_title?: string;
    meta_description?: string;
    og_title?: string;
    og_description?: string;
    og_image_path?: string;
    canonical_url?: string;
    canonical_path?: string;
    focus_keyword?: string;
    robots_index?: boolean;
    robots_follow?: boolean;
    seo_noindex?: boolean;
  };
  showRobots?: boolean;
  showNoindex?: boolean;
  canonicalName?: "canonical_url" | "canonical_path";
};

const input =
  "mt-1 w-full rounded-xl border border-[#0b2e33]/12 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d666c]/50";

export function SeoFieldsPanel({
  prefix = "",
  defaults,
  showRobots = true,
  showNoindex = false,
  canonicalName = "canonical_url",
}: Props) {
  const n = (field: string) => (prefix ? `${prefix}${field}` : field);

  return (
    <fieldset className="space-y-4 rounded-2xl border border-[#0b2e33]/8 bg-[#f8fafb] p-5">
      <legend className="px-1 text-sm font-semibold text-[#0d666c]">SEO</legend>
      <label className="block text-sm font-medium">
        Meta title
        <input name={n("meta_title")} defaultValue={defaults.meta_title ?? ""} className={input} />
      </label>
      <label className="block text-sm font-medium">
        Meta description
        <textarea
          name={n("meta_description")}
          rows={2}
          defaultValue={defaults.meta_description ?? ""}
          className={input}
        />
      </label>
      <label className="block text-sm font-medium">
        Focus keyword
        <input name={n("focus_keyword")} defaultValue={defaults.focus_keyword ?? ""} className={input} />
      </label>
      <label className="block text-sm font-medium">
        Open Graph title
        <input name={n("og_title")} defaultValue={defaults.og_title ?? ""} className={input} />
      </label>
      <ImageUploadField
        name={n("og_image_path")}
        defaultValue={defaults.og_image_path ?? ""}
        label="Social share image (Open Graph)"
        hint="Used when the page is shared on LinkedIn, WhatsApp, etc."
      />
      <label className="block text-sm font-medium">
        Open Graph description
        <textarea
          name={n("og_description")}
          rows={2}
          defaultValue={defaults.og_description ?? ""}
          className={input}
        />
      </label>
      <label className="block text-sm font-medium">
        Canonical URL
        <input
          name={n(canonicalName)}
          defaultValue={defaults.canonical_url ?? defaults.canonical_path ?? ""}
          placeholder="https://cotechme.com/…"
          className={input}
        />
      </label>
      {showRobots ? (
        <div className="flex flex-wrap gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name={n("robots_index")}
              defaultChecked={defaults.robots_index !== false}
              className="size-4 accent-[#0d666c]"
            />
            Allow indexing
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name={n("robots_follow")}
              defaultChecked={defaults.robots_follow !== false}
              className="size-4 accent-[#0d666c]"
            />
            Allow follow
          </label>
        </div>
      ) : null}
      {showNoindex ? (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="seo_noindex"
            defaultChecked={defaults.seo_noindex === true}
            className="size-4 accent-[#0d666c]"
          />
          Hide from search engines (noindex)
        </label>
      ) : null}
    </fieldset>
  );
}
