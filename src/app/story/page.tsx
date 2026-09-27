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
    <main className="pb-16">
      <Link
        href="/"
        className="mb-14 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to the work
      </Link>

      <header className="border-b pb-10">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          A little more than the résumé
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-4xl">
          The part that doesn&apos;t fit on a résumé
        </h1>
        <div className="mt-6 space-y-2 leading-relaxed text-muted-foreground md:text-lg">
          <p>A résumé can tell you what I have done.</p>
          <p>It is not very good at explaining how I ended up doing any of it.</p>
          <p className="font-medium text-foreground">So this is the other version.</p>
        </div>
      </header>

      <article className="prose mt-10 max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <Markdown>{STORY}</Markdown>
      </article>

      <footer className="mt-14 border-t pt-10">
        <p className="text-lg font-medium leading-relaxed">
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
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline underline-offset-4"
        >
          <Mail className="size-4" aria-hidden />
          Say hi
        </Link>
      </footer>
    </main>
  );
}
