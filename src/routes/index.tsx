import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://muhabduh.id";
const SITE_HOST = "muhabduh.id";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="page-wash flex min-h-dvh flex-col items-center px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-24">
      <article className="flex w-full max-w-md flex-1 flex-col items-center justify-center text-center">
        <h1 className="fade-up font-display text-hero font-semibold text-ink">
          Muhamad Abduh
        </h1>

        <div
          className="fade-up fade-up-1 mt-5 h-px w-12 bg-border sm:mt-6"
          aria-hidden="true"
        />

        <div className="fade-up fade-up-2 mt-8 w-full sm:mt-10">
          <div className="rounded-xl bg-qr-plate p-6 shadow-card">
            <img
              src="/qr.png"
              alt="Kode QR menuju muhabduh.id"
              width={1056}
              height={1056}
              className="qr-pixel size-full select-none"
              draggable={false}
            />
          </div>
        </div>

        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up fade-up-3 mt-7 inline-flex min-h-11 items-center font-sans text-url font-semibold tracking-tight text-accent underline-offset-4 transition-colors duration-quick hover:text-accent-soft hover:underline sm:mt-8"
        >
          {SITE_HOST}
        </a>

        <p className="fade-up fade-up-4 mt-2 max-w-64 text-sm leading-relaxed text-muted">
          Arahkan kamera ponsel ke kode di atas untuk membuka situs.
        </p>
      </article>
    </main>
  );
}
