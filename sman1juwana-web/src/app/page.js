/**
 * HALAMAN UTAMA (BERANDA)
 * URL: /
 * File: src/app/page.js
 * 
 * Fungsi:
 * - Menjadi pintu masuk utama website profil sekolah SMA Negeri 1 Juwana.
 * - Mengintegrasikan komponen Hero, Sambutan Edukasi, Profil Singkat,
 *   Pilar Unggulan Sekolah, Pratinjau 3 Berita Terbaru (BeritaCard), dan CTA.
 * - Server Component untuk efisiensi render dan performa SEO optimal.
 */

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import { getBeritaTerbaru } from "@/data/berita";

export const metadata = {
  title: "Beranda | SMA Negeri 1 Juwana",
  description:
    "Website profil resmi SMA Negeri 1 Juwana. Membina generasi berkarakter, berwawasan luas, beriman, dan berdaya saing tinggi.",
};

export default function HomePage() {
  // Mengambil 3 berita paling baru dari data statis terpusat
  const beritaTerbaru = getBeritaTerbaru();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Pengantar & Sambutan Pendidikan */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
              Lingkungan Pendidikan Berkualitas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12304A] tracking-tight">
              Membangun Generasi Cerdas dan Berbudi Pekerti Luhur
            </h2>
            <div className="w-16 h-1 bg-[#D4A72C] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              Pendidikan menengah atas merupakan fase penting dalam peletakan pondasi keilmuan, kematangan berpikir, dan pembentukan integritas moral. Di SMA Negeri 1 Juwana, kami meyakini bahwa suasana belajar yang tertib, harmonis, dan inklusif adalah kunci utama dalam menghantarkan setiap murid mencapai potensi terbaiknya.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Profil Singkat Sekolah */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Kolom Visual Profil */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 border border-slate-200">
                <Image
                  src="/images/sekolah-hero.jpg"
                  alt="Gerbang Utama SMA Negeri 1 Juwana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#12304A] text-white p-4 rounded-xl shadow-xl border border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4A72C] flex items-center justify-center text-[#12304A] font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="text-xs text-slate-300">Status Akreditasi</p>
                  <p className="text-sm font-bold text-white">BAN-S/M Unggul</p>
                </div>
              </div>
            </div>

            {/* Kolom Narasi Profil Singkat */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#1D4ED8]/10 text-[#1D4ED8]">
                Tentang Institusi
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#12304A]">
                Satu-Satunya SMA Negeri di Juwana, Kabupaten Pati
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Secara geografis letak SMA Negeri 1 Juwana sangat strategis dan mudah dijangkau kendaraan umum yang melintasi jalur Juwana - Tayu. Berlokasi sekitar 1 kilometer dari pusat perekonomian Pasar Juwana, keberadaan sekolah ini memegang peran krusial dalam mencerdaskan putra-putri daerah di wilayah pesisir timur Pati.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dengan kapasitas lebih dari 1.200 siswa dan didukung tenaga pendidik berpengalaman, sekolah terus bertransformasi mengintegrasikan literasi digital, penguatan karakter Profil Pelajar Pancasila, serta keunggulan minat bakat non-akademik.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12304A] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors shadow-xs"
                >
                  <span>Baca Profil Lengkap & Sejarah</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tiga Pilar Unggulan Sekolah */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
              Fokus Pendidikan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mt-1">
              Pilar Pembinaan Generasi Unggul
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Komitmen menyeluruh dalam mengembangkan potensi akademik, karakter moral, dan talenta siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#12304A] text-[#D4A72C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12304A] mb-3">
                Pembelajaran Berkualitas
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Penerapan Kurikulum Merdeka yang fleksibel, berorientasi pada nalar kritis, literasi teknologi, dan penguasaan bahasa asing guna mempersiapkan siswa menuju perguruan tinggi ternama.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12304A] mb-3">
                Penguatan Karakter
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Penanaman nilai-nilai religius, etika kesantunan, kedisiplinan, dan semangat gotong royong melalui pembiasaan harian serta Projek Penguatan Profil Pelajar Pancasila (P5).
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#D4A72C] text-[#12304A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12304A] mb-3">
                Pengembangan Minat & Bakat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wadah ekstrakurikuler yang lengkap mulai dari Pramuka, PMR, IT & Robotika, Seni Musik & Tari, hingga keolahragaan untuk mengasah jiwa kepemimpinan dan kreativitas siswa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Berita & Agenda Terbaru (Minimal 3 Berita) */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
                Kabar Terkini
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mt-1">
                Berita &amp; Agenda Sekolah
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Informasi seputar kegiatan belajar, ekstrakurikuler, dan agenda akademik sekolah.
              </p>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] hover:text-[#12304A] transition-colors group"
            >
              <span>Lihat Semua Berita</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Grid 3 Berita Terbaru */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaTerbaru.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section className="py-16 bg-[#12304A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ingin Mengetahui Lebih Banyak Tentang SMA Negeri 1 Juwana?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pelajari sejarah sekolah, visi misi, sarana prasarana, serta alur pendaftaran siswa baru melalui halaman profil lengkap kami.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg bg-[#D4A72C] hover:bg-[#B88E23] text-[#12304A] font-bold text-sm shadow-md transition-colors"
              >
                Kunjungi Profil Sekolah
              </Link>
              <Link
                href="/berita"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
              >
                Katalog Berita & Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
