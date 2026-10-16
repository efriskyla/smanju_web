/**
 * KOMPONEN REUSABLE: HERO SECTION
 * File: src/components/Hero.js
 * 
 * Fungsi:
 * - Menampilkan bagian pembuka visual yang memikat di Halaman Utama (Beranda).
 * - Menampilkan latar belakang foto kampus sekolah dengan overlay gradien kontras tinggi
 *   sehingga teks tetap mudah dibaca dalam segala resolusi layar.
 * - Dilengkapi tombol Call-to-Action (CTA) navigasi ke Tentang Sekolah dan Berita.
 */

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#12304A] text-white overflow-hidden">
      {/* Background Image dengan Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sekolah-hero.jpg"
          alt="Gerbang Utama SMA Negeri 1 Juwana"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layer Gradient Overlay untuk Menjamin Keterbacaan Teks dan Menampilkan Gerbang */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12304A]/95 via-[#12304A]/75 to-[#12304A]/25" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Badge Tagline Resmi */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4A72C] text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4A72C] animate-pulse" />
            <span>Motto: Berkarakter, Berwawasan, Beriman</span>
          </div>

          {/* Heading Utama */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 text-balance">
            Selamat Datang di <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              SMA Negeri 1 Juwana
            </span>
          </h1>

          {/* Deskripsi Inspiratif */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
            Lembaga pendidikan unggulan di Kabupaten Pati yang berdedikasi membentuk generasi muda yang mandiri, berintegritas tinggi, dan siap melangkah menghadapi tantangan masa depan global.
          </p>

          {/* Tombol Aksi (CTA) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#D4A72C] hover:bg-[#B88E23] text-[#12304A] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Tentang Sekolah</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/berita"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-base backdrop-blur-md border border-white/30 transition-all duration-200"
            >
              <span>Jelajahi Berita</span>
            </Link>
          </div>

          {/* Catatan Info Singkat di Bawah CTA */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">Akreditasi A</div>
              <div className="text-xs text-slate-300">Kualitas Teruji</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">1.200+</div>
              <div className="text-xs text-slate-300">Siswa Aktif</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-white">Juwana, Pati</div>
              <div className="text-xs text-slate-300">Lokasi Strategis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
