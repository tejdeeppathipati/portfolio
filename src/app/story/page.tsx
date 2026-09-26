import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";
import { STORY } from "@/data/story";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "The story behind Tejdeep Pathipati's work in software engineering, data, and AI.",
};

export default function StoryPage() {
  return (
    <main className="story-page pb-16">
      <Link
        href="/"
        className="mb-14 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to the work
      </Link>

      <header className="max-w-3xl border-b pb-12">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          A little more than the résumé
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          The part that doesn&apos;t fit on a résumé
        </h1>
        <div className="mt-8 max-w-2xl space-y-3 text-lg leading-8 text-muted-foreground sm:text-xl">
          <p>A résumé can tell you what I have done.</p>
          <p>It is not very good at explaining how I ended up doing any of it.</p>
          <p className="font-medium text-foreground">So this is the other version.</p>
        </div>
      </header>

      <article className="story-prose prose prose-lg mt-14 max-w-3xl font-sans dark:prose-invert">
        <Markdown>{STORY}</Markdown>
      </article>

      <footer className="mt-20 max-w-3xl border-t pt-12">
        <p className="text-xl font-medium leading-8">
          Anyway, that is the version of me that does not fit very well into
          bullet points.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          If you are building something, have a weird idea, think I am
          completely wrong about something, or just want to talk about software,
          startups, AI, football, or life in general, say hi.
        </p>
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Mail className="size-4" aria-hidden />
          Say hi
        </Link>
      </footer>
    </main>
  );
}
