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
  Leaf,
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
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ReactNode, useRef } from "react";

const navItems = [
  { label: "Fitur", href: "#fitur" },
  { label: "Role", href: "#role" },
  { label: "Alur", href: "#alur" },
  { label: "Tim", href: "#tim" },
  { label: "Download", href: "#download" },
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
  ["Nama Anggota 1", "Project Manager", "/team/member-1.svg"],
  ["Nama Anggota 2", "Mobile Developer", "/team/member-2.svg"],
  ["Nama Anggota 3", "Backend Developer", "/team/member-3.svg"],
  ["Nama Anggota 4", "UI/UX Designer", "/team/member-4.svg"],
  ["Nama Anggota 5", "Data/Drone Analyst", "/team/member-5.svg"],
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/12 bg-[#071811]/60 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#0A3B2E]">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            DeforTrack
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
          href="/downloads/defortrack.apk"
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
  const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1.18]);
  const firstStory = useTransform(smoothProgress, [0.22, 0.36, 0.58], [0, 1, 0]);
  const secondStory = useTransform(smoothProgress, [0.52, 0.66, 0.86], [0, 1, 0]);
  const thirdStory = useTransform(smoothProgress, [0.76, 0.9, 1], [0, 1, 0.42]);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen bg-[#071811]">
      <div className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute -inset-8">
          <Image
            src="/images/defortrack-hero.png"
            alt="Drone memindai kawasan hutan dan lahan pertanian"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[45%_center]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,17,0.16)_0%,rgba(7,24,17,0.34)_36%,rgba(7,24,17,0.76)_66%,rgba(7,24,17,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,17,0.38)_0%,rgba(7,24,17,0.06)_34%,rgba(7,24,17,0.36)_70%,#071811_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(10,59,46,0.5),transparent_36%),radial-gradient(circle_at_18%_38%,rgba(244,201,93,0.08),transparent_22%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[62vw] bg-[linear-gradient(270deg,rgba(7,24,17,0.72),rgba(7,24,17,0))]" />

        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="pointer-events-auto relative z-10 flex min-h-screen items-center px-5 pt-28 sm:px-8"
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
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.24, duration: 0.85, ease: smoothEase }}
                className="mt-10 flex flex-col gap-3 sm:flex-row lg:justify-end"
              >
                <a
                  href="/downloads/defortrack.apk"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20 hidden px-6 lg:block">
          <div className="mx-auto flex max-w-7xl items-end justify-between">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="rounded-2xl border border-white/14 bg-white/[0.08] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/46">Scan fidelity</p>
              <p className="mt-2 text-3xl font-semibold">98.4%</p>
            </motion.div>
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

        <motion.div
          style={{ opacity: firstStory }}
          className="pointer-events-none absolute right-5 top-[24%] z-20 w-[min(25rem,calc(100%-2.5rem))] rounded-3xl border border-white/14 bg-[#071811]/58 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl sm:right-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C95D]">01 Drone appears</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Aerial context enters the system.</h2>
          <p className="mt-4 leading-7 text-white/64">
            Drone bergerak di atas kawasan hutan dan lahan untuk membuka lapisan data pertama.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: secondStory }}
          className="pointer-events-none absolute left-5 top-[34%] z-20 w-[min(25rem,calc(100%-2.5rem))] rounded-3xl border border-white/14 bg-[#071811]/58 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl sm:left-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C95D]">02 Forest scan</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">The terrain becomes measurable.</h2>
          <p className="mt-4 leading-7 text-white/64">
            Laser scan bergerak perlahan, lalu area prioritas muncul sebagai heatmap yang bisa dianalisis.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: thirdStory }}
          className="pointer-events-none absolute bottom-20 left-1/2 z-20 w-[min(42rem,calc(100%-2.5rem))] -translate-x-1/2 rounded-3xl border border-white/14 bg-[#071811]/62 p-6 text-center text-white shadow-2xl shadow-black/30 backdrop-blur-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C95D]">03 Data turns actionable</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">From scan to role-based decisions.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/64">
            Data drone, laporan petani, dan kontrol Admin KPH menyatu menjadi alur kerja pengelolaan lahan.
          </p>
        </motion.div>

        <motion.a
          href="#fitur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl transition hover:text-white"
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
          eyebrow="Feature architecture"
          title="Glass modules that turn raw terrain into decisions."
          description="Setiap fitur dibuat seperti instrument panel: ringan, tajam, dan bergerak mengikuti konteks monitoring."
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
          description="Petani, Operator Drone, Admin KPH, dan Super Admin berada dalam jaringan peran yang saling memberi konteks."
        />
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:hidden">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 720" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M180 104 C170 205 206 270 180 360 C154 450 190 530 180 640"
                fill="none"
                stroke="rgba(244,201,93,0.58)"
                strokeWidth="2"
                strokeDasharray="8 13"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            <div className="relative z-10 mx-auto flex w-48 flex-col items-center rounded-[1.5rem] border border-[#F4C95D]/30 bg-[#F4C95D]/12 p-5 text-center text-white shadow-2xl shadow-[#F4C95D]/10 backdrop-blur-xl">
              <Layers3 className="size-7 text-[#F4C95D]" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/54">Core data</p>
              <p className="mt-1 text-2xl font-semibold">DeForTrack</p>
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
  return (
    <section id="tim" className="bg-[#071811] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team signal"
          title="The people behind the terrain intelligence."
          description="Placeholder anggota tim sudah disiapkan agar kamu bisa mengganti foto dan biodata dengan mudah."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.map(([name, role, image], index) => (
            <Reveal key={name}>
              <motion.article
                whileHover={{ y: -9, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-4 text-white shadow-2xl shadow-black/12 backdrop-blur-xl"
              >
                <Image
                  src={image}
                  alt={`Foto placeholder ${name}`}
                  width={320}
                  height={320}
                  className="aspect-square w-full rounded-[1.1rem] object-cover"
                />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-white/58">{role}</p>
              </motion.article>
            </Reveal>
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
              Android package
            </div>
            <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1] tracking-tight sm:text-6xl">
              Download Aplikasi DeforTrack
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
              Unduh APK DeforTrack untuk monitoring lahan, laporan petani,
              hasil scan drone, dan akses role dari perangkat Android.
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
          <div className="relative min-h-[440px] overflow-hidden border-t border-white/10 bg-[#F7F5EF]/8 lg:border-l lg:border-t-0">
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/18 bg-[#071811] p-3 shadow-2xl shadow-black/40"
            >
              <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,#123c28,#071811)] p-5">
                <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />
                <div className="mt-8 rounded-2xl border border-white/12 bg-white/[0.08] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4C95D]">Scan ready</p>
                  <p className="mt-3 text-3xl font-semibold text-white">APK</p>
                  <div className="mt-5 space-y-2">
                    <div className="h-2 rounded-full bg-white/16" />
                    <div className="h-2 w-8/12 rounded-full bg-[#1F8A70]" />
                    <div className="h-2 w-10/12 rounded-full bg-white/12" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.08] p-4">
                    <Leaf className="size-5 text-[#1F8A70]" aria-hidden="true" />
                    <p className="mt-4 text-xs text-white/58">Lahan</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.08] p-4">
                    <Drone className="size-5 text-[#F4C95D]" aria-hidden="true" />
                    <p className="mt-4 text-xs text-white/58">Drone</p>
                  </div>
                </div>
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
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#0A3B2E]">
              <Leaf className="size-5" aria-hidden="true" />
            </span>
            <p className="text-lg font-semibold">DeforTrack</p>
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

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071811] text-white">
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
