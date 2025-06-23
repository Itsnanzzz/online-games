# 🎮 Online Games

## 📝 Deskripsi
Proyek ini adalah aplikasi web berbasis Express.js yang mendukung banyak halaman. Aplikasi ini menggunakan EJS sebagai mesin templating untuk membuat halaman dinamis.

## ⚙️ Prasyarat
- [![Node.js](https://img.shields.io/badge/Node.js-14.x-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
- [![Git](https://img.shields.io/badge/Git-Latest-orange?style=for-the-badge&logo=git)](https://git-scm.com/)

## 📁 Struktur Proyek
```
web-game/
└── 📁public
        └── 📁css
            └── style.css
        └── 📁images
            └── logo.svg
    └── 📁views
        └── about.ejs
        └── 📁games
        └── games.ejs
            └── puzzle.ejs
        └── index.ejs
    └── .gitignore
    └── app.js
    └── LICENSE
    └── package-lock.json
    └── package.json
    └── README.md
    └── vercel.json
```

# Web Game Collection

Koleksi web game sederhana berbasis Node.js dan EJS.

## Daftar Game
- **Overflowing Palette** (Puzzle warna)
- **Color Match** (Memory warna)
- **Tebak Angka** (Guess the Number)
- **Sliding Puzzle** (Puzzle geser 3x3)

## Instalasi

1. **Clone repository & install dependencies**
   ```bash
   npm install
   ```

## Menjalankan Aplikasi

- Jalankan server:
  ```bash
  npm start
  ```
- Akses aplikasi di [http://localhost:3000](http://localhost:3000)

## Mode Development (Auto-reload)

Agar server otomatis restart saat ada perubahan file, gunakan [nodemon](https://www.npmjs.com/package/nodemon):

- Jalankan dengan nodemon (tanpa install global):
  ```bash
  npx nodemon app.js
  ```
- Atau install global:
  ```bash
  npm install -g nodemon
  nodemon app.js
  ```

## Catatan
- Semua game dapat diakses melalui route masing-masing di folder `views/games/`.
- Untuk menambah game baru, cukup tambahkan file `.ejs` di folder tersebut dan update routing di `app.js`.

## 🎯 Fitur
- **🏠 Halaman Beranda**: Menampilkan pesan selamat datang.
- **🎮 Halaman Games**: Menampilkan kumpulan game dengan tampilan card.
- **ℹ️ Halaman Tentang**: Menampilkan informasi tentang proyek.

## 🛠️ Teknologi yang Digunakan
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-Latest-green?style=for-the-badge&logo=ejs)](https://ejs.co/)
[![HTML5](https://img.shields.io/badge/HTML5-Latest-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Latest-blue?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Git](https://img.shields.io/badge/Git-Latest-orange?style=for-the-badge&logo=git)](https://git-scm.com/)

## 📄 Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---
<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red.svg" alt="Made with love">
  <br>
  <sub>Built with ❤️ by <a href="https://github.com/Itsnanzzz">Itsnanzzz</a></sub>
</div>


