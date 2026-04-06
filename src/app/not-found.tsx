import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="text-center">
        <p className="mb-3 font-manrope text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mb-4 font-manrope text-4xl font-extrabold text-foreground">
          Page not found
        </h1>
        <p className="mb-6 text-muted-foreground">
          The page you requested does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-primary px-6 py-3 font-manrope text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
