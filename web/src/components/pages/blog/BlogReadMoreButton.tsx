import Link from "next/link";

type Props = { href: string; label?: string; className?: string };

export function BlogReadMoreButton({ href, label = "Read more", className = "" }: Props) {
  return (
    <Link href={href} className={className}>
      <button
        type="button"
        data-button-wrapper
        className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98]"
      >
        <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
          <span className="relative inline-block overflow-hidden leading-none">
            <span data-button-upper-text className="block text-nowrap">
              {label}
            </span>
            <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
              {label}
            </span>
          </span>
          <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400"
            >
              <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>
    </Link>
  );
}
