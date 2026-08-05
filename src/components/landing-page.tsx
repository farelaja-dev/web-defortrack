"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  ClipboardList,
  Database,
  Download,
  Drone,
  Fingerprint,
  HandCoins,
  Layers3,
  MapPinned,
  Network,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
  Waves,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Fitur", href: "#fitur" },
  { label: "Role", href: "#role" },
  { label: "Alur", href: "#alur" },
  { label: "Tim", href: "#tim" },
  { label: "Download", href: "#download" },
];

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="instagramGradient" x1="4" x2="20" y1="20" y2="4">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.28" stopColor="#FA7E1E" />
          <stop offset="0.55" stopColor="#D62976" />
          <stop offset="0.78" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5.4" fill="url(#instagramGradient)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="17.1" cy="6.9" r="1.35" fill="white" />
    </svg>
  );
}

function TikTokLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14.8 2.5h3.1c.2 1.3.8 2.4 1.7 3.3.8.8 1.8 1.3 3 1.5v3.2a8 8 0 0 1-4.6-1.4v6.2c0 3.7-2.5 6.2-6.1 6.2-3.4 0-5.9-2.3-5.9-5.5 0-3.5 2.7-5.8 6.4-5.4v3.2c-1.8-.3-3.1.5-3.1 2 0 1.3 1 2.2 2.5 2.2 1.7 0 2.9-1 2.9-3.2V2.5Z"
        fill="#111111"
      />
      <path
        d="M16.5 2.5h1.4c.2 1.3.8 2.4 1.7 3.3.8.8 1.8 1.3 3 1.5v1.4c-2.9-.3-5.2-2.5-6.1-6.2Z"
        fill="#25F4EE"
      />
      <path
        d="M12.4 10.6v3.2c-1.8-.3-3.1.5-3.1 2 0 .9.5 1.6 1.3 2-2.2-.1-3.7-1.9-3.7-4 .8-2.3 2.9-3.5 5.5-3.2Z"
        fill="#FE2C55"
      />
    </svg>
  );
}

function YouTubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="22" height="16" x="1" y="4" rx="4.2" fill="#FF0000" />
      <path d="m10 8.5 6 3.5-6 3.5v-7Z" fill="white" />
    </svg>
  );
}

function GmailLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4.5 6.5h15v11h-15v-11Z" fill="#FFFFFF" />
      <path d="M4.5 6.5 12 12l7.5-5.5v2.9L12 14.8 4.5 9.4V6.5Z" fill="#EA4335" />
      <path d="M4.5 6.5v11h3v-8.8l-3-2.2Z" fill="#C5221F" />
      <path d="M19.5 6.5v11h-3v-8.8l3-2.2Z" fill="#FABB05" />
      <path d="M7.5 17.5h9v-2.8l-4.5 3.1-4.5-3.1v2.8Z" fill="#34A853" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/defortrack",
    icon: InstagramLogo,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@defortrack",
    icon: TikTokLogo,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@defortrack",
    icon: YouTubeLogo,
  },
];

const features = [
  {
    title: "Drone Scan Intelligence",
    description:
      "Hasil pemindaian drone ditampilkan sebagai lapisan visual untuk membaca perubahan vegetasi dan area prioritas.",
    icon: Radar,
    metric: "Live terrain layer",
  },
  {
    title: "Laporan Lapangan",
    description:
      "Petani mengirim kondisi lahan, bukti lokasi, dan kebutuhan bantuan langsung ke alur monitoring wilayah.",
    icon: ClipboardList,
    metric: "Farmer signal",
  },
  {
    title: "Wilayah dan Data Lahan",
    description:
      "Admin KPH mengelola batas wilayah, lahan, petani, operator, dan drone dalam struktur data yang konsisten.",
    icon: MapPinned,
    metric: "KPH map system",
  },
  {
    title: "Operator dan Drone",
    description:
      "Penugasan scan, histori penerbangan, dan status drone terbaca jelas tanpa mengganggu data role lain.",
    icon: Drone,
    metric: "Mission control",
  },
  {
    title: "Insentif Pertanian",
    description:
      "Data kebutuhan bantuan dapat ditautkan ke wilayah, petani, dan kondisi lahan yang relevan.",
    icon: HandCoins,
    metric: "Aid pipeline",
  },
  {
    title: "Dashboard Per Role",
    description:
      "Setiap role masuk ke ruang kerja yang berbeda, dari petani sampai Super Admin pengawas sistem.",
    icon: BarChart3,
    metric: "Role-aware UI",
  },
];

