# Online Games

## Deskripsi
Proyek ini adalah aplikasi web berbasis Express.js yang mendukung banyak halaman. Aplikasi ini menggunakan EJS sebagai mesin templating untuk membuat halaman dinamis.

## Struktur Proyek
```
web-game/
├── app.js
├── package.json
├── package-lock.json
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── about.ejs
    └── index.ejs
```

## Instalasi
1. Pastikan Anda memiliki Node.js dan npm terinstal di sistem Anda.
2. Clone repositori ini ke lokal Anda.
3. Buka terminal dan navigasikan ke direktori proyek.
4. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm install
   ```

## Menjalankan Aplikasi
Setelah menginstal dependensi, Anda dapat menjalankan aplikasi dengan perintah berikut:
```bash
node app.js
```
Aplikasi akan berjalan di `http://localhost:3000`.

## Fitur
- **Halaman Beranda**: Menampilkan pesan selamat datang.
- **Halaman Tentang**: Menampilkan informasi tentang proyek.

## Teknologi yang Digunakan
- **Express.js**: Framework web untuk Node.js.
- **EJS**: Mesin templating untuk membuat halaman dinamis.
- **HTML/CSS**: Untuk struktur dan gaya halaman.

## Kontribusi
Silakan buat pull request untuk kontribusi. Untuk perubahan besar, buka issue terlebih dahulu untuk mendiskusikan apa yang ingin Anda ubah.

## Lisensi
MIT 
