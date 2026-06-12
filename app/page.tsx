import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-gray-800 font-sans antialiased">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-black text-orange-500 tracking-tight">
          Ndan<span className="text-gray-800">Gas</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#empathize" className="hover:text-orange-500 transition-colors">Empathize</a>
          <a href="#define" className="hover:text-orange-500 transition-colors">Define</a>
          <a href="#ideate" className="hover:text-orange-500 transition-colors">Ideate</a>
          <a href="#prototype" className="hover:text-orange-500 transition-colors">Prototype</a>
          <a href="#test" className="hover:text-orange-500 transition-colors">Test</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto text-center px-6 py-20 md:py-32 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-black text-orange-500 tracking-tighter mb-6 animate-fade-in">
          NdanGas
        </h1>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight max-w-2xl mb-6 leading-tight">
          Solusi Transportasi Modern yang Mengutamakan Kecepatan dan Kemudahan Alur Pemesanan
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Studi kasus UI/UX mendalam menggunakan metode Pendekatan Desain (Design Thinking) 
          untuk memangkas kerumitan proses pemesanan kendaraan online.
        </p>
        
        {/* 1 TOMBOL UTAMA */}
        <div className="flex justify-center">
          <a 
            href="#prototype"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 text-center"
          >
            Tampilkan Portofolio
          </a>
        </div>
      </header>

      {/* TAHAP 1: EMPATHIZE */}
      <section id="empathize" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tahap 1</span>
          <h3 className="text-2xl font-bold text-gray-900">Empathize</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          Kami melakukan wawancara mendalam dan menyebar kuesioner kepada mahasiswa serta pekerja komuter yang menggunakan layanan transportasi online setiap hari. Tujuannya adalah memahami perilaku, kebutuhan nyata, dan hambatan emosional mereka saat memesan kendaraan di jam sibuk.
        </p>
        <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">💡 Temuan Utama</h4>
            <p className="text-sm text-gray-600">Pengguna sering merasa cemas akibat ketidakpastian tarif dan alur aplikasi yang terlalu banyak klik penawaran promo.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">👤 Persona Pengguna</h4>
            <p className="text-sm text-gray-600">Mahasiswa aktif dengan mobilitas tinggi yang membutuhkan kecepatan akses tanpa distraksi iklan pop-up.</p>
          </div>
        </div>
      </section>

      {/* TAHAP 2: DEFINE */}
      <section id="define" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tahap 2</span>
          <h3 className="text-2xl font-bold text-gray-900">Define</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Dari data empati, kami merumuskan masalah inti menggunakan metode *Point of View* (POV) i.e. menyusun tantangan desain utama:
        </p>
        <blockquote className="bg-orange-50/50 border-l-4 border-orange-500 p-4 rounded-r-xl my-6">
          <p className="italic text-gray-700 font-medium">
            "Bagaimana kita bisa membantu komuter urban memesan transportasi online secara instan dalam kurang dari 3 kali klik tanpa terganggu informasi non-esensial?"
          </p>
        </blockquote>
      </section>

      {/* TAHAP 3: IDEATE */}
      <section id="ideate" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tahap 3</span>
          <h3 className="text-2xl font-bold text-gray-900">Ideate</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          Sesi *brainstorming* menghasilkan beberapa prioritas fitur untuk memotong alur pemesanan tradisional yang berbelit-belit menjadi sistem satu halaman terintegrasi.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xl mb-2">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">One-Tap Booking</h4>
            <p className="text-xs text-gray-600">Menyimpan rute favorit rumah-kampus atau rumah-kantor agar bisa langsung dipesan dari halaman beranda utama.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xl mb-2">💰</div>
            <h4 className="font-bold text-gray-900 mb-2">Smart Price Lock</h4>
            <p className="text-xs text-gray-600">Sistem transparan yang mengunci harga estimasi terbaik selama 2 menit pertama untuk menghindari lonjakan mendadak.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xl mb-2">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">Clean Interface</h4>
            <p className="text-xs text-gray-600">Antarmuka minimalis bebas banner iklan yang memprioritaskan peta navigasi dan pilihan jenis kendaraan.</p>
          </div>
        </div>
      </section>

      {/* TAHAP 4: PROTOTYPE */}
      <section id="prototype" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tahap 4</span>
          <h3 className="text-2xl font-bold text-gray-900">Prototype</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-8">
          Berikut adalah rancangan interaktif fidelitas tinggi (*High-Fidelity*) dari aplikasi NdanGas yang mengimplementasikan alur pemesanan kilat.
        </p>
        
        {/* AREA MOCKUP / EMBED FIGMA */}
        <div className="w-full bg-gray-900 aspect-video rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center relative border-4 border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent pointer-events-none" />
          <div className="text-center p-6 z-10">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-2">[ Interactive Prototype Display ]</p>
            <h4 className="text-white text-xl font-bold mb-4">Aplikasi NdanGas Live Preview</h4>
            <span className="bg-white/10 text-white text-xs px-4 py-2 rounded-md backdrop-blur-sm border border-white/20">
              Desain Antarmuka Pengguna Selesai Dikembangkan
            </span>
          </div>
        </div>
      </section>

      {/* TAHAP 5: TEST */}
      <section id="test" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100 mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tahap 5</span>
          <h3 className="text-2xl font-bold text-gray-900">Test</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          Kami menguji prototipe ini menggunakan metode *Task-Based Usability Testing* kepada 5 pengguna baru berskala metrik keberhasilan tugas (*Task Success Rate*).
        </p>
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase text-gray-500 tracking-wider">
                <th className="px-6 py-4">Metrik Evaluasi</th>
                <th className="px-6 py-4">Aplikasi Lama</th>
                <th className="px-6 py-4 text-orange-600">NdanGas Prototype</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50 text-gray-600">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Waktu Pemesanan Rata-rata</td>
                <td className="px-6 py-4">45 - 60 Detik</td>
                <td className="px-6 py-4 font-bold text-green-600">12 Detik</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Jumlah Klik (*Clicks Needed*)</td>
                <td className="px-6 py-4">6 - 8 Kali Klik</td>
                <td className="px-6 py-4 font-bold text-green-600">2 Kali Klik</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Skor Kepuasan SUS</td>
                <td className="px-6 py-4">64 (Apt)</td>
                <td className="px-6 py-4 font-bold text-green-600">82 (Excellent)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8 text-center text-xs text-gray-500">
        <p>© 2026 NdanGas Studio Case Study. Crafted for Excellence.</p>
      </footer>
    </div>
  )
}
