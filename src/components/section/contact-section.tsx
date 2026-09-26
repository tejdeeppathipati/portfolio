import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-[1.75rem] p-10 relative overflow-hidden bg-card">
      <div className="absolute -top-px border border-primary/20 bg-primary/10 z-10 rounded-b-xl px-4 py-1.5 left-1/2 -translate-x-1/2">
        <span className="text-primary text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have a role, project, or strange idea worth discussing?{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            Send me an email
          </Link>
          , and I&apos;ll get back to you.
        </p>
      </div>
    </div>
  );
}
