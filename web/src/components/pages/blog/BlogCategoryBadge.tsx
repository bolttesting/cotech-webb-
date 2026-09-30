import { categoryDisplayLabel } from "@/lib/blog/categories";

type Props = { category: string | null | undefined };

export function BlogCategoryBadge({ category }: Props) {
  return (
    <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
      <span className="shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" className="fill-primary-500 size-4.25">
          <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
        </svg>
      </span>
      <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">
        {categoryDisplayLabel(category)}
      </span>
    </div>
  );
}
