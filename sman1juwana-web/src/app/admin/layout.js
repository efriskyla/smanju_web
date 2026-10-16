'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  if (!authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <p className="text-slate-600 font-medium">Memeriksa hak akses...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation Admin */}
      <aside className="w-64 bg-[#12304A] text-white p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="pb-6 mb-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-[#D4A72C]">Panel Admin</h2>
            <p className="text-xs text-slate-400 mt-1">SMAN 1 Juwana</p>
          </div>

          <nav className="space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              🏠 Dashboard
            </Link>
            <Link
              href="/admin/berita"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              📰 Kelola Berita
            </Link>
            <Link
              href="/admin/guru"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              👨‍🏫 Kelola Guru
            </Link>
            <Link
              href="/admin/ekstrakurikuler"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              ⚽ Kelola Ekstra
            </Link>
            <Link
              href="/admin/prestasi"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              🏆 Kelola Prestasi
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors mt-8"
        >
          Logout
        </button>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}