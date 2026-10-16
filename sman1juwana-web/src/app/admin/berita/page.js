'use client';

import { useState, useEffect } from 'react';

export default function AdminBeritaPage() {
  const [beritaList, setBeritaList] = useState([]);
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  const [isi, setIsi] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('beritaData')) || [];
    setBeritaList(data);
  }, []);

  const saveToStorage = (newData) => {
    setBeritaList(newData);
    localStorage.setItem('beritaData', JSON.stringify(newData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    if (editId) {
      const updated = beritaList.map((item) =>
        item.id === editId ? { ...item, judul, kategori, isi } : item
      );
      saveToStorage(updated);
      setEditId(null);
    } else {
      const newItem = {
        id: Date.now(),
        judul,
        kategori,
        isi,
        tanggal: tanggalHariIni,
      };
      saveToStorage([...beritaList, newItem]);
    }
    setJudul('');
    setKategori('');
    setIsi('');
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setJudul(item.judul);
    setKategori(item.kategori || '');
    setIsi(item.isi || '');
  };

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      const filtered = beritaList.filter((item) => item.id !== id);
      saveToStorage(filtered);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setJudul('');
    setKategori('');
    setIsi('');
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#12304A]">Kelola Berita & Agenda</h1>
        <p className="text-slate-600 text-sm">Tambah, edit, atau hapus pengumuman dan berita sekolah.</p>
      </div>

      {/* Form Input Berita */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          {editId ? '✏️ Edit Berita' : '➕ Tambah Berita Baru'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Judul Berita / Pengumuman</label>
              <input
                type="text"
                placeholder="Contoh: Penerimaan Peserta Didik Baru (PPDB) 2024"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                required
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Kategori</label>
              <input
                type="text"
                placeholder="Contoh: Pengumuman / Berita Utama / Agenda"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                required
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Isi Ringkasan Berita</label>
            <textarea
              placeholder="Tuliskan ringkasan atau detail informasi berita..."
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              rows={3}
              required
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#12304A] hover:bg-[#1D4ED8] rounded-lg transition-colors"
            >
              {editId ? 'Simpan Perubahan' : 'Tambah Berita'}
            </button>
            {editId && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel Daftar Berita */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-slate-800">Daftar Berita ({beritaList.length})</h2>
        </div>
        {beritaList.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            Belum ada berita yang ditambahkan. Silakan isi form di atas.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">No</th>
                  <th className="px-6 py-3">Judul</th>
                  <th className="px-6 py-3">Kategori</th>
                  <th className="px-6 py-3">Tanggal</th>
                  <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {beritaList.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-500">{index + 1}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{item.judul}</td>
                    <td className="px-6 py-4 text-[#1D4ED8] font-medium">{item.kategori}</td>
                    <td className="px-6 py-4 text-slate-500">{item.tanggal}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 rounded-md transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 rounded-md transition-colors"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}