import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-serif text-[var(--color-ink)] mb-2">404 - Page Not Found</h2>
      <p className="text-sm text-[var(--color-muted)] mb-6">
        The requested page could not be located.
      </p>
      <Link href="/" className="btn-primary text-xs py-2 px-5">
        Return to Home
      </Link>
    </div>
  );
}
