import React from 'react';

export default function Home() {
  // Base URL Embed Figma tunggal milik Nadhin
  const figmaBaseUrl = "https://embed.figma.com/design/qttuZOiFPCAXXFi2JMIbfD/Prototype-NdanGas";

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased scroll-smooth">
      
      {/* NAVBAR FIXED */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-xl font-black tracking-tight text-orange-500">NdanGas</div>
          <div className="hidden space-x-6 text-sm font-medium text-gray-600 md:flex">
            <a href="#empati" className="hover:text-orange-500 transition-colors">Empathize</a>
            <a href="#masalah" className="hover:text-orange-500 transition-colors">Define</a>
            <a href="#ide" className="hover:text-orange-500 transition-colors">Ideat</a>
            <a href="#purwarupa" className="hover:text-orange-500 transition-colors">Prototype</a>
            <a href="#pengujian" className="hover:text-orange-500 transition-colors">Test</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-white px-6 text-center pt-16">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-orange-500 md:text-8xl">
          NdanGas
        </h1>
        <p className="mb-6 text-xl font-bold text-gray-800 md:text-2xl max-w-3xl">
          Solusi Transportasi Modern yang Mengutamakan Kecepatan dan Kemudahan Alur Pemesanan
        </p>
        <p className="max-w-2xl text-gray-600 mb-8">
          Studi kasus UI/UX mendalam menggunakan metode Pendekatan Desain (Design Thinking) untuk memangkas kerumitan proses pemesanan kendaraan online.
        </p>
        <div className="flex justify-center">
          <a href="#prototype" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all">
            Tampilkasn Prototype
          </a>
        </div>
      </section>

      {/* PROYEK OVERVIEW */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-12 px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Jangka Waktu</p>
            <p className="mt-2 text-lg font-bold text-gray-800">4 Minggu</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Perangkat Kerja</p>
            <p className="mt-2 text-lg font-bold text-gray-800">Figma & FigJam</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Fokus Utama Desain</p>
            <p className="mt-2 text-lg font-bold text-gray-800">Kecepatan & Kemudahan</p>
          </div>
        </div>
      </section>


      {/* 1. EMPATHIZE SECTION */}
      <section id="empati" className="mx-auto max-w-5xl px-6 py-24 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">1. Empati (Empathize)</h2>
          <p className="mt-4 text-gray-600">
            Tahap awal untuk memahami kebutuhan, motivasi, serta hambatan nyata yang dialami pengguna saat memesan layanan transportasi daring.
          </p>
        </div>

        {/* EMBED: EMPATHIZE FRAME (Silakan ganti node-id=2124-840 jika berbeda) */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white mb-12">
          <iframe 
            className="w-full h-full"
            src={`${figmaBaseUrl}?node-id=2124-840&embed-host=share`}
            allowFullScreen
            style={{ border: "0" }}
          ></iframe>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Metodologi Riset</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• <strong className="text-gray-900">Wawancara Kualitatif:</strong> Berdialog langsung secara mendalam dengan mahasiswa yang merupakan pengguna aktif transportasi online.</li>
              <li>• <strong className="text-gray-900">Observasi Langsung:</strong> Mengamati perilaku interaksi pengguna saat terburu-buru melakukan pemesanan kendaraan.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Temuan Utama Riset</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• <strong className="text-orange-600">Alur Terlalu Panjang:</strong> Terlahu banyak jendela iklan promosi yang mengalihkan fungsi utama menu pemesanan.</li>
              <li>• <strong className="text-orange-600">Kurang Efisien:</strong> Pengisian titik lokasi penjemputan dan tujuan terpisah jauh sehingga membutuhkan ketukan layar tambahan.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 2. DEFINE SECTION */}
      <section id="masalah" className="bg-gray-50/50 px-6 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">2. Menentukan Masalah (Define)</h2>
            <p className="mt-4 text-gray-600">Menyaring dan menganalisis data hasil temuan riset empati menjadi rumusan masalah inti serta mencari celah solusi potensial.</p>
          </div>

          {/* EMBED: DEFINE FRAME (Ganti node-id sesuai frame Define kamu) */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white mb-12">
            <iframe 
              className="w-full h-full"
              src={`${figmaBaseUrl}?node-id=2124-840&embed-host=share`} 
              allowFullScreen
              style={{ border: "0" }}
            ></iframe>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase text-orange-500 tracking-wider">Pernyataan Masalah (Problem Statement)</span>
              <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                "Pengguna dengan tingkat kesibukan tinggi yang sering terburu-buru membutuhkan sistem pemesanan transportasi yang bersih dari elemen iklan dan memiliki alur instan, agar proses pemesanan selesai tanpa kebingungan visual."
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase text-orange-500 tracking-wider">Pertanyaan Pemicu Solusi (How Might We)</span>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>1. Bagaimana kita bisa menyederhanakan halaman pemilihan lokasi agar bebas dari proses klik yang berulang?</li>
                <li>2. Bagaimana menyajikan identitas pengemudi secara jelas tanpa menutup tampilan visual peta utama?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* 3. IDEATE SECTION */}
      <section id="ide" className="mx-auto max-w-5xl px-6 py-24 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">3. Ideate</h2>
          <p className="mt-4 text-gray-600">
            Proses eksplorasi gagasan kreatif dari sketsa mentah kasar hingga perancangan arsitektur informasi aplikasi yang matang.
          </p>
        </div>

        <div className="space-y-16">
          {/* A. Curah Ide & Crazy 8's */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">A. Brainstorming & Crazy 8's</h3>
            <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white">
              <iframe 
                className="w-full h-full"
                src={`${figmaBaseUrl}?node-id=199-776&embed-host=share`} 
                allowFullScreen
                style={{ border: "0" }}
              ></iframe>
            </div>
          </div>

          {/* B. Sketsa Kerangka Kasar (Low Fidelity Sketches) */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">B. Low Fidelity Sketches</h3>
            <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white">
              <iframe 
                className="w-full h-full"
                src={`${figmaBaseUrl}?node-id=2145-840&embed-host=share`} 
                allowFullScreen
                style={{ border: "0" }}
              ></iframe>
            </div>
          </div>

          {/* C. Alur Pengguna (User Flow) */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">C. User Flow</h3>
            <div className="rounded-xl bg-orange-50 border border-orange-100 p-6 text-center text-sm font-semibold tracking-wide text-orange-700 flex flex-wrap justify-center gap-2 items-center mb-4">
              <span>Daftar / Masuk Akun</span> <span>→</span>
              <span>Halaman Beranda</span> <span>→</span>
              <span>Input Lokasi & Tujuan</span> <span>→</span>
              <span>Pilih Jenis Kendaraan</span> <span>→</span>
              <span>Konfirmasi & Cari Driver</span> <span>→</span>
              <span>Perjalanan (Pelacakan Peta)</span> <span>→</span>
              <span>Selesai & Penilaian</span>
            </div>
            <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white">
              <iframe 
                className="w-full h-full"
                src={`${figmaBaseUrl}?node-id=2006-954&embed-host=share`} 
                allowFullScreen
                style={{ border: "0" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* 4. PROTOTYPE SECTION */}
      <section id="purwarupa" className="bg-gray-50/50 px-6 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">4. Purwarupa (Prototype)</h2>
          <p className="mt-4 text-gray-600 mb-12 max-w-2xl mx-auto">
            Realisasi gagasan ide menjadi visual digital interaktif beresolusi tinggi (High Fidelity Design) beserta simulasi alur transaksinya.
          </p>

          {/* EMBED INTERACTIVE PROTOTYPE FIGMA (Langsung mengarah ke frame utama rancanganmu) */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white aspect-video mb-12">
            <iframe 
              className="w-full h-full"
              src={`${figmaBaseUrl}?node-id=2124-840&embed-host=share`} 
              allowFullScreen
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </section>


      {/* 5. TEST SECTION */}
      <section id="pengujian" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">5. Pengujian (Test)</h2>
          <p className="mt-4 text-gray-600">Menguji tingkat efisiensi model desain langsung kepada pengguna target guna mengevaluasi kegunaan sistem.</p>
        </div>

        {/* EMBED: TESTING FRAME (Ganti node-id sesuai frame dokumentasi uji kamu) */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white mb-12">
          <iframe 
            className="w-full h-full"
            src={`${figmaBaseUrl}?node-id=2124-840&embed-host=share`} 
            allowFullScreen
            style={{ border: "0" }}
          ></iframe>
        </div>

        <div className="grid gap-8 md:grid-cols-5 items-start mb-12">
          <div className="md:col-span-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Metodologi & Parameter Evaluasi</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Menggunakan teknik <strong className="text-gray-900">Uji Kegunaan Kualitatif (Qualitative Usability Testing)</strong> dengan memberikan instruksi skenario tugas spesifik secara langsung kepada pengguna.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• <strong>Teknik:</strong> Pengujian Berbasis Tugas + Wawancara Evaluatif</p>
              <p>• <strong>Kriteria Responden:</strong> Mahasiswa pengguna aktif moda transportasi daring</p>
            </div>
          </div>
        </div>

        {/* Tabel Hasil Pengujian */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Lembar Periksa Hasil Pengujian Skenario</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-bold">
                <tr>
                  <th className="px-4 py-3">Skenario Tugas Pengguna</th>
                  <th className="px-4 py-3">Status Evaluasi</th>
                  <th className="px-4 py-3">Umpan Balik / Catatan Kendala</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-4 font-medium text-gray-900">1. Melakukan masuk akun serta pengisian kode verifikasi OTP</td>
                  <td className="px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Berhasil</span></td>
                  <td className="px-4 py-4 text-gray-500">Proses pemasukan kode OTP lancar, tombol aksi merespon dengan cepat.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-gray-900">2. Menentukan titik koordinat penjemputan serta alamat tujuan</td>
                  <td className="px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Berhasil</span></td>
                  <td className="px-4 py-4 text-gray-500">Rekomendasi alamat berbasis titik GPS dinilai akurat dan responsif.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-gray-900">3. Menentukan pilihan jenis armada dan konfirmasi transaksi</td>
                  <td className="px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Berhasil</span></td>
                  <td className="px-4 py-4 text-gray-500">Perbandingan harga antar jenis kendaraan terlihat jelas tanpa perlu menggulir layar jauh.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROFIL PERANCANG */}
      <section className="bg-gray-900 text-white px-6 py-16 text-center border-t border-gray-800">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tight">Nadhin Ayudya Rahmadhani</h3>
          <p className="text-gray-400 font-medium mt-1 text-sm">NIM. 253307040</p>
          <p className="text-orange-400 font-medium mt-1 text-sm">Program Studi Teknologi Informasi</p>
          <p className="mt-4 text-xs text-gray-500">Proyek Portofolio UI/UX Aplikasi Transportasi NdanGas - Penilaian Ujian Akhir Semester.</p>
        </div>
      </section>

    </main>
  );
}
