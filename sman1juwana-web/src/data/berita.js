/**
 * DATA BERITA SMA NEGERI 1 JUWANA
 * File: src/data/berita.js
 * 
 * Fungsi:
 * Menyimpan data statis 3 berita unggulan sekolah yang digunakan bersama di:
 * 1. Halaman Beranda (Home /) - Menampilkan 3 berita
 * 2. Halaman Daftar Berita (/berita) - Menampilkan 3 berita
 * 3. Halaman Detail Berita (/berita/[id]) - Menampilkan berita lengkap berdasarkan ID (1, 2, atau 3)
 */

export const daftarBerita = [
  {
    id: "1",
    judul: "Pelatihan Coding dan Arduino oleh Balai Latihan Kerja di SMA N 1 Juwana",
    tanggal: "19 Mei 2025",
    kategori: "Teknologi & Vokasi",
    penulis: "Tim Humas SMAN 1 Juwana",
    ringkasan: "Siswa SMAN 1 Juwana antusias mengikuti pelatihan pemrograman Arduino dan dasar robotika bersama instruktur Balai Latihan Kerja.",
    gambar: "/images/berita/berita-1.jpg",
    isiLengkap: [
      "SMA Negeri 1 Juwana menyelenggarakan kegiatan pelatihan coding dan perakitan sistem mikrokontroler Arduino bekerja sama dengan Balai Latihan Kerja (BLK). Kegiatan ini bertujuan untuk mengenalkan dasar-dasar otomatisasi industri dan literasi kecerdasan buatan sejak jenjang menengah atas.",
      "Pelatihan diikuti oleh siswa peminatan sains dan teknologi serta anggota ekstrakurikuler Information and Technology (IT). Selama sesi praktikum, peserta belajar membuat sirkuit sensor cahaya otomatis, sensor jarak ultrasonik, serta pengontrol lampu LED berbasis pemrograman C++ sederhana.",
      "Kegiatan ini mencerminkan komitmen SMA Negeri 1 Juwana dalam membekali lulusan dengan keterampilan digital abad ke-21 agar siap bersaing di perguruan tinggi negeri maupun dunia wirausaha berbasis teknologi.",
      "Keterangan Catatan: Kegiatan ini diadopsi dari agenda penguatan keterampilan vokasional siswa SMA Negeri 1 Juwana."
    ]
  },
  {
    id: "2",
    judul: "Informasi dan Sosialisasi SPMB SMA Negeri 1 Juwana Tahun Ajaran 2026/2027",
    tanggal: "3 Juni 2026",
    kategori: "Akademik & PPDB",
    penulis: "Panitia SPMB SMAN 1 Juwana",
    ringkasan: "Informasi resmi alur pendaftaran, jalur afirmasi, zonasi, prestasi, dan perpindahan tugas orang tua untuk calon peserta didik baru.",
    gambar: "/images/berita/berita-2.jpg",
    isiLengkap: [
      "Menjelang tahun ajaran baru 2026/2027, SMA Negeri 1 Juwana merilis panduan resmi Sistem Penerimaan Murid Baru (SPMB). Pendaftaran dilaksanakan secara daring melalui portal resmi SPMB Dinas Pendidikan Provinsi Jawa Tengah.",
      "Tersedia empat jalur seleksi utama yang dapat ditempuh oleh calon peserta didik, yaitu: Jalur Zonasi (wilayah kecamatan Juwana dan sekitarnya), Jalur Afirmasi bagi keluarga prasejahtera, Jalur Prestasi akademik maupun nonakademik, serta Jalur Perpindahan Tugas Orang Tua.",
      "Pihak sekolah mengimbau para orang tua dan calon siswa untuk mempersiapkan dokumen verifikasi seperti kartu keluarga, rapor semester 1-5, dan piagam kejuaraan yang telah dilegalisasi sebelum jadwal pembukaan pendaftaran dibuka.",
      "Keterangan Catatan: Informasi alur seleksi disesuaikan dengan petunjuk teknis penerimaan peserta didik baru wilayah Jawa Tengah."
    ]
  },
  {
    id: "3",
    judul: "Gelar Karya P5: Mengangkat Potensi Maritim dan Batik Bakaran Khas Juwana",
    tanggal: "12 September 2025",
    kategori: "Kreativitas & P5",
    penulis: "Koordinator Kurikulum Merdeka",
    ringkasan: "Siswa kelas X dan XI menampilkan inovasi olahan hasil laut dan pameran motif batik Bakaran dalam puncak perayaan Projek Penguatan Profil Pelajar Pancasila.",
    gambar: "/images/berita/berita-3.jpg",
    isiLengkap: [
      "Sebagai bagian dari implementasi Kurikulum Merdeka, SMA Negeri 1 Juwana menggelar pameran puncak Projek Penguatan Profil Pelajar Pancasila (P5) dengan tema 'Kearifan Lokal dan Kewirausahaan'.",
      "Kecamatan Juwana yang terkenal sebagai kota bandar, sentra kerajinan logam kuningan, dan batik tulis Bakaran menjadi inspirasi utama karya siswa. Berbagai stan pameran menyajikan kain batik kreasi siswa, miniatur kerajinan logam, serta olahan inovatif berbasis ikan bandeng dan garam Juwana.",
      "Melalui kegiatan ini, siswa tidak hanya belajar bergotong royong dan berpikir kritis, namun juga menumbuhkan rasa cinta terhadap warisan budaya lokal Kabupaten Pati serta menumbuhkan jiwa mandiri berwirausaha sejak dini.",
      "*(Konten demonstrasi edukatif untuk simulasi kegiatan pembelajaran kontekstual siswa SMAN 1 Juwana)*"
    ]
  }
];

/**
 * Fungsi pembantu untuk mengambil 3 berita teratas (digunakan di Home)
 */
export function getBeritaTerbaru() {
  return daftarBerita.slice(0, 3);
}

/**
 * Fungsi pembantu untuk mencari satu berita berdasarkan ID (digunakan di [id]/page.js)
 */
export function getBeritaById(id) {
  return daftarBerita.find((berita) => berita.id === id);
}
