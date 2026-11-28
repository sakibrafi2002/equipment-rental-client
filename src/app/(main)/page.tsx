import { SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <h1 className="text-4xl font-bold">{SITE_NAME}</h1>
      <p className="max-w-xl text-muted-foreground">
        The home page content is coming soon.
      </p>
    </section>
  );
}