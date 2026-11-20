# Dashboard RPS - Sistem Informasi Akademik

## Deskripsi Proyek

Dashboard RPS adalah aplikasi web yang digunakan untuk melihat dan mengelola informasi Rencana Pembelajaran Semester (RPS). Aplikasi ini dibuat sebagai tugas Ujian Tengah Semester (UTS) dengan menggunakan teknologi web modern seperti React dan Next.js.

Melalui aplikasi ini, pengguna dapat melihat jadwal pembelajaran setiap minggu, progres perkuliahan, bobot penilaian, serta mencatat realisasi pembelajaran yang telah dilakukan.

## Teknologi yang Digunakan
- HTML5 untuk membuat struktur halaman.
- CSS3 untuk mengatur tampilan dan desain aplikasi.
- JavaScript untuk menjalankan fungsi dan interaksi.
- TypeScript untuk membantu penulisan kode yang lebih terstruktur.
- React 19 untuk membuat komponen antarmuka pengguna.
- Next.js 15 App Router sebagai framework aplikasi.
- LocalStorage untuk menyimpan data di browser.
- JSON sebagai sumber data simulasi.
- Visualisasi bobot penilaian dibuat menggunakan CSS tanpa Recharts.

## Fitur Utama
- Dashboard dengan ringkasan informasi pembelajaran.
- Pencarian materi pembelajaran.
- Filter berdasarkan CPMK dan status pembelajaran.
- Pengurutan data berdasarkan minggu.
- Pagination pada tabel RPS.
- Visualisasi bobot penilaian.
- Halaman detail setiap minggu pembelajaran.
- Perubahan status pembelajaran.
- Formulir pencatatan realisasi pembelajaran.
- Penyimpanan data menggunakan LocalStorage.
- Mode terang dan mode gelap.
- Tampilan responsif untuk desktop dan perangkat mobile.

## User Stories
- Pengguna dapat melihat progres pembelajaran secara keseluruhan.
- Pengguna dapat mencari dan memfilter data dengan mudah.
- Pengguna dapat melihat detail pembelajaran setiap minggu.
- Pengguna dapat memperbarui status pembelajaran.
- Pengguna dapat mencatat realisasi kegiatan perkuliahan.

## Alur Penggunaan
- Pengguna membuka halaman Dashboard RPS.
- Pengguna melihat ringkasan progres pembelajaran.
- Pengguna mencari, memfilter, atau mengurutkan data.
- Pengguna memilih minggu yang ingin dilihat detailnya.
- Pengguna memperbarui status dan menambahkan catatan realisasi.
- Data disimpan secara otomatis di LocalStorage.
- Pengguna kembali ke dashboard untuk melihat perubahan yang telah dilakukan.

## Strategi Rendering Next.js

Aplikasi menggunakan Next.js 15 dengan App Router.

- Halaman utama (Dashboard) menggunakan Server Component untuk mengambil data awal dari file JSON.
- Komponen DashboardClient menggunakan Client Component untuk menangani pencarian, filter, pagination, tema, dan perubahan status.
- Halaman detail menggunakan dynamic route (app/minggu/[id]/page.tsx).
- Dashboard menerapkan Incremental Static Regeneration (ISR) dengan revalidate = 3600, sehingga data diperbarui setiap satu jam.
- File loading.tsx dan error.tsx digunakan untuk menangani proses loading dan error.

## Penyimpanan Data

Data disimpan menggunakan LocalStorage browser, meliputi:

- Tema terang atau gelap.
- Status pembelajaran setiap minggu.
- Catatan realisasi pembelajaran.

Aplikasi tidak menggunakan database eksternal.

## Cara Menjalankan Aplikasi
Persyaratan
Node.js
npm

## Langkah Instalasi

Clone repository:

 https://github.com/attriana2-oss/Dashboard-rps.git

Masuk ke folder proyek:

cd Dashboard-rps

Instal dependensi:

npm install

Jalankan aplikasi:

npm run dev

Buka browser dan akses:

http://localhost:3000

Untuk membuat build produksi:

npm run build

## Hasil Pengujian

Pengujian menunjukkan bahwa fitur-fitur berikut berjalan dengan baik:

- Tampilan responsif pada desktop dan mobile.
- Pencarian materi pembelajaran.
- Filter berdasarkan CPMK dan status.
- Pengurutan data dan pagination.
- Perubahan status pembelajaran.
- Validasi formulir realisasi pembelajaran.
- Penyimpanan data setelah halaman dimuat ulang.
- Penyimpanan preferensi tema.
- Mode gelap pada halaman dashboard dan detail.
- Build aplikasi Next.js berhasil tanpa error.

## Penggunaan AI

AI digunakan sebagai alat bantu belajar dalam pengembangan aplikasi. AI membantu memahami konsep React, Next.js, dan TypeScript, serta membantu menganalisis error dan memberikan saran pengembangan. Seluruh hasil yang diberikan AI tetap diperiksa, disesuaikan, dan diuji kembali oleh pengembang sebelum digunakan.