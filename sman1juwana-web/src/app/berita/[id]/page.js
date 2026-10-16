/**
 * HALAMAN DETAIL BERITA (DYNAMIC ROUTE APP ROUTER)
 * URL: /berita/[id] (Contoh: /berita/1, /berita/2, dst)
 * File: src/app/berita/[id]/page.js
 * 
 * Fungsi:
 * - Membaca parameter dinamis `id` dari URL.
 * - Menggunakan pola async/await pada `params` sesuai standar Next.js 15+ & 16+.
 * - Mengambil berita dari static data src/data/berita.js menggunakan helper getBeritaById.
 * - Memanggil `notFound()` dari next/navigation jika ID berita tidak ditemukan (memicu halaman 404).
 * - Menampilkan judul, tanggal, penulis, gambar utama, isi artikel lengkap, dan tombol kembali.
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBeritaById, daftarBerita } from "@/data/berita";

/**
 * Metadata dinamis untuk SEO sesuai judul berita
 */
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const berita = getBeritaById(resolvedParams.id);

  if (!berita) {
    return {
      title: "Berita Tidak Ditemukan",
      description: "Artikel yang dicari tidak tersedia di sistem profil sekolah.",
    };
  }

  return {
    title: `${berita.judul} | SMAN 1 Juwana`,
    description: berita.ringkasan,
  };
}

/**
 * Pre-generate rute statis untuk semua id berita pada saat build time
 */
export function generateStaticParams() {
  return daftarBerita.map((item) => ({
    id: item.id,
  }));
}

export default async function DetailBeritaPage({ params }) {
  // Await params sesuai standar Next.js 15 & 16 App Router
  const resolvedParams = await params;
  const berita = getBeritaById(resolvedParams.id);

  // Jika ID tidak ditemukan, tampilkan halaman 404 resmi Next.js
  if (!berita) {
    notFound();
  }

  // Mengambil rekomendasi artikel lain (selain berita yang sedang dibaca)
  const beritaLainnya = daftarBerita
    .filter((item) => item.id !== berita.id)
    .slice(0, 3);

  return (
    <article className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* 1. Header Banner & Breadcrumb */}
      <div className="bg-[#12304A] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/berita" className="hover:text-white transition-colors">
              Berita
            </Link>
            <span>/</span>
            <span className="text-[#D4A72C] font-medium truncate max-w-[200px] sm:max-w-xs">
              {berita.judul}
            </span>
          </nav>

          {/* Kategori Badge & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A72C] text-[#12304A]">
              {berita.kategori}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {berita.tanggal}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {berita.penulis}
            </span>
          </div>

          {/* Judul Berita Utama */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {berita.judul}
          </h1>
        </div>
      </div>

      {/* 2. Badan Artikel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-slate-200">
          {/* Gambar Utama Artikel */}
          <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden mb-8 bg-slate-100 shadow-xs">
            <Image
              src={berita.gambar}
              alt={berita.judul}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Paragraf Isi Berita Lengkap */}
          <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed border-b border-slate-200 pb-10">
            {berita.isiLengkap.map((paragraf, index) => (
              <p key={index} className="leading-relaxed">
                {paragraf}
              </p>
            ))}
          </div>

          {/* Tombol Kembali ke Daftar Berita */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#12304A] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors shadow-xs group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Kembali ke Berita</span>
            </Link>

            <span className="text-xs text-slate-400">
              ID Berita: #{berita.id} &bull; SMA Negeri 1 Juwana
            </span>
          </div>
        </div>

        {/* 3. Rekomendasi Berita Lainnya */}
        {beritaLainnya.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#12304A]">
                Warta &amp; Berita Terkait Lainnya
              </h3>
              <Link href="/berita" className="text-xs font-semibold text-[#1D4ED8] hover:underline">
                Lihat Semua &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beritaLainnya.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs hover:shadow-sm transition-shadow">
                  <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-3 bg-slate-100">
                    <Image
                      src={item.gambar}
                      alt={item.judul}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1D4ED8] block mb-1">
                    {item.tanggal}
                  </span>
                  <h4 className="font-bold text-sm text-[#12304A] line-clamp-2 hover:text-[#1D4ED8] transition-colors mb-2">
                    <Link href={`/berita/${item.id}`}>
                      {item.judul}
                    </Link>
                  </h4>
                  <Link
                    href={`/berita/${item.id}`}
                    className="text-xs font-semibold text-[#D4A72C] hover:text-[#B88E23]"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
