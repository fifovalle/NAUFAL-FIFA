"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
// KOMPONEN SAYA
import Kartu from "@/components/kartu";
// LOGO SAYA
import Logo1 from "@/public/assets/perjalanan/pengalaman/logo-1.svg";
import Logo2 from "@/public/assets/perjalanan/pengalaman/logo-2.svg";
import Logo3 from "@/public/assets/perjalanan/pengalaman/logo-3.svg";
import Logo4 from "@/public/assets/perjalanan/edukasi/logo-1.svg";
import Logo5 from "@/public/assets/perjalanan/edukasi/logo-2.svg";
import Logo6 from "@/public/assets/perjalanan/setifikat/1.svg";

const perjalananSaya = [
  {
    jenis: "pengalaman",
    perusahaan: "BMKG Bengkulu",
    tautanLogo: Logo1,
    posisi: "Fullstack Web Developer",
    jangkaWaktu: "Januari 2024 - Sekarang",
    deskripsi:
      "Mengembangkan aplikasi PTSP dengan antarmuka responsif dan backend yang efisien. Bekerja sama dalam tim untuk meningkatkan layanan publik melalui integrasi data cuaca real-time.",
  },
  {
    jenis: "pengalaman",
    perusahaan: "Basarnas Bengkulu",
    tautanLogo: Logo2,
    posisi: "Fullstack Web Developer",
    jangkaWaktu: "Juni 2024 - Juli 2024",
    deskripsi:
      "Bertanggung jawab atas pengembangan aplikasi Simore (Sistem Monitoring Rescue), menciptakan frontend intuitif dan backend efisien untuk mendukung operasi pencarian dan penyelamatan dengan akses informasi real-time.",
  },
  {
    jenis: "pengalaman",
    perusahaan: "Ndaru Farm",
    tautanLogo: Logo3,
    posisi: "Fullstack Mobile & Web Developer",
    jangkaWaktu: "Agustus 2024 - Sekarang",
    deskripsi:
      "Mengembangkan aplikasi E-Commerce untuk penjualan produk pertanian, dengan fitur manajemen produk, keranjang belanja, dan integrasi pembayaran. Berkolaborasi dalam optimasi SEO untuk meningkatkan visibilitas aplikasi.",
  },

  {
    jenis: "edukasi",
    intuisi: "SMK Mahardhika",
    tautanLogo: Logo4,
    pencapaian: "Fullstack Web Developer",
    jangkaWaktu: "Juli 2019  - Juli 2021",
    deskripsi:
      "Mempelajari berbagai bahasa pemrograman web seperti HTML, CSS, JavaScript, PHP, dan framework terkait. Selama studi, mengembangkan proyek yang meningkatkan keterampilan teknis dan pemahaman tentang pengembangan aplikasi web, termasuk pemrograman sisi server dengan PHP.",
  },
  {
    jenis: "edukasi",
    intuisi: "Universitas Jenderal Achmad Yani",
    tautanLogo: Logo5,
    pencapaian: "Fullstack Mobile Developer",
    jangkaWaktu: "Juli 2022  - Sekarang",
    deskripsi:
      "Mempelajari pengembangan aplikasi mobile dengan pendekatan fullstack, mencakup Java untuk pengembangan native Android dan React Native untuk cross-platform. Fokus pada pembuatan aplikasi responsif, user-friendly, dan berkinerja tinggi, dengan penerapan praktik terbaik seperti arsitektur modular, pengelolaan state, optimasi performa, dan keamanan data pengguna.",
  },

  {
    jenis: "keahlian",
    nama: "HTML",
    ikon: <FaHtml5 />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari struktur web dan bagaimana elemen-elemen HTML membentuk konten halaman. Penguasaan HTML memungkinkan saya untuk merancang dan mengembangkan antarmuka web yang fungsional.",
  },
  {
    jenis: "keahlian",
    nama: "CSS",
    ikon: <FaCss3Alt />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari desain web melalui CSS untuk mengatur tata letak, warna, dan tipografi. Dengan keterampilan ini, saya mampu menciptakan tampilan visual yang menarik dan responsif untuk situs web.",
  },
  {
    jenis: "keahlian",
    nama: "JavaScript",
    ikon: <FaJs />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari pemrograman web menggunakan JavaScript untuk menambah interaktivitas dan dinamika pada situs. Kemampuan ini mendukung pengembangan aplikasi web yang lebih kompleks dan interaktif.",
  },
  {
    jenis: "keahlian",
    nama: "Bootstrap",
    ikon: <FaBootstrap />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari framework Bootstrap untuk membuat tampilan web yang responsif dan interaktif. Keterampilan ini membantu saya dalam membuat tampilan web yang menarik dan interaktif.",
  },
  {
    jenis: "keahlian",
    nama: "PHP",
    ikon: <FaPhp />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari bahasa pemrograman PHP untuk membangun aplikasi web. Keterampilan ini membantu saya dalam membangun aplikasi web yang interaktif dan dinamis.",
  },
  {
    jenis: "keahlian",
    nama: "Laravel",
    ikon: <FaLaravel />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari framework Laravel untuk membangun aplikasi web. Keterampilan ini membantu saya dalam membangun aplikasi web yang interaktif dan dinamis.",
  },
  {
    jenis: "keahlian",
    nama: "MySQL",
    ikon: <SiMysql />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari database MySQL untuk membangun aplikasi web. Keterampilan ini membantu saya dalam membangun aplikasi web yang interaktif dan dinamis.",
  },
  {
    jenis: "keahlian",
    nama: "Java",
    ikon: <FaJava />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari bahasa pemrograman Java untuk membuat aplikasi berbasis objek. Keterampilan ini membantu saya dalam membangun aplikasi web yang interaktif dan efektif.",
  },
  {
    jenis: "keahlian",
    nama: "C++",
    ikon: <SiCplusplus />,
    jangkaWaktu: "Dipelajari Sejak 2019",
    deskripsi:
      "Mempelajari bahasa pemrograman C++ untuk membuat aplikasi berbasis objek. Keterampilan ini membantu saya dalam membangun aplikasi web yang interaktif dan efektif.",
  },
  {
    jenis: "keahlian",
    nama: "Figma",
    ikon: <FaFigma />,
    jangkaWaktu: "Dipelajari Sejak 2023",
    deskripsi:
      "Mempelajari desain web menggunakan Figma untuk membuat prototipe dan antarmuka pengguna. Keterampilan ini membantu saya dalam mendesain pengalaman pengguna yang intuitif dan estetis.",
  },
  {
    jenis: "keahlian",
    nama: "React",
    ikon: <FaReact />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari library React untuk membangun antarmuka pengguna yang efisien dan dinamis. Dengan React, saya dapat mengembangkan aplikasi web yang memiliki performa tinggi dan pengelolaan status yang efektif.",
  },
  {
    jenis: "keahlian",
    nama: "Node JS",
    ikon: <FaNodeJs />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari framework Node JS untuk membangun aplikasi server-side. Keterampilan ini membantu saya dalam membuat aplikasi web yang cepat dan responsif.",
  },
  {
    jenis: "keahlian",
    nama: "Next JS",
    ikon: <SiNextdotjs />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari framework Next JS untuk membangun aplikasi web dinamis. Keterampilan ini membantu saya dalam membuat aplikasi web yang responsif dan dinamis.",
  },
  {
    jenis: "keahlian",
    nama: "Firebase",
    ikon: <SiFirebase />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari platform Firebase untuk membangun aplikasi web. Keterampilan ini membantu saya dalam membuat aplikasi web yang interaktif dan efektif.",
  },
  {
    jenis: "keahlian",
    nama: "Tailwind CSS",
    ikon: <SiTailwindcss />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari framework Tailwind CSS untuk membangun antarmuka pengguna yang responsif dan estetis. Keterampilan ini membantu saya dalam membuat tampilan web yang menarik dan interaktif.",
  },
  {
    jenis: "keahlian",
    nama: "TypeScript",
    ikon: <SiTypescript />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari bahasa pemrograman TypeScript untuk membangun aplikasi web yang lebih kompleks dan efektif. Keterampilan ini membantu saya dalam membangun aplikasi web yang stabil dan efektif.",
  },
  {
    jenis: "keahlian",
    nama: "Three JS",
    ikon: <SiThreedotjs />,
    jangkaWaktu: "Dipelajari Sejak 2024",
    deskripsi:
      "Mempelajari framework Three JS untuk membangun animasi 3D. Keterampilan ini membantu saya dalam membuat tampilan 3D yang interaktif dan responsif.",
  },

  {
    jenis: "setifikat",
    perusahaan: "Basarnas Bengkulu",
    tautanLogo: Logo6,
    posisi: "Fullstack Web Developer",
    jangkaWaktu: "Juni 2024  - Juli 2024",
    deskripsi:
      "Mengembangkan aplikasi Simore (Sistem Monitoring Rescue) dengan fokus pada frontend. Mengimplementasikan sistem manajemen pelaporan dan pelanggaran, sistem keamanan, dan integrasi dengan sistem manajemen data.",
  },
];

