import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function StorySection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="whitespace-nowrap text-sm font-medium text-background">
          The Other Version
        </span>
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          The part that doesn&apos;t fit on a résumé
        </h2>
        <p className="max-w-lg text-balance leading-relaxed text-muted-foreground">
          A résumé can tell you what I have done. It is not very good at
          explaining how Siri, moving from India at sixteen, teaching code, and
          a pile of unfinished prototypes all connect.
        </p>
        <Link
          href="/story"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline underline-offset-4"
        >
          Read my story
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
