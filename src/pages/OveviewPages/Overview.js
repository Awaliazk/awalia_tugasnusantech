import React from "react";
import { Link } from "react-router-dom";
import "./Overview.css";
import "../../App.css";

const Overview = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="card overview-background shadow-lg p-6">
          <div className="card-body text-center">
            <h1 className="text-4xl font-bold mb-2">OVERVIEW</h1>
          </div>
          <div className="card-body">
            <h2 className="text-2xl mb-1">
              Hai, nama saya Awalia zahrotul khikmah
            </h2>
            <p className="text-lg mb-6">
              Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo,
              mengambil jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
            </p>
            <p className="text-lg mb-6">
              Saya memiliki ketertarikan dalam dunia pemrograman dan
              teknologi. Hobi saya adalah membaca buku novel, dan saya senang
              mempelajari hal-hal baru. Jurusan Rekayasa Perangkat Lunak (RPL) berfokus pada
               pengembangan, pengujian, depan
               pemeliharaan perangkat lunak.</p>
            <p className="text-lg mb-6">
            Saya adalah mahasiswa jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat
             mendalam dalam dunia teknologi dan 
            pengembangan perangkat lunak. Jurusan ini memberikan saya kesempatan untuk
             memahami berbagai konsep dasar dan 
            lanjutan dalam pengembangan perangkat lunak, 
            mulai dari pemrograman hingga manajemen proyek.
            </p>
            <p className="text-lg mb-6">
            Saya juga terlibat dalam proyek pengembangan perangkat lunak, di mana saya menerapkan
             teori yang telah dipelajari ke dalam praktik nyata. Pengalaman ini memberikan
              wawasan berharga tentang tantangan dan
             dinamika yang dihadapi dalam industri.
            </p>
            <p className="text-lg mb-6">
            Dengan latar belakang RPL, saya merasa siap untuk mengejar berbagai peluang karir,
             termasuk menjadi pengembang perangkat
             lunak, analis sistem, atau quality assurance engineer
            </p>
            <p className="text-lg mb-6">
            Jurusan Rekayasa Perangkat Lunak telah membuka banyak pintu untuk saya,
             baik dalam hal pengetahuan maupun karir. Saya berkomitmen untuk terus belajar
              dan beradaptasi dengan perkembangan teknologi, serta berkontribusi pada
             inovasi di bidang perangkat lunak.
            </p>
           
            <p className="text-lg font-semibold text-black"> {/* Ubah kelas CSS */}
              Terima kasih telah mengunjungi portofolio saya.
            </p>
            <Link to="/ContactMe">
              <button
                aria-label="Hubungi Saya"
                className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-full shadow-lg hover:bg-pink-700"
              >
                Hubungi Saya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;