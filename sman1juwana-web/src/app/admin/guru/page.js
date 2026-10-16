'use client';

import { useState, useEffect } from 'react';

export default function AdminGuruPage() {
  const [guruList, setGuruList] = useState([]);
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('guruData')) || [];
    setGuruList(data);
  }, []);

  const saveToStorage = (newData) => {
    setGuruList(newData);
    localStorage.setItem('guruData', JSON.stringify(newData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updated = guruList.map((item) =>
        item.id === editId ? { ...item, nama, mapel } : item
      );
      saveToStorage(updated);
      setEditId(null);
    } else {
      const newItem = { id: Date.now(), nama, mapel };
      saveToStorage([...guruList, newItem]);
    }
    setNama('');
    setMapel('');
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setNama(item.nama);
    setMapel(item.mapel);
  };

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data guru ini?')) {
      const filtered = guruList.filter((item) => item.id !== id);
      saveToStorage(filtered);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setNama('');
    setMapel('');
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#12304A]">Kelola Data Guru</h1>
        <p className="text-slate-600 text-sm">Tambah, edit, atau hapus data pengajar SMAN 1 Juwana.</p>
      </div>

      {/* Form Input Data Guru */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          {editId ? '✏️ Edit Data Guru' : '➕ Tambah Guru Baru'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
              <input
                type="text"
                placeholder="Contoh: Drs. Bambang Haryono, M.Pd."
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Mata Pelajaran</label>
              <input
                type="text"
                placeholder="Contoh: Fisika / Matematika"
                value={mapel}
                onChange={(e) => setMapel(e.target.value)}
                required
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              />
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#12304A] hover:bg-[#1D4ED8] rounded-lg transition-colors"
            >
              {editId ? 'Simpan Perubahan' : 'Tambah Guru'}
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

      {/* Tabel Daftar Guru */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-slate-800">Daftar Guru Terdaftar ({guruList.length})</h2>
        </div>
        {guruList.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            Belum ada data guru. Silakan isi form di atas untuk menambahkan data baru.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">No</th>
                  <th className="px-6 py-3">Nama Guru</th>
                  <th className="px-6 py-3">Mata Pelajaran</th>
                  <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {guruList.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-500">{index + 1}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{item.nama}</td>
                    <td className="px-6 py-4 text-[#1D4ED8] font-medium">{item.mapel}</td>
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