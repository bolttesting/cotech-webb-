import { savePageSeo } from "@/app/actions/seo";
import { SeoFieldsPanel } from "@/components/admin/SeoFieldsPanel";
import { getMarketingMetadata } from "@/lib/marketing-metadata";
import type { PageSeoRecord } from "@/lib/seo/page-seo";

type Props = {
  pageKey: string;
  label: string;
  path: string;
  existing: PageSeoRecord | null;
};

export function PageSeoForm({ pageKey, label, path, existing }: Props) {
  const fallback = getMarketingMetadata(pageKey);

  return (
    <form action={savePageSeo} className="max-w-2xl space-y-6">
      <input type="hidden" name="page_key" value={pageKey} />
      <div className="rounded-xl border border-[#0b2e33]/8 bg-white px-4 py-3 text-sm">
        <p className="font-medium text-[#0b2e33]">{label}</p>
        <p className="text-[#0b2e33]/55">
          Path: <code className="text-xs">{path}</code>
        </p>
      </div>

      <SeoFieldsPanel
        defaults={{
          meta_title: existing?.meta_title ?? fallback.title ?? "",
          meta_description: existing?.meta_description ?? fallback.description ?? "",
          og_title: existing?.og_title ?? "",
          og_description: existing?.og_description ?? "",
          og_image_path: existing?.og_image_path ?? "",
          canonical_url: existing?.canonical_url ?? "",
          focus_keyword: existing?.focus_keyword ?? "",
          robots_index: existing?.robots_index ?? true,
          robots_follow: existing?.robots_follow ?? true,
        }}
      />

      <button
        type="submit"
        className="rounded-full bg-[#0d666c] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0b2e33]"
      >
        Save SEO
      </button>
    </form>
  );
}
