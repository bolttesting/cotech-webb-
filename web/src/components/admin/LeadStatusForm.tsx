"use client";

import { deleteLead, updateLeadStatus } from "@/app/actions/contact";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LeadStatusForm({
  leadId,
  status,
}: {
  leadId: string;
  status: "new" | "read" | "archived";
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function setStatus(next: "new" | "read" | "archived") {
    setPending(true);
    await updateLeadStatus(leadId, next);
    setPending(false);
    router.refresh();
  }

  async function onDelete() {
    if (!confirm("Delete this lead permanently?")) return;
    setPending(true);
    await deleteLead(leadId);
    router.push("/admin/leads");
  }

  return (
    <div className="flex flex-wrap gap-2">
      {(["new", "read", "archived"] as const).map((s) => (
        <button
          key={s}
          type="button"
          disabled={pending}
          onClick={() => setStatus(s)}
          className={
            status === s
              ? "rounded-full bg-[#0d666c] px-4 py-1.5 text-xs font-semibold uppercase text-white"
              : "rounded-full border border-[#0b2e33]/15 px-4 py-1.5 text-xs font-semibold uppercase text-[#0b2e33]/70 hover:border-[#0d666c]/40"
          }
        >
          {s}
        </button>
      ))}
      <button
        type="button"
        disabled={pending}
        onClick={onDelete}
        className="ml-auto rounded-full border border-red-200 px-4 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
      >
        Delete
      </button>
    </div>
  );
}
