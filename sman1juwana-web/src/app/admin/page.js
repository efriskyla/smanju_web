'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [stats, setStats] = useState({
    berita: 0,
    guru: 0,
    ekstra: 0,
    prestasi: 0,
  });

  useEffect(() => {
    // Mengambil ringkasan jumlah data dari localStorage
    const beritaData = JSON.parse(localStorage.getItem('beritaData')) || [];
    const guruData = JSON.parse(localStorage.getItem('guruData')) || [];
    const ekstraData = JSON.parse(localStorage.getItem('ekstraData')) || [];
    const prestasiData = JSON.parse(localStorage.getItem('prestasiData')) || [];

    setStats({
      berita: beritaData.length,
      guru: guruData.length,
      ekstra: ekstraData.length,
      prestasi: prestasiData.length,
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#12304A] mb-2">
        Selamat Datang di Dashboard Admin
      </h1>
      <p className="text-slate-600 mb-8">
        Silakan pilih menu di sidebar kiri atau klik kartu di bawah untuk mengelola data website.
      </p>

      {/* Kartu Ringkasan Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          href="/admin/berita"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all block"
        >
          <span className="text-3xl">📰</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">Berita & Agenda</h3>
          <p className="text-2xl font-bold text-[#1D4ED8] mt-1">{stats.berita} Data</p>
        </Link>

        <Link
          href="/admin/guru"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all block"
        >
          <span className="text-3xl">👨‍🏫</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">Data Guru</h3>
          <p className="text-2xl font-bold text-[#1D4ED8] mt-1">{stats.guru} Data</p>
        </Link>

        <Link
          href="/admin/ekstrakurikuler"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all block"
        >
          <span className="text-3xl">⚽</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">Ekstrakurikuler</h3>
          <p className="text-2xl font-bold text-[#1D4ED8] mt-1">{stats.ekstra} Data</p>
        </Link>

        <Link
          href="/admin/prestasi"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all block"
        >
          <span className="text-3xl">🏆</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">Prestasi</h3>
          <p className="text-2xl font-bold text-[#1D4ED8] mt-1">{stats.prestasi} Data</p>
        </Link>
      </div>
    </div>
  );
}