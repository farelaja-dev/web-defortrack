import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  MapPinned,
  MessageSquareHeart,
  Radar,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Survei Program DeforTrack",
  description:
    "Berpartisipasi dalam Survei Program DeforTrack untuk membantu pengembangan pemantauan hutan dan lahan yang lebih berkelanjutan.",
};

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpZvuOa_pU9sccBk1miJZcP1daqamO6oe3xxc8Cigp6B58qw/viewform";

const surveyTopics = [
  {
    title: "Pemantauan hutan",
    description:
      "Bagikan pandangan Anda tentang pemantauan deforestasi, penebangan liar, dan kondisi hutan di sekitar wilayah Anda.",
    icon: Radar,
  },
  {
    title: "Teknologi yang berguna",
    description:
      "Tentukan informasi dan fitur aplikasi yang paling membantu, mulai dari peta hutan hingga hasil scan drone.",
    icon: MapPinned,
  },
  {
    title: "Masukan program",
    description:
      "Sampaikan saran untuk pengembangan DeforTrack agar lebih relevan bagi masyarakat, petani, dan mitra lingkungan.",
    icon: MessageSquareHeart,
  },
];

export default function SurveyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071811] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(31,138,112,0.42),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(244,201,93,0.14),transparent_20%),linear-gradient(155deg,#071811_0%,#0A3B2E_56%,#071811_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(rgba(247,245,239,0.17)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,239,0.17)_1px,transparent_1px)] [background-size:64px_64px]" />

        <header className="px-4 py-4 sm:px-6">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/12 bg-[#071811]/62 px-3 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-4">
            <Link href="/" className="flex min-w-0 items-center gap-3 transition hover:-translate-y-0.5">
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
              <span className="hidden text-sm font-semibold text-white/70 sm:inline">Survei Program</span>
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-4 text-sm font-semibold text-white/78 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Beranda
            </Link>
          </nav>
        </header>

        <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F4C95D]/28 bg-[#F4C95D]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D] backdrop-blur-md">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Suara untuk hutan
                </div>
                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-8xl">
                  Survei Program <span className="text-[#F4C95D]">DeforTrack.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
                  Bantu kami merancang pemantauan hutan dan lahan yang lebih bermanfaat,
                  terbuka, dan mudah diakses. Pendapat Anda akan menjadi bagian dari arah
                  pengembangan DeforTrack.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#F4C95D] px-7 text-base font-semibold text-[#0A3B2E] shadow-2xl shadow-[#F4C95D]/20 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <ClipboardList className="size-5 transition group-hover:-rotate-6" aria-hidden="true" />
                    Isi Survei Sekarang
                    <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                  <p className="inline-flex items-center justify-center text-sm text-white/52 sm:justify-start">
                    Formulir dibuka melalui Google Forms.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-[#F4C95D]/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.07] p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#F4C95D]/25 bg-[#F4C95D]/12 text-[#F4C95D]">
                      <ClipboardList className="size-7" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-white/52">
                      Partisipatif
                    </span>
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C95D]">
                    Tentang survei
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Teknologi, kolaborasi, dan hutan yang lestari.
                  </h2>
                  <p className="mt-5 leading-7 text-white/62">
                    DeforTrack memadukan pemindaian drone dengan sensor LiDAR dan GPS,
                    peta digital, serta skema insentif untuk mendukung upaya pencegahan
                    deforestasi.
                  </p>
                  <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/70">
                    {[
                      "Data dasar dan kategori responden",
                      "Pendapat tentang pemantauan hutan",
                      "Penilaian fitur dan masukan DeforTrack",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#F4C95D]" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#F7F5EF] px-5 py-20 text-[#0A3B2E] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1F8A70]">Apa yang ditanyakan</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
              Satu survei untuk memahami kebutuhan di lapangan.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0A3B2E]/65">
              Jawaban Anda membantu kami melihat bagaimana teknologi pemantauan dan sistem pelaporan dapat dirancang lebih dekat dengan kebutuhan nyata.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {surveyTopics.map((topic, index) => (
              <article key={topic.title} className="group rounded-[1.6rem] border border-[#0A3B2E]/10 bg-white p-6 shadow-xl shadow-[#0A3B2E]/5 transition hover:-translate-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0A3B2E] p-3 text-[#F4C95D] shadow-lg shadow-[#0A3B2E]/16">
                    <topic.icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#1F8A70]">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{topic.title}</h3>
                <p className="mt-4 leading-7 text-[#0A3B2E]/62">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A3B2E] px-5 py-20 sm:px-8 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_38%,rgba(244,201,93,0.16),transparent_28%),linear-gradient(130deg,#071811_0%,#0A3B2E_64%,#1F8A70_140%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/14 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl border border-[#F4C95D]/25 bg-[#F4C95D]/12 text-[#F4C95D]">
              <UsersRound className="size-7" aria-hidden="true" />
            </div>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
              Siapa yang dapat berpartisipasi?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/64">
              Survei ini terbuka untuk pihak yang ingin menyampaikan perspektifnya terhadap perlindungan hutan dan pemantauan lahan.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:items-end">
            {["Masyarakat Umum", "Petani", "Dinas Lingkungan Hidup"].map((audience) => (
              <div key={audience} className="rounded-2xl border border-white/12 bg-[#071811]/35 p-5 text-center text-sm font-semibold leading-6 text-white/84">
                {audience}
              </div>
            ))}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="sm:col-span-3 group mt-3 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#F4C95D] px-7 font-semibold text-[#0A3B2E] transition hover:-translate-y-1 hover:bg-white"
            >
              Buka Formulir Survei
              <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#071811] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>Survei Program DeforTrack</p>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[#F4C95D] transition hover:text-white">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Kembali ke beranda
          </Link>
        </div>
      </footer>
    </main>
  );
}
