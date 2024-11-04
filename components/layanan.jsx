import React from "react";
import Image from "next/image";
// SVG SAYA
import ikon1 from "@/public/assets/layanan/ikon-1.svg";
import ikon2 from "@/public/assets/layanan/ikon-2.svg";
import ikon3 from "@/public/assets/layanan/ikon-3.svg";
import ikon4 from "@/public/assets/layanan/ikon-4.svg";

const layananSaya = [
  {
    ikon: ikon1,
    judul: "Desain UI UX",
    deskripsi:
      "Menyediakan desain antarmuka yang menarik dan pengalaman pengguna yang intuitif untuk meningkatkan keterlibatan pengguna.",
  },
  {
    ikon: ikon2,
    judul: "Web & Mobile",
    deskripsi:
      "Mengembangkan aplikasi web dan mobile yang responsif dan mudah digunakan, memastikan aksesibilitas di berbagai perangkat untuk pengalaman pengguna yang optimal.",
  },
  {
    ikon: ikon3,
    judul: "Solusi E-Commerce",
    deskripsi:
      "Menghadirkan solusi e-commerce yang komprehensif untuk membantu bisnis Anda bertransaksi online dengan mudah dan aman.",
  },
  {
    ikon: ikon4,
    judul: "Peduli & Mendukung",
    deskripsi:
      "Memberikan dukungan berkelanjutan dan peduli pada setiap detail untuk memastikan kepuasan dan keberhasilan proyek Anda.",
  },
];

const Layanan = () => {
  return (
    <section className="relative z-40" id="Layanan">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {layananSaya.map((layanan, indeks) => (
            <li
              key={indeks}
              className="bg-white shadow-kebiasaan p-6 max-w-[350px] md:max-w-none rounded-l"
            >
              <Image
                src={layanan.ikon}
                width={48}
                height={48}
                alt="ikon layanan"
                className="mb-4"
              />
              <h3 className="text-[20px] text-utama font-semibold mb-3">
                {layanan.judul}
              </h3>
              <p className="text-[15px]">{layanan.deskripsi}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Layanan;
