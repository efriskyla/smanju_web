'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState({
    berita: [],
    guru: [],
    ekstra: [],
    prestasi: [],
  });

  useEffect(() => {
    if (!query.trim()) return;

    const q = query.toLowerCase();

    // Mengambil data dari localStorage
    const beritaData = JSON.parse(localStorage.getItem('beritaData')) || [];
    const guruData = JSON.parse(localStorage.getItem('guruData')) || [];
    const ekstraData = JSON.parse(localStorage.getItem('ekstraData')) || [];
    const prestasiData = JSON.parse(localStorage.getItem('prestasiData')) || [];

    // Filter pencarian berdasarkan kata kunci
    const filteredGuru = guruData.filter(
      (item) =>
        item.nama?.toLowerCase().includes(q) ||
        item.mapel?.toLowerCase().includes(q)
    );

    const filteredBerita = beritaData.filter(
      (item) =>
        item.judul?.toLowerCase().includes(q) ||
        item.isi?.toLowerCase().includes(q) ||
        item.kategori?.toLowerCase().includes(q)
    );

    const filteredEkstra = ekstraData.filter(
      (item) =>
        item.nama?.toLowerCase().includes(q) ||
        item.pembina?.toLowerCase().includes(q)
    );

    const filteredPrestasi = prestasiData.filter(
      (item) =>
        item.judul?.toLowerCase().includes(q) ||
        item.tahun?.toLowerCase().includes(q) ||
        item.deskripsi?.toLowerCase().includes(q)
    );

    setResults({
      guru: filteredGuru,
      berita: filteredBerita,
      ekstra: filteredEkstra,
      prestasi: filteredPrestasi,
    });
  }, [query]);

  const totalResults =
    results.guru.length +
    results.berita.length +
    results.ekstra.length +
    results.prestasi.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-[#12304A]">Hasil Pencarian</h1>
        <p className="text-slate-600 mt-2">
          Menampilkan hasil untuk kata kunci:{' '}
          <span className="font-semibold text-[#1D4ED8]">"{query}"</span>
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
          Tidak ditemukan hasil yang cocok dengan kata kunci{' '}
          <span className="font-semibold">"{query}"</span>. Silakan coba kata kunci lain.
        </div>
      ) : (
        <div className="space-y-8">
          {/* Hasil Pencarian Guru */}
          {results.guru.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#12304A] mb-4">
                👨‍🏫 Data Guru ({results.guru.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.guru.map((guru) => (
                  <div
                    key={guru.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
                  >
                    <h3 className="font-bold text-slate-800">{guru.nama}</h3>
                    <p className="text-sm text-[#1D4ED8] font-medium">{guru.mapel}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hasil Pencarian Berita */}
          {results.berita.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#12304A] mb-4">
                📰 Berita & Agenda ({results.berita.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.berita.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
                  >
                    <span className="text-xs font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.kategori}
                    </span>
                    <h3 className="font-bold text-slate-800 mt-2">{item.judul}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.isi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hasil Pencarian Ekstrakurikuler */}
          {results.ekstra.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#12304A] mb-4">
                ⚽ Ekstrakurikuler ({results.ekstra.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.ekstra.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
                  >
                    <h3 className="font-bold text-slate-800">{item.nama}</h3>
                    <p className="text-sm text-slate-600 mt-1">Pembina: {item.pembina}</p>
                    <p className="text-xs text-[#1D4ED8] mt-1">Jadwal: {item.jadwal}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hasil Pencarian Prestasi */}
          {results.prestasi.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#12304A] mb-4">
                🏆 Prestasi ({results.prestasi.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.prestasi.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
                  >
                    <h3 className="font-bold text-slate-800">{item.judul}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {item.deskripsi || item.tahun}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-slate-500">Memuat hasil pencarian...</div>}>
      <SearchContent />
    </Suspense>
  );
}