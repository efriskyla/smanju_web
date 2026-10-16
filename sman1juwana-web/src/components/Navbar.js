"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Sembunyikan Navbar publik jika pengguna berada di area admin
  if (pathname.startsWith("/admin")) {
    return null;
  }

  // Daftar menu navigasi utama
  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Sekolah", href: "/about" },
    { label: "Berita & Agenda", href: "/berita" },
    { label: "Guru", href: "/guru" },
    { label: "Prestasi", href: "/prestasi" },
  ];

  // Helper untuk mengecek apakah menu sedang aktif
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Handler untuk aksi pencarian
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Bar Informasi Ringkas */}
      <div className="bg-[#12304A] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#D4A72C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Juwana, Kabupaten Pati, Jawa Tengah
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#D4A72C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@sman1juwana.sch.id
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#1D4ED8]/30 text-blue-200 border border-blue-400/30">
              Proyek UTS Sistem Informasi
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identitas Sekolah */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/images/logo-sekolah.png"
                alt="Logo SMA Negeri 1 Juwana"
                width={48}
                height={48}
                priority
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-[#12304A] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-tight">
                SMA NEGERI 1 JUWANA
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Berkarakter, Berwawasan, Beriman
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Menu Utama">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#12304A] text-white shadow-xs"
                      : "text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Form Search Input (Desktop) */}
            <form onSubmit={handleSearch} className="relative ml-2">
              <input
                type="text"
                placeholder="Cari..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-32 focus:w-48 transition-all duration-300 pl-3 pr-8 py-1.5 text-xs rounded-full border border-slate-300 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] bg-slate-50"
              />
              <button
                type="submit"
                aria-label="Cari"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1D4ED8]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Tombol Aksi Cepat Profil Sekolah */}
            <Link
              href="/about"
              className="ml-2 inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#D4A72C] text-[#12304A] hover:bg-[#B88E23] hover:text-white transition-all shadow-xs"
            >
              Profil Sekolah
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Buka menu navigasi"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-700 hover:text-[#12304A] hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
          {/* Form Search Input (Mobile) */}
          <form onSubmit={handleSearch} className="px-4 pt-3 pb-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari informasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1D4ED8] bg-slate-50"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          <div className="px-4 pt-2 pb-5 space-y-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "bg-[#12304A] text-white font-semibold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#1D4ED8]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#D4A72C] text-[#12304A] hover:bg-[#B88E23] hover:text-white transition-colors"
              >
                Lihat Profil Lengkap
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}