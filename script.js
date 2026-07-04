// --- KONFIGURASI AWAL ---
const JUMLAH_BATANG = 20; // Jumlah elemen data dalam array
const KANVAS = document.getElementById('chart-canvas');
const btnRandomize = document.getElementById('btn-randomize');
const btnSort = document.getElementById('btn-sort');

let dataArray = []; // Menyimpan angka mentah

// --- FUNGSI 1: GENERATE ARRAY ACAK & RENDER KE HTML ---
function generateDataAcak() {
    KANVAS.innerHTML = ''; // Kosongkan kanvas lama
    dataArray = [];

    for (let i = 0; i < JUMLAH_BATANG; i++) {
        // Hasilkan nilai acak antara 10 hingga 100 (untuk persentase tinggi batang)
        const nilaiAcak = Math.floor(Math.random() * 90) + 10;
        dataArray.push(nilaiAcak);

        // Buat elemen div batang baru di DOM
        const batang = document.createElement('div');
        batang.classList.add('data-bar');
        batang.style.height = `${nilaiAcak}%`; // Set tinggi lewat CSS
        batang.innerText = nilaiAcak;         // Tampilkan angka di dalam batang
        
        KANVAS.appendChild(batang);
    }
}

// --- FUNGSI AUXILIARY: MEMBUAT DELAY (JEDA JALANNYA PROGRAM) ---
// Bubble sort berjalan sangat cepat. Fungsi ini memaksa JavaScript "tidur" beberapa milidetik 
// agar proses penukaran elemen bisa dinikmati oleh mata manusia.
function jeda(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- FUNGSI 2: LOGIKA ALGORITMA BUBBLE SORT + VISUALISASI ---
async function mulaiBubbleSort() {
    // Kunci tombol kontrol agar user tidak mengacaukan visualisasi saat proses berjalan
    btnRandomize.disabled = true;
    btnSort.disabled = true;

    const elemenBatang = KANVAS.querySelectorAll('.data-bar');
    const n = dataArray.length;

    // Perulangan luar Bubble Sort
    for (let i = 0; i < n - 1; i++) {
        // Perulangan dalam (membandingkan data bersebelahan)
        for (let j = 0; j < n - i - 1; j++) {
            
            // 1. Tandai dua batang yang SEDANG DIBANDINGKAN (Ubah warna ke Oranye)
            elemenBatang[j].classList.add('comparing');
            elemenBatang[j + 1].classList.add('comparing');
            
            await jeda(100); // Beri jeda waktu melihat perbandingan

            // Cek apakah data kiri lebih besar daripada data kanan
            if (dataArray[j] > dataArray[j + 1]) {
                
                // 2. Jika iya, ubah status warna menjadi PROSES TUKAR (Ubah warna ke Merah)
                elemenBatang[j].classList.replace('comparing', 'swapping');
                elemenBatang[j + 1].classList.replace('comparing', 'swapping');

                // Tukar data di struktur data Array utama
                let temp = dataArray[j];
                dataArray[j] = dataArray[j + 1];
                dataArray[j + 1] = temp;

                await jeda(100); // Beri jeda waktu melihat indikator merah

                // Tukar tampilan visual (Tinggi & Teks) di UI DOM
                elemenBatang[j].style.height = `${dataArray[j]}%`;
                elemenBatang[j].innerText = dataArray[j];
                
                elemenBatang[j + 1].style.height = `${dataArray[j + 1]}%`;
                elemenBatang[j + 1].innerText = dataArray[j + 1];
                
                await jeda(100); // Beri jeda pasca penukaran selesai
                
                // Kembalikan ke warna default setelah ditukar
                elemenBatang[j].classList.remove('swapping');
                elemenBatang[j + 1].classList.remove('swapping');
            } else {
                // Jika tidak ditukar, langsung hapus penanda warna oranye perbandingan
                elemenBatang[j].classList.remove('comparing');
                elemenBatang[j + 1].classList.remove('comparing');
            }
        }
        
        // 3. Elemen paling kanan pada iterasi ini sudah pasti berada di posisi yang BENAR.
        // Tandai sebagai elemen yang BERHASIL DIURUTKAN (Ubah warna ke Hijau)
        elemenBatang[n - i - 1].classList.add('sorted');
    }
    
    // Warnai elemen pertama (paling kiri) yang tersisa menjadi hijau
    elemenBatang[0].classList.add('sorted');

    // Buka kembali kunci tombol kontrol setelah semua data berurutan sempurna
    btnRandomize.disabled = false;
    btnSort.disabled = false;
}

// --- EVENT LISTENERS ---
btnRandomize.addEventListener('click', generateDataAcak);
btnSort.addEventListener('click', mulaiBubbleSort);

// Inisialisasi awal saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', generateDataAcak);
