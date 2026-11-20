
# Dashboard RPS - Sistem Informasi Akademik

## Deskripsi Proyek

Dashboard RPS adalah aplikasi web yang dibuat untuk membantu menampilkan dan mengelola informasi Rencana Pembelajaran Semester (RPS). Proyek ini dikembangkan sebagai bagian dari tugas Ujian Tengah Semester (UTS) pada mata kuliah terkait pengembangan aplikasi web.

## Teknologi yang Digunakan


Dalam pengembangan aplikasi Dashboard RPS, teknologi yang digunakan meliputi:

- HTML5 (JSX) untuk menyusun struktur dan elemen halaman web.
- CSS3 untuk mengatur desain, tata letak, responsivitas, serta tema aplikasi.
- JavaScript untuk mendukung interaksi dan logika aplikasi.
- TypeScript untuk memberikan tipe data pada kode.
- React 19 untuk membangun komponen antarmuka yang dapat digunakan kembali.
- Next.js 15 (App Router) sebagai framework aplikasi web.
- LocalStorage untuk penyimpanan data lokal.
- JSON sebagai sumber data simulasi (dummy data).

## Aplikasi ini menyediakan beberapa fitur utama, yaitu:

Menampilkan dashboard berisi empat kartu KPI untuk memberikan gambaran umum progres pembelajaran.
Fitur pencarian dan filter berdasarkan CPMK serta status pembelajaran.
Pengurutan data dan pagination pada tabel RPS.
Visualisasi bobot penilaian untuk membantu memahami komposisi evaluasi pembelajaran.
Halaman detail yang menampilkan informasi setiap minggu perkuliahan.
Pengubahan status pembelajaran sesuai perkembangan pelaksanaan perkuliahan.
Formulir pencatatan realisasi pembelajaran dengan validasi secara langsung.
Penyimpanan status dan catatan menggunakan LocalStorage.
Dukungan mode terang dan mode gelap.
Tampilan responsif yang dapat digunakan dengan nyaman pada laptop maupun perangkat mobile.

## Kebutuhan Pengguna (User Stories)

Aplikasi ini dirancang untuk memenuhi kebutuhan pengguna sebagai berikut:

- Pengguna dapat melihat ringkasan progres pembelajaran sehingga perkembangan RPS dapat dipantau dengan mudah.
- Pengguna dapat mencari dan memfilter data pembelajaran untuk menemukan materi yang dibutuhkan dengan lebih cepat.
- Pengguna dapat melihat detail setiap minggu pembelajaran untuk memahami materi, metode, dan aktivitas perkuliahan.
- Pengguna dapat memperbarui status pembelajaran serta menambahkan catatan realisasi sebagai dokumentasi pelaksanaan perkuliahan.

## Cara Menjalankan Aplikasi

Pastikan Node.js sudah terpasang pada perangkat yang digunakan.

Buka terminal pada folder proyek, kemudian jalankan perintah berikut:
npm install
npm run dev

Setelah proses selesai, buka browser dan akses:
http://localhost:3000

## Strategi Rendering

Aplikasi ini dibangun menggunakan Next.js App Router. Halaman Dashboard dan halaman Detail menggunakan Client Component karena membutuhkan interaksi langsung dengan pengguna, seperti pencarian data, pengubahan status, dan pengisian catatan. Data awal RPS disimpan dalam file JSON lokal dan diambil menggunakan mekanisme fetch.

## Penyimpanan Data Lokal

Untuk menyimpan data yang berkaitan dengan pengguna, aplikasi memanfaatkan LocalStorage pada browser. Data yang disimpan meliputi preferensi tema, status pembelajaran, serta catatan realisasi. Penyimpanan ini bersifat lokal sehingga tidak menggunakan database atau server eksternal.

## Penggunaan AI

Selama proses pengembangan, AI digunakan sebagai media pembelajaran dan pendukung pengembangan aplikasi. AI membantu dalam memahami konsep React, Next.js, dan TypeScript, memberikan referensi penyelesaian error, serta membantu mengevaluasi dan menyempurnakan fitur yang dibuat. Seluruh kode dan implementasi tetap ditinjau, disesuaikan, serta diuji secara mandiri oleh pengembang.

## Hasil Pengujian Aplikasi
- Tampilan responsif
- Pencarian, filter, pengurutan, dan pagination
- Validasi formulir realisasi
- Penyimpanan status minggu
- Penyimpanan catatan dan tema melalui Localstorage
- Dark mode 