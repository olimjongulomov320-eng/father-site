"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t("hero.tag")}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("hero.name")}
            </h1>

            <p className="mt-4 max-w-xl text-neutral-700 leading-relaxed">
              {t("hero.desc")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#biography"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                {t("hero.about")}
              </a>
              <a
                href="#publications"
                className="rounded-2xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                {t("hero.publications")}
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                {t("hero.contact")}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat label={t("stats.books")} value="12" />
              <Stat label={t("stats.articles")} value="48" />
              <Stat label={t("stats.years")} value="20+" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
                <Image
                  src="/portrait.jpg"
                  alt="Portrait"
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-xs text-neutral-500">
                {t("hero.photoHint")} <code className="text-neutral-700">public/portrait.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="biography" title={t("bio.title")} subtitle={t("bio.subtitle")}>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 leading-relaxed text-neutral-700">
          {t("bio.text")}
        </div>
      </Section>

      <Section id="publications" title={t("pub.title")} subtitle={t("pub.subtitle")}>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title={t("pub.books.title")} text={t("pub.books.text")} />
          <Card title={t("pub.journals.title")} text={t("pub.journals.text")} />
          <Card title={t("pub.foreign.title")} text={t("pub.foreign.text")} />
        </div>
      </Section>

      <Section id="news" title={t("news.title")} subtitle={t("news.subtitle")}>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <a
              key={i}
              href="#"
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {t("news.date")}
              </div>
              <div className="mt-3 text-base font-semibold">{t("news.item")} #{i}</div>
              <div className="mt-4 text-sm font-semibold text-neutral-900">
                {t("news.readMore")} →
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="contact" title={t("contact.title")} subtitle={t("contact.subtitle")}>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title={t("contact.emailTitle")} text="example@email.com" />
          <Card title={t("contact.phoneTitle")} text="+998 XX XXX XX XX" />
          <Card title={t("contact.locationTitle")} text={t("contact.locationText")} />
        </div>
      </Section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-600">
          © {new Date().getFullYear()} {t("footer.rights")}
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-neutral-600">{subtitle}</p>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{text}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-4">
      <div className="text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </div>
    </div>
  );
}