'use client';

import { useState, useEffect } from 'react';

export default function PrestasiPublicPage() {
  const [prestasiList, setPrestasiList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('prestasiData')) || [];
    setPrestasiList(data);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-[#12304A]">Prestasi Siswa & Sekolah</h1>
        <p className="text-slate-600 mt-2">Daftar pencapaian dan penghargaan SMA Negeri 1 Juwana.</p>
      </div>

      {prestasiList.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
          Belum ada data prestasi yang ditambahkan. Silakan tambah data melalui Dashboard Admin (`/admin/prestasi`).
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestasiList.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A72C]/20 text-[#12304A] flex items-center justify-center font-bold text-2xl shrink-0">
                  🏆
                </div>
                <div>
                  {item.tahun && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1D4ED8]/10 text-[#1D4ED8] mb-2">
                      {item.tahun}
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-slate-800 leading-snug">{item.judul}</h3>
                  {item.deskripsi && (
                    <p className="text-sm text-slate-600 mt-2">{item.deskripsi}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}