/**
 * HALAMAN 404 TIDAK DITEMUKAN (NOT FOUND)
 * File: src/app/not-found.js
 * 
 * Fungsi:
 * - Menangani rute yang tidak ditemukan atau pemanggilan notFound() dari rute dinamis /berita/[id].
 * - Memberikan pengalaman pengguna yang profesional, ramah, dan solutif dengan tautan kembali ke Beranda & Berita.
 */

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 text-center shadow-md border border-slate-200">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <Image
            src="/images/logo-sekolah.png"
            alt="Logo SMA Negeri 1 Juwana"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 mb-3">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mb-2">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          Maaf, artikel berita atau halaman yang Anda cari tidak tersedia, telah dipindahkan, atau ID berita tidak valid.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/berita"
            className="px-5 py-2.5 rounded-lg bg-[#12304A] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
          >
            Kembali ke Berita
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
          >
            Menuju Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