const KartuKartu = () => {
  return (
    <Tabs
      defaultValue="pengalaman"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="max-w-max mb-[30px]">
        <TabsTrigger value="pengalaman">Pengalaman</TabsTrigger>
        <TabsTrigger value="edukasi">Edukasi</TabsTrigger>
        <TabsTrigger value="keahlian">Keahlian</TabsTrigger>
        <TabsTrigger value="setifikat">Setifikat</TabsTrigger>
      </TabsList>

      <TabsContent value="pengalaman" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {perjalananSaya
              .filter((nilai) => nilai.jenis === "pengalaman")
              .map((kartu, indeks) => {
                return <Kartu key={indeks} {...kartu} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="edukasi" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {perjalananSaya
              .filter((nilai) => nilai.jenis === "edukasi")
              .map((kartu, indeks) => {
                return <Kartu key={indeks} {...kartu} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="keahlian" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {perjalananSaya
              .filter((nilai) => nilai.jenis === "keahlian")
              .map((kartu, indeks) => {
                return <Kartu key={indeks} {...kartu} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="setifikat" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {perjalananSaya
              .filter((nilai) => nilai.jenis === "setifikat")
              .map((kartu, indeks) => {
                return <Kartu key={indeks} {...kartu} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
};

export default KartuKartu;
