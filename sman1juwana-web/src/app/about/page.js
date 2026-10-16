/**
 * HALAMAN TENTANG SEKOLAH (ABOUT)
 * URL: /about
 * File: src/app/about/page.js
 * 
 * Fungsi:
 * - Menampilkan profil komprehensif SMA Negeri 1 Juwana.
 * - Berisi identitas resmi, sejarah singkat, visi, misi, tujuan pendidikan,
 *   daftar fasilitas, kegiatan ekstrakurikuler, serta informasi kontak terverifikasi.
 * - Berdasarkan data situs resmi (sman1juwana.sch.id) dan menandai data yang
 *   perlu diverifikasi mahasiswa secara transparan.
 */

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Sekolah | Profil, Visi, Misi & Fasilitas",
  description:
    "Profil lengkap SMA Negeri 1 Juwana, Kabupaten Pati: Sejarah singkat, Visi dan Misi resmi, Tujuan pendidikan, Fasilitas, dan Ekstrakurikuler.",
};

export default function AboutPage() {
  const daftarMisi = [
    "Menciptakan proses belajar yang tertib, efektif, produktif, dan dinamis;",
    "Membentuk alumnus yang mampu bersaing untuk melanjutkan ke jenjang pendidikan yang lebih tinggi dan menguasai bahasa asing;",
    "Menghasilkan insan yang berbudaya Indonesia, beriman, dan bertaqwa yang taat menjalankan syariat agamanya masing-masing.",
  ];

  const tujuanSekolah = [
    "Mempersiapkan setiap lulusan SMA Negeri 1 Juwana agar mampu diterima di Perguruan Tinggi Negeri (PTN) maupun PTS berkualitas.",
    "Menyiapkan siswa untuk dapat bekerja dan berwirausaha sesuai dengan minat, bakat, dan keterampilan abad ke-21.",
    "Menyiapkan siswa untuk memahami serta mengamalkan ajaran agama dan nilai-nilai luhur Pancasila dalam kehidupan bermasyarakat.",
    "Membekali siswa dengan penguasaan Teknologi Informasi dan Komunikasi (TIK) serta keterampilan bahasa asing (Inggris, Perancis, dan Jepang).",
    "Menyelenggarakan tata kelola pendidikan yang berorientasi pada peningkatan mutu berbasis sekolah (MPMBS) secara berkelanjutan.",
  ];

  const fasilitasSekolah = [
    { nama: "Laboratorium Komputer & TIK", deskripsi: "Dilengkapi perangkat PC modern dan jaringan internet cepat untuk pembelajaran digital dan ASAT." },
    { nama: "Laboratorium Sains Terpadu", deskripsi: "Fasilitas praktikum Fisika, Kimia, dan Biologi dengan instrumen dan bahan peraga lengkap." },
    { nama: "Perpustakaan Sekolah", deskripsi: "Koleksi ribuan buku pelajaran, referensi ilmiah, karya sastra, serta ruang baca yang nyaman." },
    { nama: "Sarana Olahraga Serbaguna", deskripsi: "Lapangan bola basket, bola voli, bulu tangkis, dan area atletik untuk kebugaran siswa." },
    { nama: "Masjid & Tempat Ibadah", deskripsi: "Pusat kegiatan keagamaan, sholat berjamaah, dan pembinaan karakter rohani siswa." },
    { nama: "Aula & Ruang Pertemuan", deskripsi: "Ruang serbaguna untuk seminar, rapat komite, pentas seni, dan perayaan karya siswa." },
  ];

  const ekstrakurikuler = [
    { nama: "Pramuka Penegak", kategori: "Wajib / Kepanduan" },
    { nama: "Palang Merah Remaja (PMR)", kategori: "Kemanusiaan" },
    { nama: "English Club", kategori: "Bahasa & Literasi" },
    { nama: "Information Technology & Coding", kategori: "Sains & TIK" },
    { nama: "Seni Tari Tradisional & Kreasi", kategori: "Seni Budaya" },
    { nama: "Seni Musik & Paduan Suara", kategori: "Seni Musik" },
    { nama: "Bola Voli", kategori: "Olahraga" },
    { nama: "Bola Basket", kategori: "Olahraga" },
    { nama: "Taekwondo / Beladiri", kategori: "Bela Diri" },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner Halaman */}
      <section className="bg-[#12304A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A72C] text-xs font-semibold mb-4 border border-white/20">
              Profil SMA Negeri 1 Juwana
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Mengenal SMA Negeri 1 Juwana
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Mewujudkan lingkungan akademik yang inklusif, membina keunggulan budi pekerti, dan mempersiapkan putra-putri Juwana menuju gerbang masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Profil Umum & Sejarah Singkat */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Kolom Kiri: Teks Narasi */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
                  Identitas &amp; Kedudukan
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#12304A] mt-1">
                  Sejarah &amp; Peran Strategis di Juwana
                </h2>
                <div className="w-16 h-1 bg-[#D4A72C] mt-2 rounded-full" />
              </div>

              <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Secara geografis, letak SMA Negeri 1 Juwana sangat strategis karena berada di jalur utama yang mudah dijangkau angkutan umum ke arah Tayu maupun pusat kota Pati. Terletak sekitar 1 kilometer dari Pasar Juwana, sekolah ini menjadi sentra pendidikan menengah atas favorit masyarakat di kawasan pesisir.
                </p>
                <p>
                  Sebagai <strong>satu-satunya SMA Negeri di Kecamatan Juwana</strong>, sekolah ini memegang tanggung jawab besar dan kontribusi nyata dalam melahirkan generasi penerus yang berpendidikan tinggi, cerdas, dan siap bersaing di kancah nasional.
                </p>
                <p>
                  Saat ini, SMA Negeri 1 Juwana mendidik lebih dari <strong>1.200 siswa</strong> aktif dengan dukungan fasilitas ruang belajar memadai, tenaga pendidik bersertifikasi, serta ekosistem sekolah yang asri dan kondusif.
                </p>
              </div>

              {/* Kotak Catatan Verifikasi Data Akademik */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="space-y-1">
                  <span className="font-semibold block text-amber-950">Catatan Validasi Data Mahasiswa:</span>
                  <p>
                    Data SK Pendirian resmi, tahun pasti peresmian gedung pertama, serta riwayat nama kepala sekolah dapat dilengkapi lebih lanjut melalui buku kenangan sekolah atau data verifikasi Dapodik Kemendikbud:
                    <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded ml-1 border border-amber-300">
                      [Perlu Dilengkapi / Data Verifikasi Dapodik]
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Tabel Data Identitas Sekolah */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#12304A] mb-4 pb-3 border-b border-slate-200">
                Informasi Pokok Sekolah
              </h3>
              <dl className="divide-y divide-slate-200/80 text-sm">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Nama Sekolah</dt>
                  <dd className="font-semibold text-slate-900 text-right">SMA Negeri 1 Juwana</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Bentuk Pendidikan</dt>
                  <dd className="font-semibold text-slate-900 text-right">SMA (Negeri)</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Status Akreditasi</dt>
                  <dd className="font-bold text-[#1D4ED8] text-right">A (Unggul)</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Jumlah Siswa</dt>
                  <dd className="font-semibold text-slate-900 text-right">&plusmn; 1.297 Siswa</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kurikulum</dt>
                  <dd className="font-semibold text-slate-900 text-right">Kurikulum Merdeka</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kecamatan</dt>
                  <dd className="font-semibold text-slate-900 text-right">Juwana</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kabupaten</dt>
                  <dd className="font-semibold text-slate-900 text-right">Pati, Jawa Tengah</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi Sekolah */}
      <section id="visi-misi" className="py-20 bg-[#F8FAFC] border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
              Landasan Filosofis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mt-1">
              Visi &amp; Misi Pendidikan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Prinsip arah pembinaan resmi SMA Negeri 1 Juwana dalam membentuk lulusan unggul.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Kartu Visi */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#12304A] to-[#1A4469] text-white p-8 sm:p-10 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#D4A72C] text-[#12304A] text-xs font-bold uppercase tracking-wider mb-6">
                  Visi Sekolah
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed text-slate-100">
                  &ldquo;Terwujudnya insan yang beriman, bertaqwa, berakhlak mulia, berwawasan global, dan berprestasi tinggi.&rdquo;
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs text-slate-300">
                  Motto Resmi: <span className="font-semibold text-[#D4A72C]">Berkarakter, Berwawasan, Beriman</span>
                </p>
              </div>
            </div>

            {/* Kartu Misi */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider mb-6">
                  Misi Sekolah
                </div>
                <ol className="space-y-4">
                  {daftarMisi.map((misi, index) => (
                    <li key={index} className="flex items-start gap-4 text-slate-700">
                      <span className="w-8 h-8 rounded-lg bg-[#12304A] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm sm:text-base leading-relaxed pt-0.5">
                        {misi}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                * Sumber: Dokumen Kurikulum Operasional &amp; Profil Situs Resmi SMAN 1 Juwana
              </div>
            </div>
          </div>

          {/* Section Tujuan Sekolah */}
          <div className="mt-12 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-[#12304A] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#D4A72C] rounded-full inline-block" />
              Tujuan Penyelenggaraan Pendidikan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tujuanSekolah.map((tujuan, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                  <svg className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-slate-700 leading-relaxed">{tujuan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fasilitas & Sarana Prasarana */}
      <section id="fasilitas" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
              Lingkungan Belajar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mt-1">
              Fasilitas &amp; Sarana Prasarana
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Infrastruktur lengkap untuk menunjang kegiatan belajar mengajar teoritis maupun praktikum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fasilitasSekolah.map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:border-[#1D4ED8]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#12304A] text-[#D4A72C] flex items-center justify-center font-bold text-sm mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-base font-bold text-[#12304A] mb-2">{item.nama}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ekstrakurikuler Siswa */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1D4ED8]">
              Pengembangan Diri
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] mt-1">
              Ekstrakurikuler Pilihan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Wadah apresiasi bakat, kepemimpinan, seni, olahraga, dan keterampilan vokasi siswa SMAN 1 Juwana.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {ekstrakurikuler.map((ekskul, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#12304A]">{ekskul.nama}</h4>
                  <span className="text-xs text-slate-500">{ekskul.kategori}</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lokasi & Peta Alamat */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12304A] text-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#D4A72C]">
                  Aksesibilitas
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Lokasi Kampus SMA Negeri 1 Juwana
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Jl. Ki Hajar Dewantara No. 54, Juwana, Kabupaten Pati, Jawa Tengah 59185. Berada di lingkungan yang tenang namun memiliki aksesibilitas prima untuk mobilisasi siswa.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <svg className="w-4 h-4 text-[#D4A72C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(0295) 471339</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <svg className="w-4 h-4 text-[#D4A72C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@sman1juwana.sch.id</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-4">
                <h4 className="font-bold text-white text-base">Panduan Menuju Lokasi</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A72C] font-bold">&bull;</span>
                    <span>Dari arah Semarang/Pati Kota: Ikuti jalan Pantura menuju timur, belok ke arah jalan Ki Hajar Dewantara Juwana.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A72C] font-bold">&bull;</span>
                    <span>Dari Pasar Juwana: Hanya berjarak sekitar 1 km ke arah utara menuju jalur arah Tayu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A72C] font-bold">&bull;</span>
                    <span>Transportasi: Angkutan umum jurusan Juwana - Tayu melewati persimpangan utama sekolah.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A72C] hover:text-white transition-colors"
                  >
                    <span>&larr; Kembali ke Halaman Beranda</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
