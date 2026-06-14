# SkillMatch AI

Platform rekomendasi karier berbasis Artificial Intelligence yang membantu pengguna menemukan industri yang paling sesuai, mengidentifikasi kesenjangan keterampilan (skill gap), menyusun roadmap pembelajaran, serta memantau perkembangan karier dari waktu ke waktu.

---

## Tentang Proyek

SkillMatch AI merupakan proyek capstone yang menggabungkan Machine Learning, Artificial Intelligence, dan teknologi web modern untuk memberikan rekomendasi karier yang lebih personal dan berbasis data.

Pengguna dapat:

- Menganalisis keterampilan (skills) yang dimiliki
- Mengunggah resume untuk dianalisis secara otomatis
- Mengetahui industri yang paling sesuai
- Mendapatkan rekomendasi skill yang perlu dipelajari
- Melihat roadmap pembelajaran
- Menyimpan riwayat analisis
- Mengekspor laporan ke PDF
- Membandingkan perkembangan karier
- Mendapatkan insight karier berbasis AI

---

## Fitur Utama

### 1. Rekomendasi Industri

Sistem memprediksi industri yang paling sesuai berdasarkan keterampilan dan tingkat pengalaman pengguna.

Contoh:

Input:

```text
Skills:
- Python
- SQL
- React

Experience:
- Entry Level
```

Output:

```text
Software      87%
Finance       10%
Education      3%
```

---

### 2. Analisis Skill Gap

Mengidentifikasi keterampilan yang masih kurang dan direkomendasikan untuk dipelajari agar lebih sesuai dengan industri tujuan.

Contoh:

```text
Skill Saat Ini:
- Python
- SQL

Skill Direkomendasikan:
- React
- AWS
- Machine Learning
```

---

### 3. Learning Path Recommendation

Menyusun roadmap pembelajaran berdasarkan tingkat kesulitan.

Contoh:

```text
Intermediate
- React
- Java

Advanced
- AWS
- Machine Learning
```

---

### 4. Analisis Resume

Pengguna dapat mengunggah CV atau resume.

Sistem akan:

- Mengekstrak skill secara otomatis
- Menganalisis profil pengguna
- Memberikan rekomendasi karier

---

### 5. Export PDF Report

Laporan dapat diekspor dalam format PDF profesional yang berisi:

- Nama pengguna
- Hasil prediksi industri
- Tingkat kecocokan
- Daftar skill saat ini
- Skill rekomendasi
- Learning path

---

### 6. Sistem Autentikasi

Mendukung:

- Registrasi akun
- Login
- Logout
- Protected Route
- Penyimpanan sesi pengguna

---

### 7. Riwayat Analisis

Pengguna yang telah login dapat:

- Menyimpan hasil analisis
- Melihat riwayat analisis
- Menghapus riwayat
- Mengekspor laporan lama

---

### 8. Compare Reports

Membandingkan dua hasil analisis yang berbeda untuk melihat perkembangan karier.

Fitur yang tersedia:

- Perbandingan confidence score
- Perbandingan jumlah skill
- Career Growth Score
- AI Career Insight

---

### 9. AI Career Insight

Menggunakan Google Gemini untuk menghasilkan analisis perkembangan karier secara otomatis.

Output AI meliputi:

- Ringkasan perkembangan
- Peningkatan yang terjadi
- Risiko yang perlu diperhatikan
- Skill berikutnya yang direkomendasikan
- Growth Score

---

## Alur Penggunaan

```text
Landing Page
      ↓
Analisis Skill / Resume
      ↓
Proses AI
      ↓
Dashboard Hasil
      ↓
Riwayat Analisis
      ↓
Perbandingan Laporan
      ↓
AI Career Insight
```

---

## Teknologi yang Digunakan

### Frontend

- Next.js 16
- TypeScript
- React
- Tailwind CSS
- Recharts
- SweetAlert2
- jsPDF
- Bun

### Backend

- FastAPI
- Python
- Pydantic

### Machine Learning

- Scikit-Learn
- TF-IDF
- Logistic Regression
- Pandas
- NumPy
- Joblib

### Artificial Intelligence

- Google Gemini API

### Database

- PostgreSQL

---

## Arsitektur Machine Learning

### Industry Recommendation

Model yang digunakan:

```text
TF-IDF
+
Logistic Regression
```

Tujuan:

```text
Memprediksi industri yang paling sesuai
berdasarkan skill dan pengalaman pengguna.
```

---

### Skill Gap Recommendation Engine

Menggunakan:

- Skill Co-occurrence Analysis
- Industry Skill Frequency
- Association Discovery

Tujuan:

```text
Memberikan rekomendasi skill
yang perlu dipelajari pengguna.
```

---

### Learning Path Generator

Mengelompokkan skill ke dalam:

```text
Beginner
Intermediate
Advanced
```

sehingga menghasilkan roadmap pembelajaran yang lebih terstruktur.

---

## Struktur Proyek

```text
skillmatch-web/

├── app/
│   ├── analysis/
│   ├── dashboard/
│   ├── history/
│   ├── login/
│   ├── register/
│   └── api/
│
├── components/
│   ├── analysis/
│   ├── dashboard/
│   ├── history/
│   ├── layout/
│   └── ui/
│
├── hooks/
│
├── lib/
│   ├── api/
│   ├── auth/
│   ├── pdf/
│   └── history/
│
├── types/
│
├── public/
│
└── README.md
```

---

## Instalasi

Clone repository:

```bash
git clone https://github.com/username/skillmatch-web.git

cd skillmatch-web
```

Install dependency:

```bash
bun install
```

Menjalankan aplikasi:

```bash
bun run dev
```

Buka browser:

```text
http://localhost:3000
```

---

## Environment Variable

Buat file `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000

GEMINI_API_KEY=your_gemini_api_key
```

---

## Build Production

```bash
bun run build
```

```bash
bun run start
```

---

## Rencana Pengembangan Selanjutnya

### Learning Resources Recommendation

Menyediakan rekomendasi:

- Kursus online
- Sertifikasi
- Materi belajar
- Platform pembelajaran

berdasarkan skill yang direkomendasikan.

---

### AI Quiz Generator

Menghasilkan kuis otomatis berdasarkan skill yang ingin dipelajari.

Contoh:

```text
Skill:
Machine Learning

Jumlah Soal:
10

Tingkat Kesulitan:
Intermediate

Skor:
8/10
```

---

### Dashboard Progress Tracking

Visualisasi perkembangan pengguna secara berkala:

- Skill Growth
- Career Growth
- Learning Progress
- Achievement Tracking

---

## Tujuan Proyek

Membantu mahasiswa, pencari kerja, dan profesional untuk:

- Mengenali potensi karier
- Menentukan arah pengembangan skill
- Menyusun roadmap pembelajaran
- Mengambil keputusan karier berbasis data

dengan bantuan Artificial Intelligence.

---

## Lisensi

Proyek ini dikembangkan untuk keperluan Capstone Project dan tujuan edukasi.

© SkillMatch AI Team
