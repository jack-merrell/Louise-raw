import Image from "next/image";

const fixes = [
  "Sales and marketing alignment",
  "Brand voice and market fit",
  "CRM, reporting and data clarity",
  "Scaling output without simply adding headcount",
];

const proofPoints = [
  "Employee #2 to UK business lead",
  "Under 50 to 2,000+ schools",
  "80% to 90% retention structure",
  "33% close rate from SAL on flagship product",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        aria-labelledby="hero-title"
        className="relative grid min-h-screen grid-rows-[auto_1fr_auto] px-6 py-7 sm:px-10 lg:px-8 lg:py-9"
      >
        <p className="text-[clamp(1.85rem,3.2vw,3.1rem)] font-semibold italic leading-none tracking-normal">
          Louise Raw — Commercial Lead
        </p>

        <div className="grid items-start gap-x-12 gap-y-12 pt-5 lg:grid-cols-[minmax(0,62vw)_minmax(340px,29vw)] lg:justify-between lg:pt-5">
          <h1
            id="hero-title"
            className="max-w-[36ch] text-balance text-[clamp(2.25rem,3.08vw,3.95rem)] font-normal leading-[1.04] tracking-normal"
          >
            I help founder-led companies diagnose and fix the commercial systems
            behind growth — across sales, marketing, retention, CRM, reporting
            and customer experience.
          </h1>

          <div className="self-center justify-self-start lg:mt-[14vh] lg:justify-self-end">
            <Image
              src="/louise-portrait-real.jpg"
              alt="Portrait of Louise Raw"
              width={916}
              height={1024}
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 52vw, 88vw"
              className="aspect-[0.9] w-full max-w-[390px] rounded-xl border border-black/10 object-cover object-center sm:max-w-[440px] lg:max-w-[30vw]"
            />
          </div>
        </div>

        <div className="grid gap-6 pb-8 pt-10 lg:absolute lg:bottom-14 lg:left-8 lg:w-[58vw] lg:grid-cols-1 lg:pb-0 lg:pt-0">
          <div className="max-w-[58rem] lg:col-start-1">
            <p className="text-[clamp(1.2rem,1.7vw,1.85rem)] leading-[1.08] tracking-normal">
              13 years inside a UK Edtech startup, from employee #2 to Head of
              UK Business, helping scale from under 50 schools to over 2,000.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex min-h-12 items-center rounded-xl border-2 border-foreground px-5 text-[clamp(1.15rem,1.7vw,1.95rem)] font-semibold leading-none transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                Work With Me
              </a>
              <a
                href="#approach"
                className="text-lg leading-none underline decoration-1 underline-offset-4 transition-opacity hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                View approach
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        aria-labelledby="manifesto-title"
        className="border-t border-foreground/15 px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">
            Approach
          </p>
          <div className="max-w-5xl">
            <h2
              id="manifesto-title"
              className="text-[clamp(2.35rem,5vw,5.4rem)] font-normal leading-[0.96] tracking-normal"
            >
              Growth is rarely one broken thing.
            </h2>
            <p className="mt-8 max-w-4xl text-[clamp(1.35rem,2.25vw,2.6rem)] leading-[1.08] tracking-normal text-muted">
              The message does not match the customer pain. Marketing is
              creating leads sales does not trust. The CRM is full of data, but
              not insight. Teams are busy, but leadership cannot see where the
              real commercial leaks are. That is where I work best.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="fixes-title"
        className="border-t border-foreground/15 px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
          <h2
            id="fixes-title"
            className="text-sm font-normal uppercase tracking-[0.16em] text-muted"
          >
            What I fix
          </h2>
          <ul className="grid border-t border-foreground/25 md:grid-cols-2">
            {fixes.map((fix) => (
              <li
                key={fix}
                className="min-h-36 border-b border-foreground/25 py-6 text-[clamp(1.65rem,2.55vw,3rem)] leading-[1.02] tracking-normal md:pr-10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-foreground/25 md:[&:nth-child(even)]:pl-10"
              >
                {fix}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="proof-title"
        className="border-t border-foreground/15 px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
          <h2
            id="proof-title"
            className="text-sm font-normal uppercase tracking-[0.16em] text-muted"
          >
            Proof points
          </h2>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point, index) => (
              <div key={point} className="border-t border-foreground/25 pt-5">
                <dt className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="mt-10 text-[clamp(1.35rem,1.75vw,2rem)] leading-[1.05]">
                  {point}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="footer-cta-title"
        className="border-t border-foreground/15 px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-5xl">
            <h2
              id="footer-cta-title"
              className="text-[clamp(2.5rem,5vw,5.6rem)] font-normal leading-[0.96] tracking-normal"
            >
              Working on a messy growth problem?
            </h2>
            <p className="mt-7 max-w-3xl text-[clamp(1.25rem,2vw,2.25rem)] leading-[1.1] text-muted">
              I work best with founder-led companies that need senior commercial
              clarity without hiring another full-time department head.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex min-h-12 w-fit items-center rounded-xl border-2 border-foreground px-5 text-[clamp(1.1rem,1.45vw,1.6rem)] font-semibold leading-none transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </main>
  );
}
