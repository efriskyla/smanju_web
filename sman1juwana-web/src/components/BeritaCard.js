/**
 * KOMPONEN REUSABLE: BERITA CARD
 * File: src/components/BeritaCard.js
 * 
 * Fungsi:
 * - Menampilkan kartu pratinjau berita di Beranda dan Halaman Daftar Berita.
 * - Menerima properti: berita (objek berisi id, judul, tanggal, kategori, ringkasan, gambar)
 * - Menggunakan next/link pada kartu dan tombol 'Baca Selengkapnya' yang mengarahkan
 *   secara presisi ke rute dinamis /berita/[id].
 */

import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ berita }) {
  if (!berita) return null;

  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Gambar Thumbnail */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Kategori Badge */}
        {berita.kategori && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-md bg-[#12304A]/90 text-white backdrop-blur-xs shadow-xs">
            {berita.kategori}
          </span>
        )}
      </div>

      {/* Konten Berita */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Tanggal Rilis */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2.5">
          <svg className="w-3.5 h-3.5 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={berita.tanggal}>{berita.tanggal}</time>
        </div>

        {/* Judul Berita */}
        <h3 className="text-lg font-bold text-[#12304A] group-hover:text-[#1D4ED8] transition-colors line-clamp-2 leading-snug mb-3">
          <Link href={`/berita/${berita.id}`} className="focus:outline-hidden">
            {berita.judul}
          </Link>
        </h3>

        {/* Ringkasan */}
        <p className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed flex-grow">
          {berita.ringkasan}
        </p>

        {/* Tombol Baca Selengkapnya */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <Link
            href={`/berita/${berita.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] hover:text-[#12304A] transition-colors group/btn"
          >
            <span>Baca Selengkapnya</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
