import {
  BookOpen, Database, Drone, FileCheck2, FileText, Globe,
  Medal, Newspaper, Play, Radar, Smartphone, Sprout, UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

// Ubah judul, deskripsi, dan ikon keunggulan di sini.
export const advantages: { title: string; description: ReactNode; icon: LucideIcon }[] = [
  {
    title: "Verifikasi Lapang yang Akurat",
    description: <>Memvalidasi indikasi perubahan atau kerusakan hutan melalui <strong>pengukuran langsung menggunakan drone</strong>.</>,
    icon: Drone,
  },
  {
    title: "Respon Lebih Cepat dan Tepat Sasaran",
    description: <>DeforTrack langsung menuju <strong>titik yang terindikasi bermasalah</strong> sehingga verifikasi dapat dilakukan lebih cepat.</>,
    icon: Radar,
  },
  {
    title: "Pelaporan Partisipatif yang Efisien & Efektif",
    description: <>Melibatkan <strong>masyarakat dan petani</strong> sebagai sumber laporan untuk mendukung <strong>pengawasan hutan</strong>.</>,
    icon: UsersRound,
  },
  {
    title: "Transparansi & Validitas Data",
    description: <>Hasil pengukuran menjadi <strong>data pembanding</strong> untuk meningkatkan validitas dan meminimalkan manipulasi.</>,
    icon: Database,
  },
  {
    title: "Berorientasi pada Keberlanjutan",
    description: <>Mendukung kelestarian hutan melalui <strong>insentif pelaporan</strong> dan program <strong>Petani Sahabat Hutan</strong>.</>,
    icon: Sprout,
  },
];

export type Deliverable = {
  title: string;
  subtitle?: string;
  progress: number;
  icon: LucideIcon;
  image: string | null;
  href?: string;
};

// Simpan foto di public/images, lalu isi image dengan path file yang sesuai.
// Semua foto ditampilkan utuh dalam frame 1:1. Sesuaikan judul dan progress (0–100) sesuai kebutuhan.
export const deliverableGroups: { title: string; items: Deliverable[] }[] = [
  {
    title: "Dokumentasi & Pelaporan",
    items: [
      { title: "Video Akhir", progress: 100, icon: Play, image: "/images/optimized/vidioakhir.webp", href: "https://youtu.be/6tC7vioROco?feature=shared" },
      { title: "Media Sosial DeforTrack", progress: 100, icon: UsersRound, image: "/images/optimized/sosialmedia.webp" },
      { title: "Laporan Kemajuan", progress: 100, icon: FileText, image: "/images/optimized/laporankemajuan.webp", href: "https://bit.ly/LaporanKemajuanDeforTrack" },
      { title: "Laporan Akhir", progress: 100, icon: FileCheck2, image: "/images/optimized/laporanakhir.webp", href: "https://bit.ly/LaporanAkhirDefortrack" },
    ],
  },
  {
    title: "Produk & Publikasi",
    items: [
      { title: "Website", progress: 100, icon: Globe, image: "/images/optimized/website.webp", href: "https://bit.ly/WebsiteDeforTrack" },
      { title: "Aplikasi Mobile", progress: 100, icon: Smartphone, image: "/images/optimized/aplikasi.webp", href: "https://bit.ly/AplikasiDeforTrack" },
      { title: "Manual Book", progress: 100, icon: BookOpen, image: "/images/optimized/manualbook.webp", href: "https://bit.ly/ManualBookDeforTrack" },
      { title: "Artikel Media Massa", progress: 100, icon: Newspaper, image: "/images/optimized/artikel.webp", href: "https://unej.ac.id/blog/2026/09/08/atasi-ancaman-deforestasi-mahasiswa-unej-gagas-defortrack-inovasi-pemantauan-hutan-berbasis-drone-lidar-dan-skema-insentif-masyarakat/" },
      { title: "HKI", subtitle: "Manual Book, Aplikasi, dan Video", progress: 100, icon: Medal, image: "/images/optimized/hki.webp", href: "https://bit.ly/HKIDeforTrack" },
      { title: "Policy Brief", progress: 100, icon: FileText, image: "/images/optimized/policybrief.webp", href: "https://drive.google.com/file/d/1pDC4Fl843fTsStbEtNg7ijoPX-O71-J_/view?usp=sharing" },
    ],
  },
];