const roles = [
  {
    title: "Petani",
    description: "Laporan lahan, riwayat scan, dan informasi insentif.",
    icon: Sprout,
  },
  {
    title: "Operator Drone",
    description: "Misi pemindaian, wilayah tugas, dan histori scan.",
    icon: Drone,
  },
  {
    title: "Admin KPH",
    description: "Wilayah, petani, operator, drone, laporan, dan insentif.",
    icon: ShieldCheck,
  },
  {
    title: "Super Admin",
    description: "Pengawasan seluruh user, wilayah, scan, drone, dan bantuan.",
    icon: UsersRound,
  },
];

const desktopRoleNodes = [
  {
    ...roles[0],
    position: "left-[8%] top-[18%]",
  },
  {
    ...roles[1],
    position: "left-[8%] bottom-[18%]",
  },
  {
    ...roles[2],
    position: "right-[8%] top-[18%]",
  },
  {
    ...roles[3],
    position: "right-[8%] bottom-[18%]",
  },
];

const desktopRolePaths = [
  "M330 178 C380 178 404 228 442 267",
  "M330 442 C380 442 404 392 442 353",
  "M670 178 C620 178 596 228 558 267",
  "M670 442 C620 442 596 392 558 353",
];

const workflow = [
  {
    title: "Register",
    description: "Petani dan lahan masuk ke wilayah pengelolaan.",
    icon: Fingerprint,
  },
  {
    title: "Deploy",
    description: "Operator menjalankan scan drone pada area prioritas.",
    icon: Drone,
  },
  {
    title: "Capture",
    description: "Hasil scan tersimpan sebagai data visual dan histori.",
    icon: ScanLine,
  },
  {
    title: "Analyze",
    description: "Admin KPH membaca laporan, wilayah, dan kebutuhan insentif.",
    icon: Database,
  },
  {
    title: "Govern",
    description: "Super Admin mengawasi keseluruhan sistem dan konsistensi data.",
    icon: Network,
  },
];

const team = [
  {
    name: "Indah Ibanah, S.P., M.Si",
    role: "Supervisor",
    detail: "Dosen Agribisnis",
    image: "/images/ibanah.webp",
  },
  {
    name: "Faruk Umar",
    role: "Leader",
    detail: "Agribisnis '24",
    image: "/images/faruk.webp",
  },
  {
    name: "Fadiyah Kamila A. S.",
    role: "Secretary",
    detail: "Agronomi '24",
    image: "/images/fadiyah.webp",
  },
  {
    name: "Yesika Indah P.",
    role: "Finance",
    detail: "Agribisnis '24",
    image: "/images/yesika.webp",
  },
  {
    name: "Kiarra Putri M.K.W.",
    role: "Content Planner",
    detail: "Teknologi Informasi '24",
    image: "/images/kiarra.webp",
  },
  {
    name: "Anugrah Farel P.F.",
    role: "Content Creator",
    detail: "Teknologi Informasi '23",
    image: "/images/farel.webp",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(14px)", scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.75, ease: smoothEase },
  },
};

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl text-left"
      }
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D] backdrop-blur-md">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </Reveal>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/12 bg-[#071811]/60 px-3 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-4">
        <a href="#hero" className="flex min-w-0 items-center gap-2 transition hover:-translate-y-0.5 sm:gap-3">
          <span className="flex shrink-0 items-center rounded-2xl bg-[#F7F5EF] px-3 py-2 shadow-lg shadow-black/15 ring-1 ring-white/40">
            <Image
              src="/images/logo.png"
              alt="DeforTrack"
              width={180}
              height={72}
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </span>
          <span className="inline-flex shrink-0 rounded-full border border-[#F4C95D]/30 bg-[#F4C95D]/12 px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#F4C95D] shadow-lg shadow-black/10 backdrop-blur sm:px-3 sm:text-xs sm:tracking-[0.18em]">
            PKM-VGK
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-white/68 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#F4C95D] px-4 text-sm font-semibold text-[#0A3B2E] shadow-lg shadow-[#F4C95D]/15 transition hover:-translate-y-0.5 hover:bg-white"
        >
          <Download className="size-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
          APK
        </a>
      </nav>
    </header>
  );
}

