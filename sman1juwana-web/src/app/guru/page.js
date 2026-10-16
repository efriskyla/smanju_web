'use client';
import { useState, useEffect } from 'react';

export default function GuruPage() {
  const [guruList, setGuruList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('guruData')) || [];
    setGuruList(data);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-[#12304A]">Daftar Guru & Staf Pengajar</h1>
        <p className="text-slate-600 mt-2">Tenaga pendidik SMA Negeri 1 Juwana.</p>
      </div>

      {guruList.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
          Belum ada data guru yang ditambahkan. Silakan tambah data melalui Dashboard Admin (`/admin/guru`).
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guruList.map((guru) => (
            <div key={guru.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#12304A] text-[#D4A72C] flex items-center justify-center font-bold text-lg">
                  {guru.nama ? guru.nama.charAt(0) : 'G'}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{guru.nama}</h3>
                  <p className="text-sm text-[#1D4ED8] font-medium">{guru.mapel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}