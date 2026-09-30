"use client";

import { saveContactSettings } from "@/app/actions/settings";
import type { ContactSettings } from "@/lib/site-settings";
import { useState } from "react";

export function ContactSettingsForm({ initial }: { initial: ContactSettings }) {
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSaved(false);
    try {
      await saveContactSettings(new FormData(e.currentTarget));
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    }
    setPending(false);
  }

  const field =
    "mt-1 w-full rounded-xl border border-[#0b2e33]/12 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d666c]/50";

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-5 rounded-2xl border border-[#0b2e33]/8 bg-white p-6 shadow-sm">
      {saved ? (
        <p className="rounded-lg bg-[#0d666c]/10 px-3 py-2 text-sm text-[#0b2e33]">Settings saved.</p>
      ) : null}
      {error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p> : null}

      <label className="block text-sm font-medium">
        Email
        <input name="email" type="email" defaultValue={initial.email} required className={field} />
      </label>
      <label className="block text-sm font-medium">
        Phone (tel link)
        <input name="phone" defaultValue={initial.phone} className={field} />
      </label>
      <label className="block text-sm font-medium">
        Phone display text
        <input name="phoneDisplay" defaultValue={initial.phoneDisplay} className={field} />
      </label>
      <label className="block text-sm font-medium">
        WhatsApp URL
        <input name="whatsapp" defaultValue={initial.whatsapp} className={field} />
      </label>
      <label className="block text-sm font-medium">
        WhatsApp label
        <input name="whatsappDisplay" defaultValue={initial.whatsappDisplay} className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Map latitude
          <input name="mapLat" type="number" step="any" defaultValue={initial.mapLat} className={field} />
        </label>
        <label className="block text-sm font-medium">
          Map longitude
          <input name="mapLng" type="number" step="any" defaultValue={initial.mapLng} className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Inquiry intro text
        <textarea name="inquiryNote" rows={3} defaultValue={initial.inquiryNote} className={field} />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-[#0d666c] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0b2e33] disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save contact settings"}
      </button>
    </form>
  );
}