function HeroStage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.3 });

  const titleOpacity = useTransform(smoothProgress, [0, 1], [1, 1]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, 0]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.03, 1.12]);
  return (
    <section ref={heroRef} id="hero" className="relative min-h-[100svh] bg-[#071811]">
      <div className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute -inset-4 lg:-inset-8">
          <Image
            src="/images/defortrack-hero.png"
            alt="Drone memindai kawasan hutan dan lahan pertanian"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[18%_center] sm:object-[34%_center] lg:object-[45%_center]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,17,0.68)_0%,rgba(7,24,17,0.38)_48%,rgba(7,24,17,0.12)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,24,17,0.16)_0%,rgba(7,24,17,0.34)_36%,rgba(7,24,17,0.76)_66%,rgba(7,24,17,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,17,0.24)_0%,rgba(7,24,17,0.03)_30%,rgba(7,24,17,0.30)_74%,#071811_100%)] lg:bg-[linear-gradient(180deg,rgba(7,24,17,0.38)_0%,rgba(7,24,17,0.06)_34%,rgba(7,24,17,0.36)_70%,#071811_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(10,59,46,0.34),transparent_38%),radial-gradient(circle_at_76%_34%,rgba(244,201,93,0.08),transparent_22%)] lg:bg-[radial-gradient(circle_at_72%_44%,rgba(10,59,46,0.5),transparent_36%),radial-gradient(circle_at_18%_38%,rgba(244,201,93,0.08),transparent_22%)]" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[62vw] bg-[linear-gradient(270deg,rgba(7,24,17,0.72),rgba(7,24,17,0))] lg:block" />

        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="pointer-events-auto relative z-10 flex min-h-[100svh] items-start px-5 pb-10 pt-28 sm:px-8 lg:items-center lg:pb-0"
        >
          <div className="mx-auto flex w-full max-w-7xl justify-start lg:justify-end">
            <div className="max-w-4xl lg:max-w-3xl lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: smoothEase }}
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C95D] backdrop-blur-xl"
              >
                <Waves className="size-4" aria-hidden="true" />
                Pantau Hutan, Jaga Masa Depan
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.08, duration: 0.85, ease: smoothEase }}
                className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.88] tracking-tight text-white drop-shadow-[0_10px_36px_rgba(0,0,0,0.42)] sm:text-8xl lg:text-[8.4rem]"
              >
                DeforTrack
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.16, duration: 0.85, ease: smoothEase }}
                className="mt-7 max-w-2xl text-lg leading-8 text-white/78 drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:text-2xl sm:leading-9 lg:ml-auto"
              >
                Sistem monitoring deforestasi dan pengelolaan lahan berbasis
                drone, laporan petani, dan dashboard peran.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.22, duration: 0.85, ease: smoothEase }}
                className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#F4C95D]/26 bg-[#F7F5EF]/12 p-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
              >
                <div className="relative aspect-video overflow-hidden rounded-[1rem]">
                  <Image
                    src="/images/bersama.jpg"
                    alt="Foto bersama tim DeforTrack"
                    fill
                    sizes="calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(7,24,17,0.76)_100%)]" />
                  <div className="absolute bottom-3 left-3 rounded-xl border border-white/12 bg-[#071811]/58 px-3 py-2 backdrop-blur-xl">
                    <p className="text-sm font-semibold text-white">Tim DeforTrack</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.24, duration: 0.85, ease: smoothEase }}
                className="mt-10 flex flex-col gap-3 sm:flex-row lg:justify-end"
              >
                <a
                  href="#download"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#F4C95D] px-7 text-base font-semibold text-[#0A3B2E] shadow-2xl shadow-[#F4C95D]/20 transition hover:-translate-y-1 hover:bg-white"
                >
                  <Download className="size-5 transition group-hover:translate-y-0.5" aria-hidden="true" />
                  Download Aplikasi
                </a>
                <a
                  href="#fitur"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/14 bg-white/[0.06] px-7 text-base font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12"
                >
                  Lihat Fitur
                  <ArrowRight className="size-5 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          <div className="absolute bottom-24 left-4 xl:left-10 2xl:left-16">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.42, duration: 0.8, ease: smoothEase }}
              className="relative w-[min(38rem,46vw)] overflow-hidden rounded-[1.75rem] border border-[#F4C95D]/28 bg-[#F7F5EF]/12 p-2.5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_80%,rgba(244,201,93,0.26),transparent_34%)]" />
              <div className="relative aspect-video overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/images/bersama.jpg"
                  alt="Foto bersama tim DeforTrack"
                  fill
                  sizes="38rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,17,0.04)_0%,transparent_42%,rgba(7,24,17,0.78)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div className="rounded-2xl border border-white/12 bg-[#071811]/55 px-4 py-3 backdrop-blur-xl">
                    <p className="text-lg font-semibold text-white">
                      Tim DeforTrack
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-7 right-6 xl:right-10 2xl:right-16">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.52, duration: 0.7 }}
              className="w-80 rounded-2xl border border-white/14 bg-white/[0.08] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-white/46">Forest pulse</p>
                <span className="size-2 rounded-full bg-[#F4C95D]" />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#1F8A70]"
                  initial={{ width: "18%" }}
                  animate={{ width: "76%" }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#fitur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl transition hover:text-white sm:flex"
        >
          Scroll
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative bg-[#071811] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeader
          align="left"
          eyebrow="System concept"
          title="A living data layer for forest and land operations."
          description="DeforTrack dibuat untuk membantu pemantauan wilayah hutan/lahan secara lebih terstruktur. Sistem ini menghubungkan petani, operator drone, Admin KPH, dan Super Admin dalam satu alur data."
        />
        <Reveal className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Drone", "Scan wilayah dan riwayat pemindaian"],
              ["Petani", "Laporan lapangan dan data lahan"],
              ["KPH", "Monitoring wilayah dan insentif"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-2xl font-semibold text-[#F4C95D]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="fitur" className="relative overflow-hidden bg-[#0A3B2E] px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#071811_0%,rgba(10,59,46,0.96)_36%,#0A3B2E_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(247,245,239,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,239,0.14)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Fitur utama"
          title="Semua data lahan, laporan, dan scan drone dalam satu alur."
          description="DeforTrack membantu tiap peran melihat informasi yang dibutuhkan: kondisi lahan, hasil pemindaian, laporan lapangan, data wilayah, dan bantuan pertanian."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title}>
              <motion.article
                whileHover={{ y: -10, scale: 1.018 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative min-h-72 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-6 text-white shadow-2xl shadow-black/10 backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#F4C95D,transparent)] opacity-50" />
                <div className="flex items-start justify-between gap-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.08]">
                    <feature.icon className="size-6 text-[#F4C95D]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/32">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A70]">
                  {feature.metric}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-4 leading-7 text-white/58">{feature.description}</p>
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#F4C95D] transition duration-500 group-hover:scale-x-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleNetworkSection() {
  return (
    <section id="role" className="relative overflow-hidden bg-[#071811] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Role network"
          title="Four users connected by one operational signal."
          description="Setiap pengguna memiliki akses sesuai tugasnya, mulai dari laporan petani, pemindaian drone, pengelolaan wilayah KPH, hingga pengawasan seluruh sistem."
        />
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:hidden">
            <div className="relative z-10 mx-auto flex w-48 flex-col items-center rounded-[1.5rem] border border-[#F4C95D]/30 bg-[#F4C95D]/12 p-5 text-center text-white shadow-2xl shadow-[#F4C95D]/10 backdrop-blur-xl">
              <Layers3 className="size-7 text-[#F4C95D]" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/54">Core data</p>
              <p className="mt-1 text-2xl font-semibold">DeforTrack</p>
            </div>
            <div className="relative z-10 mt-10 space-y-4">
              {roles.map((role, index) => (
                <motion.article
                  key={role.title}
                  initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.58, ease: smoothEase }}
                  className="rounded-[1.35rem] border border-white/12 bg-[#F7F5EF]/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-[#1F8A70] text-white">
                      <role.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/58">{role.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden min-h-[620px] max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 md:block">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
              {desktopRolePaths.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="rgba(244,201,93,0.62)"
                  strokeWidth="2"
                  strokeDasharray="10 14"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ delay: index * 0.08, duration: 1.35, ease: "easeInOut" }}
                />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 z-10 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#F4C95D]/30 bg-[#F4C95D]/12 p-6 text-center text-white shadow-2xl shadow-[#F4C95D]/10 backdrop-blur-xl">
              <Layers3 className="size-8 text-[#F4C95D]" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/54">Role Data</p>
              <p className="mt-1 text-2xl font-semibold">DeforTrack</p>
            </div>
            {desktopRoleNodes.map((role, index) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, scale: 0.82, filter: "blur(14px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.45 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 220, damping: 22 }}
                className={`absolute z-20 w-[18rem] rounded-[1.5rem] border border-white/12 bg-[#F7F5EF]/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl ${role.position}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#1F8A70] text-white">
                    <role.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/58">{role.description}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="alur" className="relative bg-[#F7F5EF] px-5 py-24 text-[#0A3B2E] sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1F8A70]">Animated workflow</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
            A horizontal flight path from registration to governance.
          </h2>
        </Reveal>
        <div className="mt-16 overflow-x-auto pb-6">
          <div className="relative grid min-w-[960px] grid-cols-5 gap-5">
            <motion.div
              className="absolute left-[7%] right-[7%] top-12 h-px bg-[#0A3B2E]/12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="absolute left-[7%] right-[7%] top-12 h-px bg-[linear-gradient(90deg,#1F8A70,#F4C95D)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.35, duration: 1.6, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
            {workflow.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.65, ease: smoothEase }}
                className="relative rounded-[1.5rem] border border-[#0A3B2E]/10 bg-white/70 p-5 shadow-xl shadow-[#0A3B2E]/5 backdrop-blur-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  className="relative z-10 flex size-24 items-center justify-center rounded-3xl bg-[#0A3B2E] text-white shadow-2xl shadow-[#0A3B2E]/18"
                >
                  <step.icon className="size-9 text-[#F4C95D]" aria-hidden="true" />
                </motion.div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A70]">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-[#0A3B2E]/62">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const teamRows = [team.slice(0, 1), team.slice(1, 3), team.slice(3, 6)];

  return (
    <section id="tim" className="bg-[#071811] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team signal"
          title="Tim Hebat di balik DeforTrack."
          description="Struktur tim DeforTrack."
        />
        <div className="mt-16 space-y-5">
          {teamRows.map((row, rowIndex) => (
            <div
              key={`team-row-${rowIndex}`}
              className="grid gap-5 sm:grid-cols-2 lg:flex lg:justify-center"
            >
              {row.map((member) => {
                return (
                  <Reveal key={member.name} className="lg:w-[min(100%,20rem)]">
                    <motion.article
                      whileHover={{ y: -9, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-4 text-white shadow-2xl shadow-black/12 backdrop-blur-xl ${
                        rowIndex === 0 ? "mx-auto max-w-sm border-[#F4C95D]/28 bg-[#F4C95D]/8" : ""
                      }`}
                    >
                      <Image
                        src={member.image}
                        alt={`Foto placeholder ${member.name}`}
                        width={320}
                        height={320}
                        className="aspect-square w-full rounded-[1.1rem] object-cover"
                      />
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D]">
                        {member.role}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/58">{member.detail}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-[#0A3B2E] px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#071811_0%,#0A3B2E_54%,#1F8A70_130%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_0%,rgba(244,201,93,0.22)_48%,transparent_70%)]" />
      <Reveal className="relative mx-auto max-w-6xl">
        <motion.div
          whileHover={{ scale: 1.006 }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
          className="grid overflow-hidden rounded-[2.4rem] border border-white/14 bg-white/[0.08] shadow-2xl shadow-black/24 backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-7 text-white sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4C95D]/28 bg-[#F4C95D]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D]">
              <Download className="size-4" aria-hidden="true" />
              Demo Android
            </div>
            <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1] tracking-tight sm:text-6xl">
              Download Demo Aplikasi DeforTrack
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
              APK ini adalah versi demo untuk memperlihatkan alur monitoring
              lahan, laporan petani, hasil scan drone, dan akses role dari
              perangkat Android. Data dan beberapa fitur masih bersifat contoh.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/downloads/defortrack.apk"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#F4C95D] px-7 font-semibold text-[#0A3B2E] shadow-2xl shadow-[#F4C95D]/20 transition hover:-translate-y-1 hover:bg-white"
              >
                <Download className="size-5 transition group-hover:translate-y-0.5" aria-hidden="true" />
                Download APK
              </a>
              <p className="inline-flex h-14 items-center text-sm font-medium text-white/48">
                Tersedia untuk Android.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 bg-[#F7F5EF]/8 sm:min-h-[440px] lg:border-l lg:border-t-0">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 aspect-[780/1600] w-[min(9rem,39vw)] -translate-x-1/2 -translate-y-1/2 rounded-[1.55rem] border border-white/18 bg-[#071811] p-1.5 shadow-2xl shadow-black/40 sm:w-[min(15.5rem,66vw)] sm:rounded-[2.5rem] sm:p-2.5"
            >
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/12 bg-[#071811] sm:rounded-[2rem]">
                <Image
                  src="/images/aplikasi.jpg"
                  alt="Tampilan aplikasi DeforTrack"
                  fill
                  sizes="(min-width: 640px) 15.5rem, 39vw"
                  className="object-cover"
                />
                <div className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-black/35 ring-1 ring-white/10 sm:top-3 sm:h-1.5 sm:w-16" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071811] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="flex flex-col gap-4 rounded-[1.6rem] border border-white/12 bg-[#F7F5EF]/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <a
            href="https://www.instagram.com/defortrack"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#F7F5EF]/8 px-5 py-4 transition hover:-translate-y-0.5 hover:border-[#F4C95D]/40 hover:bg-[#F4C95D]/10 sm:self-start lg:self-auto"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4C95D]">
              Sosial Media
            </span>
            <span className="text-base font-semibold text-white transition group-hover:text-[#F4C95D]">
              @defortrack
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group flex h-12 items-center gap-2 rounded-2xl border border-white/10 bg-[#F7F5EF]/8 px-4 text-sm font-semibold text-white/78 transition hover:-translate-y-0.5 hover:border-[#F4C95D]/40 hover:bg-[#F4C95D]/10 hover:text-white"
              >
                <item.icon className="size-6 transition group-hover:scale-110" />
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="mailto:defortrackpkmvgk@gmail.com"
              className="group flex h-12 min-w-0 max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-[#F7F5EF]/8 px-4 text-sm font-semibold text-white/78 transition hover:-translate-y-0.5 hover:border-[#F4C95D]/40 hover:bg-[#F4C95D]/10 hover:text-white"
            >
              <GmailLogo className="size-6 shrink-0 transition group-hover:scale-110" />
              <span className="sm:hidden">Contact Us</span>
              <span className="hidden truncate sm:inline">defortrackpkmvgk@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex items-center rounded-2xl bg-[#F7F5EF] px-4 py-3 shadow-xl shadow-black/20 ring-1 ring-white/30">
            <Image
              src="/images/logo.png"
              alt="DeforTrack"
              width={220}
              height={88}
              className="h-[3.25rem] w-auto object-contain sm:h-14"
            />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/46">
            Public information site for drone-assisted forest monitoring,
            farmer reports, land management, and role-based oversight.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/50">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-white/36">
          Copyright {new Date().getFullYear()} DeforTrack.
        </p>
      </div>
    </footer>
  );
}

function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const minDuration = 1700;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => setIsVisible(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const fallback = window.setTimeout(finish, 2600);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#071811] px-6 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(31,138,112,0.34),transparent_34%),linear-gradient(180deg,#071811_0%,#0A3B2E_100%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(247,245,239,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,239,0.16)_1px,transparent_1px)] [background-size:64px_64px]" />
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.94, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.025, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center rounded-[2rem] bg-[#F7F5EF] px-7 py-5 shadow-2xl shadow-black/30 ring-1 ring-white/50 sm:rounded-[2.4rem] sm:px-9 sm:py-6"
            >
              <Image
                src="/images/logo.png"
                alt="DeforTrack"
                width={260}
                height={104}
                priority
                className="h-16 w-auto object-contain sm:h-20"
              />
            </motion.div>
            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/12 sm:w-60">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-[#F4C95D]"
              />
            </div>
            <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/54 sm:text-sm">
              Memuat
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071811] text-white">
      <InitialLoader />
      <Header />
      <HeroStage />
      <AboutSection />
      <FeaturesSection />
      <RoleNetworkSection />
      <WorkflowSection />
      <TeamSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
