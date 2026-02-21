"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ChevronDown,
  BookOpen,
  Book,
  Users,
  Globe2
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const LOCALES = ["en", "ru", "uz"] as const;

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-[#eef2f8] text-neutral-950">
      {/* Top nav */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between gap-4 py-5">
            <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight">
              {t("hero.name")}
            </Link>

            <nav className="hidden items-center gap-10 text-[15px] font-semibold text-neutral-700 md:flex tracking-tight">
              <a className="hover:text-blue-600" href="#biography">
                {t("nav.biography")}
              </a>
              <a className="hover:text-blue-600" href="#research">
                {t("nav.research")}
              </a>
              <a className="hover:text-blue-600" href="#news">
                {t("nav.news")}
              </a>

              <Menu
                label={t("nav.publications")}
                items={[
                  { href: "#publications", label: t("menu.publications.overview") },
                  { href: "#publications", label: t("menu.publications.books") },
                  { href: "#publications", label: t("menu.publications.articles") },
                  { href: "#publications", label: t("menu.publications.international") }
                ]}
              />

              <a className="hover:text-blue-600" href="#conferences">
                {t("nav.conferences")}
              </a>

              <Menu
                label={t("nav.community")}
                items={[
                  { href: "#community", label: t("menu.community.activities") },
                  { href: "#community", label: t("menu.community.lectures") },
                  { href: "#community", label: t("menu.community.media") }
                ]}
              />

              <a className="hover:text-blue-600" href="#contact">
                {t("nav.contact")}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 md:flex">
                <Globe size={14} />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown size={14} />
              </div>

              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={
                    "rounded-full border px-3 py-1 text-xs font-semibold transition " +
                    (l === locale
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50")
                  }
                  aria-current={l === locale ? "page" : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-[3px] w-full bg-blue-600" />
        </div>
      </header>

      {/* Left social bar */}
      <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <SocialIcon Icon={Facebook} href="#" label="Facebook" />
        <SocialIcon Icon={Instagram} href="#" label="Instagram" />
        <SocialIcon Icon={Linkedin} href="#" label="LinkedIn" />
        <SocialIcon Icon={Youtube} href="#" label="YouTube" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20">
        <div className="overflow-hidden bg-white shadow-sm">
          <div className="grid md:grid-cols-[420px_1fr]">
            <div className="relative min-h-[420px] bg-[#f7f7f7]">
              <Image
                src="/portrait.jpg"
                alt={t("hero.portraitAlt")}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative border-l-4 border-blue-600 p-12 md:p-16 bg-gradient-to-br from-white to-blue-50">
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-blue-700 md:text-7xl">
                {t("hero.name")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                {t("hero.desc")}
              </p>

              <div className="mt-10">
                <a
                  href="#biography"
                  className="inline-flex items-center justify-center border border-blue-600 px-10 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  {t("cta.biography")}
                </a>
              </div>

              <p className="mt-6 text-xs text-neutral-500">
                {t("hero.photoHint")} <code className="text-neutral-700">public/portrait.jpg</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <Tile Icon={BookOpen} title={t("pub.books.title")} />
          <Tile Icon={Book} title={t("pub.journals.title")} />
          <Tile Icon={Users} title={t("tiles.conferences")} />
          <Tile Icon={Globe2} title={t("pub.foreign.title")} />
        </div>
      </section>

      {/* Sections */}
      <Divider />
      <Section id="biography" title={t("bio.title")} subtitle={t("bio.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title={t("bio.profile.title")} text={t("bio.profile.text")} />
          <Card title={t("bio.education.title")} text={t("bio.education.text")} />
          <Card title={t("bio.positions.title")} text={t("bio.positions.text")} />
        </div>
      </Section>

      <Divider />
      <Section id="research" title={t("research.title")} subtitle={t("research.subtitle")}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title={t("research.interests.title")} text={t("research.interests.text")} />
          <Card title={t("research.projects.title")} text={t("research.projects.text")} />
        </div>
      </Section>

      <Divider />
      <Section id="news" title={t("news.title")} subtitle={t("news.subtitle")}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title={t("news.item1.title")} text={t("news.item1.text")} />
          <Card title={t("news.item2.title")} text={t("news.item2.text")} />
        </div>
      </Section>

      <Divider />
      <Section id="conferences" title={t("conf.title")} subtitle={t("conf.subtitle")}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title={t("conf.item1.title")} text={t("conf.item1.text")} />
          <Card title={t("conf.item2.title")} text={t("conf.item2.text")} />
        </div>
      </Section>

      <Divider />
      <Section id="community" title={t("community.title")} subtitle={t("community.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title={t("community.activities.title")} text={t("community.activities.text")} />
          <Card title={t("community.lectures.title")} text={t("community.lectures.text")} />
          <Card title={t("community.media.title")} text={t("community.media.text")} />
        </div>
      </Section>

      <Divider />
      <Section id="publications" title={t("pub.title")} subtitle={t("pub.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title={t("pub.books.title")} text={t("pub.books.text")} />
          <Card title={t("pub.journals.title")} text={t("pub.journals.text")} />
          <Card title={t("pub.foreign.title")} text={t("pub.foreign.text")} />
        </div>
        <div className="mt-6 bg-white p-6 text-sm text-neutral-600 shadow-sm">
          {t("pub.note")}
        </div>
      </Section>

      <Divider />
      <Section id="contact" title={t("contact.title")} subtitle={t("contact.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title={t("contact.emailTitle")} text={t("contact.emailValue")} />
          <Card title={t("contact.phoneTitle")} text={t("contact.phoneValue")} />
          <Card title={t("contact.locationTitle")} text={t("contact.locationText")} />
        </div>
      </Section>

      <footer className="mt-10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-600">
          © {new Date().getFullYear()} {t("footer.rights")}
        </div>
      </footer>
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="h-px bg-neutral-200" />
    </div>
  );
}

function Tile({
  title,
  Icon
}: {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="group grid min-h-[170px] place-items-center bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-neutral-100">
      <div className="flex flex-col items-center gap-4">
        <Icon size={44} className="text-blue-600" />
        <div className="text-xl font-semibold text-neutral-950">{title}</div>
      </div>
    </div>
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
    <section id={id} className="mx-auto max-w-6xl px-5 py-10 scroll-mt-24">
      <div className="mb-6 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-1 text-neutral-600">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-lg transition duration-300 border border-neutral-100">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</div>
    </div>
  );
}

function Menu({
  label,
  items
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="relative group">
      <button type="button" aria-haspopup="menu" className="inline-flex items-center gap-1 hover:text-blue-600">
        {label} <ChevronDown size={16} />
      </button>
      <div role="menu" className="invisible absolute left-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="py-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  Icon,
  href,
  label
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-xl border border-blue-200 bg-white text-blue-600 shadow-sm hover:bg-blue-50"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon size={20} />
    </a>
  );
}
