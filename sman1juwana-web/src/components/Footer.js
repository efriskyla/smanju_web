/**
 * KOMPONEN FOOTER BERSAMA
 * File: src/components/Footer.js
 * 
 * Fungsi:
 * - Menampilkan informasi legal, kontak resmi, alamat, jam operasional,
 *   dan navigasi pelengkap di bagian bawah seluruh halaman.
 * - Menggunakan Server Component (tanpa 'use client') karena sifatnya statis.
 */

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#12304A] text-slate-300 mt-auto border-t border-slate-800">
      {/* Bagian Utama Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Kolom 1: Identitas & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white/10 p-1 rounded-lg backdrop-blur-xs">
                <Image
                  src="/images/logo-sekolah.png"
                  alt="Logo SMA Negeri 1 Juwana"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base tracking-tight">
                  SMAN 1 JUWANA
                </h3>
                <p className="text-xs text-[#D4A72C] font-medium">
                  Berkarakter, Berwawasan, Beriman
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lembaga pendidikan menengah atas negeri unggulan di Kecamatan Juwana, Kabupaten Pati, yang berdedikasi membina generasi muda yang berakhlak mulia, berwawasan global, dan berprestasi tinggi.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#D4A72C]/15 text-[#D4A72C] border border-[#D4A72C]/30">
                Terakreditasi A
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Jelajahi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4A72C] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A72C]">&rsaquo;</span> Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A72C] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A72C]">&rsaquo;</span> Profil & Sejarah Singkat
                </Link>
              </li>
              <li>
                <Link href="/about#visi-misi" className="hover:text-[#D4A72C] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A72C]">&rsaquo;</span> Visi & Misi Sekolah
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-[#D4A72C] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A72C]">&rsaquo;</span> Berita & Agenda Terbaru
                </Link>
              </li>
              <li>
                <Link href="/about#fasilitas" className="hover:text-[#D4A72C] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A72C]">&rsaquo;</span> Fasilitas & Ekstrakurikuler
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat Resmi */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Kontak & Lokasi
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#D4A72C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Ki Hajar Dewantara No. 54, Juwana, Kab. Pati, Jawa Tengah 59185</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#D4A72C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(0295) 471339</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#D4A72C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sman1juwana.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Jam Layanan & Catatan Akademik */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Layanan Administrasi
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex justify-between">
                <span>Senin - Kamis:</span>
                <span className="text-white font-medium">07.00 - 15.30 WIB</span>
              </p>
              <p className="flex justify-between">
                <span>Jumat:</span>
                <span className="text-white font-medium">07.00 - 11.30 WIB</span>
              </p>
              <p className="flex justify-between">
                <span>Sabtu - Minggu:</span>
                <span className="text-slate-500">Libur Operasional</span>
              </p>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <p className="font-semibold text-[#D4A72C] mb-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Catatan Proyek Akademik
              </p>
              <p className="leading-relaxed">
                Website ini adalah karya tugas Ujian Tengah Semester (UTS) mahasiswa Sistem Informasi, menyajikan profil sekolah SMA Negeri 1 Juwana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Baris Bawah / Copyright */}
      <div className="bg-[#0A1C2C] py-4 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>
            &copy; {currentYear} SMA Negeri 1 Juwana. Dikembangkan untuk Proyek Akademik UTS Sistem Informasi.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 transition-colors">Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
