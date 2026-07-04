# 📊 Algoritma Visualizer Sederhana - Bubble Sort Edition

Proyek aplikasi web edukatif berbasis **Vanilla JavaScript** yang berguna untuk memvisualisasikan cara kerja algoritma pengurutan data klasik **Bubble Sort** secara langsung, selangkah demi selangkah (*step-by-step*).

Tujuan utama dari repositori ini adalah mempermudah siswa atau programmer pemula memahami konsep perbandingan elemen array dan operasi penukaran (*swapping*) secara visual.

---

## 🚀 Fitur Utama

*   **Dynamic Data Bar Generation:** JavaScript secara otomatis memproduksi diagram batang dengan tinggi dan angka acak secara proporsional menggunakan manipulasi properti CSS `height`.
*   **Asynchronous Processing Control:** Memanfaatkan kemampuan `async/await` dan `Promise` pada JavaScript Modern (ES6) untuk menghentikan sementara laju eksekusi kode (*jeda/sleep*) demi menciptakan efek animasi transisi penukaran data.
*   **Real-time Color State Indicator:** Menggunakan skema warna yang intuitif untuk menggambarkan status internal algoritma:
    *   **Biru:** Data awal yang acak dan belum diproses.
    *   **Oranye:** Dua buah elemen data bersebelahan yang sedang aktif dibandingkan nilainya.
    *   **Merah:** Terjadi kondisi data kiri lebih besar daripada kanan, sehingga proses penukaran posisi (*swap*) sedang dilakukan.
    *   **Hijau:** Elemen data yang sudah mengunci posisi final terbaiknya (Telah berurutan).
*   **Action Lock Prevention:** Melakukan penguncian (*disabled attribute*) pada tombol kontrol selama algoritma bekerja guna mencegah konflik input dari pengguna yang dapat merusak struktur data array tengah berjalan.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur layout panel kontrol, kanvas grafik, dan komponen legenda status
├── style.css        # Skema antarmuka gelap, tata letak flexbox batang grafik, dan variabel warna status
└── script.js        # Logika pembentukan array, fungsi delay asinkronus, dan algoritma inti Bubble Sort
