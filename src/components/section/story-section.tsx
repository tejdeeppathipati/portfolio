import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function StorySection() {
  return (
    <div className="story-preview relative overflow-hidden rounded-[1.75rem] border p-7 sm:p-10">
      <div className="relative z-10 max-w-xl">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          The other version
        </p>
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
          The part that doesn&apos;t fit on a résumé
        </h2>
        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
          A résumé can tell you what I have done. It is not very good at
          explaining how Siri, moving from India at sixteen, teaching code, and
          a pile of unfinished prototypes all connect.
        </p>
        <Link
          href="/story"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Read my story
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
      <span
        className="story-mark absolute -bottom-20 -right-5 select-none font-serif text-[17rem] font-semibold leading-none text-primary/[0.06]"
        aria-hidden
      >
        “
      </span>
    </div>
  );
}
