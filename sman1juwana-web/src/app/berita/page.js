/**
 * HALAMAN DAFTAR BERITA & AGENDA SEKOLAH
 * URL: /berita
 * File: src/app/berita/page.js
 * 
 * Fungsi:
 * - Menampilkan seluruh berita dan informasi kegiatan sekolah (minimal 6 berita).
 * - Menggunakan komponen reusable BeritaCard dalam grid responsif:
 *   Desktop (3 kolom), Tablet (2 kolom), Mobile (1 kolom).
 * - Data diambil dari data statis terpusat src/data/berita.js.
 */

import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";
import Link from "next/link";

export const metadata = {
  title: "Berita & Agenda | SMA Negeri 1 Juwana",
  description:
    "Kumpulan berita terkini, prestasi, agenda akademik, dan pengumuman resmi SMA Negeri 1 Juwana, Kabupaten Pati.",
};

export default function BeritaPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* Header Banner Berita */}
      <section className="bg-[#12304A] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigasi */}
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-[#D4A72C] font-medium">Berita &amp; Agenda</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Warta &amp; Berita Sekolah
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Liputan aktivitas pembelajaran, prestasi peserta didik, kegiatan ekstrakurikuler, dan rilis pengumuman akademik SMA Negeri 1 Juwana.
            </p>
          </div>
        </div>
      </section>

      {/* Konten Grid Berita */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        {/* Bar Filter / Informasi Jumlah */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-3">
          <div>
            <h2 className="text-xl font-bold text-[#12304A]">
              Semua Publikasi ({daftarBerita.length} Berita)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Menampilkan rilis artikel dan catatan kegiatan terkini sekolah
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs">
              Kategori: Semua
            </span>
          </div>
        </div>

        {/* Responsive Grid: 3 Kolom Desktop, 2 Kolom Tablet, 1 Kolom Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarBerita.map((item) => (
            <BeritaCard key={item.id} berita={item} />
          ))}
        </div>

        {/* Informasi Bawah */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <h3 className="text-base font-bold text-[#12304A] mb-1">
            Butuh Informasi Seputar Penerimaan Siswa?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Silakan telusuri profil lengkap sekolah atau hubungi bagian tata usaha melalui nomor resmi sekolah.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12304A] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>Buka Halaman Tentang Sekolah</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
