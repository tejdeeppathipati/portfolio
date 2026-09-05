import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HighlightsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="flex w-full items-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="z-10 rounded-xl border bg-primary px-4 py-1">
            <span className="text-sm font-medium text-background">
              Beyond Projects
            </span>
          </div>
          <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Research, teaching &amp; recognition
          </h2>
          <p className="max-w-xl text-balance text-center leading-relaxed text-muted-foreground md:text-lg">
            I also study model internals, teach programming, and build under
            competition constraints—experiences that sharpen how I reason,
            communicate, and ship.
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
        {DATA.highlights.map((highlight, index) => {
          const Icon = highlight.icon;

          return (
            <BlurFade
              key={highlight.title}
              delay={BLUR_FADE_DELAY * 14 + index * 0.05}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-xl border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {highlight.category}
                  </span>
                </div>
                <h3 className="font-semibold leading-snug">{highlight.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {highlight.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
              </article>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
