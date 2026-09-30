"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef, useState, useTransition } from "react";
import { uploadBlogMedia } from "@/app/actions/media";

type Props = {
  name: string;
  initialHtml: string;
  placeholder?: string;
};

export function RichTextEditor({ name, initialHtml, placeholder }: Props) {
  const [html, setHtml] = useState(initialHtml || "<p></p>");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[#0d666c] underline" } }),
      Image.configure({
        HTMLAttributes: {
          class: "mx-auto my-6 max-w-full rounded-lg",
        },
      }),
      Placeholder.configure({ placeholder: placeholder ?? "Write your article…" }),
    ],
    content: initialHtml || "<p></p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[280px] px-4 py-3 focus:outline-none text-[#0b2e33] [&_img]:max-w-full",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor: ed }) => setHtml(ed.getHTML()),
  });

  useEffect(() => {
    if (editor && initialHtml && editor.getText().trim() === "") {
      editor.commands.setContent(initialHtml);
      setHtml(initialHtml);
    }
  }, [editor, initialHtml]);

  function insertUploadedImage(file: File) {
    if (!editor) return;
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image must be 5 MB or smaller.");
      return;
    }
    setUploadError(null);
    const fd = new FormData();
    fd.set("file", file);
    startTransition(async () => {
      try {
        const { publicUrl } = await uploadBlogMedia(fd);
        editor.chain().focus().setImage({ src: publicUrl, alt: "" }).run();
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        if (imageInputRef.current) imageInputRef.current.value = "";
      }
    });
  }

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-[#0b2e33]/12 bg-white shadow-sm">
      <div className="flex flex-wrap gap-1 border-b border-[#0b2e33]/8 bg-[#f8fafb] p-2">
        {(
          [
            ["Bold", () => editor.chain().focus().toggleBold().run(), editor.isActive("bold")],
            ["Italic", () => editor.chain().focus().toggleItalic().run(), editor.isActive("italic")],
            ["Underline", () => editor.chain().focus().toggleUnderline().run(), editor.isActive("underline")],
            ["H2", () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive("heading", { level: 2 })],
            ["H3", () => editor.chain().focus().toggleHeading({ level: 3 }).run(), editor.isActive("heading", { level: 3 })],
            ["List", () => editor.chain().focus().toggleBulletList().run(), editor.isActive("bulletList")],
            ["Num", () => editor.chain().focus().toggleOrderedList().run(), editor.isActive("orderedList")],
            ["Quote", () => editor.chain().focus().toggleBlockquote().run(), editor.isActive("blockquote")],
          ] as const
        ).map(([label, action, active]) => (
          <button
            key={label}
            type="button"
            onClick={action}
            className={
              active
                ? "rounded-lg bg-[#0d666c] px-2.5 py-1 text-xs font-semibold text-white"
                : "rounded-lg px-2.5 py-1 text-xs font-medium text-[#0b2e33]/70 hover:bg-white"
            }
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          className="rounded-lg px-2.5 py-1 text-xs font-medium text-[#0b2e33]/70 hover:bg-white"
          onClick={() => {
            const url = window.prompt("Link URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
        >
          Link
        </button>
        <button
          type="button"
          disabled={pending}
          onClick={() => imageInputRef.current?.click()}
          className="rounded-lg px-2.5 py-1 text-xs font-medium text-[#0d666c] hover:bg-white disabled:opacity-50"
        >
          {pending ? "Uploading…" : "Image"}
        </button>
        <input
          ref={imageInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) insertUploadedImage(file);
          }}
        />
      </div>
      <EditorContent editor={editor} />
      {uploadError ? (
        <p className="border-t border-red-100 bg-red-50 px-4 py-2 text-xs text-red-700">{uploadError}</p>
      ) : null}
      <input type="hidden" name={name} value={html} readOnly />
    </div>
  );
}
