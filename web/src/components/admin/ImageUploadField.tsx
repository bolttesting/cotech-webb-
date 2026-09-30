"use client";

import { useRef, useState, useTransition } from "react";
import { ImagePlus, Trash2 } from "lucide-react";
import { uploadBlogMedia } from "@/app/actions/media";
import { mediaPublicUrl } from "@/lib/blog/types";

type Props = {
  name: string;
  defaultValue?: string;
  label?: string;
  hint?: string;
};

export function ImageUploadField({
  name,
  defaultValue = "",
  label = "Image",
  hint = "PNG, JPG, or WebP up to 5 MB",
}: Props) {
  const [path, setPath] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const previewUrl = mediaPublicUrl(path);

  function uploadFile(file: File) {
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be 5 MB or smaller.");
      return;
    }
    setError(null);
    const fd = new FormData();
    fd.set("file", file);
    startTransition(async () => {
      try {
        const { path: uploaded } = await uploadBlogMedia(fd);
        setPath(uploaded);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        if (inputRef.current) inputRef.current.value = "";
      }
    });
  }

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-[#0b2e33]">{label}</span>
      <input type="hidden" name={name} value={path} readOnly />

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadFile(file);
        }}
      />

      {previewUrl ? (
        <div className="relative overflow-hidden rounded-xl border border-[#0b2e33]/10 bg-[#f8fafb]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewUrl} alt="" className="max-h-56 w-full object-cover object-center" />
          <div className="flex flex-wrap gap-2 border-t border-[#0b2e33]/8 bg-white p-3">
            <button
              type="button"
              disabled={pending}
              onClick={() => inputRef.current?.click()}
              className="rounded-lg border border-[#0b2e33]/15 px-3 py-1.5 text-xs font-semibold text-[#0b2e33] hover:border-[#0d666c]/40 disabled:opacity-50"
            >
              {pending ? "Uploading…" : "Replace image"}
            </button>
            <button
              type="button"
              onClick={() => setPath("")}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
            >
              <Trash2 className="size-3.5" aria-hidden />
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          disabled={pending}
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#0b2e33]/15 bg-white px-4 py-10 text-center transition hover:border-[#0d666c]/35 hover:bg-[#f8fafb] disabled:opacity-50"
        >
          <ImagePlus className="size-8 text-[#0d666c]/70" aria-hidden />
          <span className="text-sm font-semibold text-[#0b2e33]">
            {pending ? "Uploading…" : "Upload image"}
          </span>
          <span className="text-xs text-[#0b2e33]/50">{hint}</span>
        </button>
      )}

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
