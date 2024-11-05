"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// KOMPONEN SAYA
import AnimasiTeks from "@/components/animasiTeks";
import KontenPekerjaan from "@/components/kontenPekerjaan";
// GAMBAR SAYA
import Gambar from "@/public/assets/pekerjaan/proyek1.png";
import Gambar2 from "@/public/assets/pekerjaan/proyek2.png";
import Gambar3 from "@/public/assets/pekerjaan/proyek3.png";
import Gambar4 from "@/public/assets/pekerjaan/proyek4.png";
import Gambar5 from "@/public/assets/pekerjaan/proyek5.png";
import Gambar6 from "@/public/assets/pekerjaan/proyek6.png";
import Gambar7 from "@/public/assets/pekerjaan/proyek7.png";
import Gambar8 from "@/public/assets/pekerjaan/proyek8.png";
import Gambar9 from "@/public/assets/pekerjaan/proyek9.png";
import Gambar10 from "@/public/assets/pekerjaan/proyek10.png";
import Gambar11 from "@/public/assets/pekerjaan/proyek11.png";
import Gambar12 from "@/public/assets/pekerjaan/proyek12.png";
import Gambar13 from "@/public/assets/pekerjaan/proyek13.png";
import Gambar14 from "@/public/assets/pekerjaan/proyek14.png";
import Gambar15 from "@/public/assets/pekerjaan/proyek15.png";
import Gambar16 from "@/public/assets/pekerjaan/proyek16.png";
import Gambar17 from "@/public/assets/pekerjaan/proyek17.png";
import Gambar18 from "@/public/assets/pekerjaan/proyek18.png";
import Gambar19 from "@/public/assets/pekerjaan/proyek19.png";
import Gambar20 from "@/public/assets/pekerjaan/proyek20.png";
import Gambar21 from "@/public/assets/pekerjaan/proyek21.png";
import Gambar22 from "@/public/assets/pekerjaan/proyek22.png";
import Gambar23 from "@/public/assets/pekerjaan/proyek23.png";
import Gambar24 from "@/public/assets/pekerjaan/proyek24.png";
import Gambar25 from "@/public/assets/pekerjaan/proyek25.png";
import Gambar26 from "@/public/assets/pekerjaan/proyek26.jpg";
import Gambar27 from "@/public/assets/pekerjaan/proyek27.png";
import Gambar28 from "@/public/assets/pekerjaan/proyek28.png";
import Gambar29 from "@/public/assets/pekerjaan/proyek29.png";
import Gambar30 from "@/public/assets/pekerjaan/proyek30.png";
import Gambar31 from "@/public/assets/pekerjaan/proyek31.png";
import Gambar32 from "@/public/assets/pekerjaan/proyek32.png";
import Gambar33 from "@/public/assets/pekerjaan/proyek33.png";
import Gambar34 from "@/public/assets/pekerjaan/proyek34.png";
import Gambar35 from "@/public/assets/pekerjaan/proyek35.png";
import Gambar36 from "@/public/assets/pekerjaan/proyek36.png";
import Gambar37 from "@/public/assets/pekerjaan/proyek37.png";
import Gambar38 from "@/public/assets/pekerjaan/proyek38.png";
import Gambar39 from "@/public/assets/pekerjaan/proyek39.png";
import Gambar40 from "@/public/assets/pekerjaan/proyek40.png";
import Gambar41 from "@/public/assets/pekerjaan/proyek41.png";
import Gambar42 from "@/public/assets/pekerjaan/proyek42.png";
import Gambar43 from "@/public/assets/pekerjaan/proyek43.png";
import Gambar44 from "@/public/assets/pekerjaan/proyek44.png";
import Gambar45 from "@/public/assets/pekerjaan/proyek45.png";
import Gambar46 from "@/public/assets/pekerjaan/proyek46.png";
import Gambar47 from "@/public/assets/pekerjaan/proyek47.png";
import Gambar48 from "@/public/assets/pekerjaan/proyek48.png";
import Gambar49 from "@/public/assets/pekerjaan/proyek49.png";
import Gambar50 from "@/public/assets/pekerjaan/proyek50.png";
import Gambar51 from "@/public/assets/pekerjaan/proyek51.png";
import Gambar52 from "@/public/assets/pekerjaan/proyek52.png";
import Gambar53 from "@/public/assets/pekerjaan/proyek53.png";
import Gambar54 from "@/public/assets/pekerjaan/proyek54.png";
import Gambar55 from "@/public/assets/pekerjaan/proyek55.png";
import Gambar56 from "@/public/assets/pekerjaan/proyek56.png";
import Gambar57 from "@/public/assets/pekerjaan/proyek57.png";
import Gambar58 from "@/public/assets/pekerjaan/proyek58.png";
import Gambar59 from "@/public/assets/pekerjaan/proyek59.png";
import Gambar60 from "@/public/assets/pekerjaan/proyek60.png";
import Gambar61 from "@/public/assets/pekerjaan/proyek61.jpg";
import Gambar62 from "@/public/assets/pekerjaan/proyek62.png";
import Gambar63 from "@/public/assets/pekerjaan/proyek63.png";
import Gambar64 from "@/public/assets/pekerjaan/proyek64.png";
import Gambar65 from "@/public/assets/pekerjaan/proyek65.png";
import Gambar66 from "@/public/assets/pekerjaan/proyek66.png";
import Gambar67 from "@/public/assets/pekerjaan/proyek67.png";
import Gambar68 from "@/public/assets/pekerjaan/proyek68.jpg";
import Gambar69 from "@/public/assets/pekerjaan/proyek69.png";
import Gambar70 from "@/public/assets/pekerjaan/proyek70.png";
import Gambar71 from "@/public/assets/pekerjaan/proyek71.png";
import Gambar72 from "@/public/assets/pekerjaan/proyek72.png";
import Gambar73 from "@/public/assets/pekerjaan/proyek73.png";
import Gambar74 from "@/public/assets/pekerjaan/proyek74.png";
import Gambar75 from "@/public/assets/pekerjaan/proyek75.png";
import Gambar76 from "@/public/assets/pekerjaan/proyek76.png";
import Gambar77 from "@/public/assets/pekerjaan/proyek77.png";
import Gambar78 from "@/public/assets/pekerjaan/proyek78.png";

const PekerjaanSaya = [
  {
    tautan: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI.git",
    kategori: "Website",
    gambar: Gambar,
    judul: "Portofolio Versi 1.0",
    tanggal: "2024-01-01",
  },
  {
    tautan:
      "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-2.0.git",
    kategori: "Website",
    gambar: Gambar2,
    judul: "Portofolio Versi 2.0",
    tanggal: "2024-01-02",
  },
  {
    tautan:
      "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-3.0.git",
    kategori: "Website",
    gambar: Gambar3,
    judul: "Portofolio Versi 3.0",
    tanggal: "2024-01-03",
  },
  {
    tautan:
      "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-4.0.git",
    kategori: "Website",
    gambar: Gambar4,
    judul: "Portofolio Versi 4.0",
    tanggal: "2024-01-04",
  },
  {
    tautan:
      "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-5.0.git",
    kategori: "Website",
    gambar: Gambar5,
    judul: "Portofolio Versi 5.0",
    tanggal: "2024-01-05",
  },
  {
    tautan: "https://github.com/fifovalle/WEBSITE-DASHBOARD-ADMIN.git",
    kategori: "Website",
    gambar: Gambar6,
    judul: "Dashboard Admin Barokah",
    tanggal: "2024-01-06",
  },
  {
    tautan: "https://github.com/fifovalle/ATM-SEDERHANA.git",
    kategori: "Website",
    gambar: Gambar7,
    judul: "ATM Sederhana",
    tanggal: "2024-01-02",
  },
  {
    tautan: "https://github.com/fifovalle/HALAMAN-PEMELIHARAAN.git",
    kategori: "UI",
    gambar: Gambar8,
    judul: "Halaman Pemeliharaan",
    tanggal: "2024-01-02",
  },
  {
    tautan: "https://github.com/fifovalle/UI-KARTU-KREDIT.git",
    kategori: "UI",
    gambar: Gambar9,
    judul: "Kartu Kredit",
    tanggal: "2024-01-02",
  },
  {
    tautan: "https://github.com/fifovalle/WEBSITE-LANDING-PAGE.git",
    kategori: "Website",
    gambar: Gambar10,
    judul: "Landing Page",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PENGATURAN-SISTEM.git",
    kategori: "UI",
    gambar: Gambar11,
    judul: "Pengaturan Sistem",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PENGATURAN-SISTEM.git",
    kategori: "UI",
    gambar: Gambar12,
    judul: "Navigasi Bar",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-NAVIGASI-BAR-VERSI-2.0.git",
    kategori: "UI",
    gambar: Gambar13,
    judul: "Navigasi Bar Versi 2.0",
    tanggal: "2024-01-20",
  },
  {
    tautan:
      "https://github.com/fifovalle/UI-FORMULIR-PENGECEKAN-KATA-SANDI.git",
    kategori: "UI",
    gambar: Gambar14,
    judul: "Pengecekan Kata Sandi",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PEMUAT.git",
    kategori: "UI",
    gambar: Gambar15,
    judul: "Pemuat",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-HOVER-KARTU-RINCIAN.git",
    kategori: "UI",
    gambar: Gambar16,
    judul: "Hover Rincian",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PEMUAT-VERSI-2.0.git",
    kategori: "UI",
    gambar: Gambar17,
    judul: "Pemuat Versi 2.0",
    tanggal: "2024-01-20",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PEMUAT-3D.git",
    kategori: "UI",
    gambar: Gambar18,
    judul: "Pemuat 3D",
    tanggal: "2024-01-02",
  },
  {
    tautan: "https://github.com/fifovalle/UI-KARTU-PRODUK.git",
    kategori: "UI",
    gambar: Gambar19,
    judul: "Kartu Produk",
    tanggal: "2024-01-03",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PRODUK.git",
    kategori: "UI",
    gambar: Gambar20,
    judul: "Produk",
    tanggal: "2024-01-04",
  },
  {
    tautan: "https://github.com/fifovalle/PERMAINAN-ULAR-NEON.git",
    kategori: "UI",
    gambar: Gambar21,
    judul: "Permainan Ular Neon",
    tanggal: "2024-01-06",
  },
  {
    tautan: "https://github.com/fifovalle/UI-TEKS-GLITCH-HOVER.git",
    kategori: "UI",
    gambar: Gambar22,
    judul: "Teks Glitch Hover",
    tanggal: "2024-03-01",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PEMUAT-VERSI-3.0.git",
    kategori: "UI",
    gambar: Gambar23,
    judul: "Pemuat Versi 3.0",
    tanggal: "2024-03-02",
  },
  {
    tautan: "https://github.com/fifovalle/UI-FORM-LOGIN-TEMA-HACKER.git",
    kategori: "UI",
    gambar: Gambar24,
    judul: "Formulir Login Tema Hacker",
    tanggal: "2024-03-03",
  },
  {
    tautan: "https://github.com/fifovalle/UI-PEMUAT-VERSI-4.0.git",
    kategori: "UI",
    gambar: Gambar25,
    judul: "Pemuat Versi 4.0",
    tanggal: "2024-03-04",
  },
  {
    tautan: "https://github.com/fifovalle/UI-KARTU-PRODUK-VERSI-2.0.git",
    kategori: "UI",
    gambar: Gambar26,
    judul: "Kartu Produk Versi 2.0",
    tanggal: "2024-03-05",
  },
  {
    tautan: "https://github.com/fifovalle/UI-KARTU-PRODUK-VERSI-2.0.git",
    kategori: "UI",
    gambar: Gambar27,
    judul: "Kartu Produk Versi 2.0",
    tanggal: "2024-03-06",
  },
];

const Pekerjaan = () => {
  const kategoriUnik = Array.from(
    new Set(PekerjaanSaya.map((pekerjaan) => pekerjaan.kategori))
  );

  const dataTab = [
    { kategori: "Semua" },
    ...kategoriUnik.map((kategori) => ({ kategori })),
  ];

  const [nilaiTab, setNilaiTab] = useState("Semua");
  const [perlihatkanKonten, setPerlihatkanKonten] = useState(6);

  const pekerjaanTerurut = PekerjaanSaya.map((pekerjaan) => ({
    ...pekerjaan,
    tanggal: new Date(pekerjaan.tanggal),
  })).sort((a, b) => b.tanggal.getTime() - a.tanggal.getTime());

  const filterPekerjaan =
    nilaiTab === "Semua"
      ? pekerjaanTerurut
      : pekerjaanTerurut.filter((konten) => konten.kategori === nilaiTab);

  const kotenSelengkapnya = () => {
    setPerlihatkanKonten((sebelumnya) => sebelumnya + 3);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="Pekerjaan">
      <div className="container mx-auto">
        <Tabs defaultValue="Semua" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimasiTeks
              teks="Pekerjaan Terbaru Saya"
              gayaTeks="h2 mb-[30px] xl:mb-0"
            />

            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {dataTab.map((tab, indeks) => {
                return (
                  <TabsTrigger
                    key={indeks}
                    value={tab.kategori}
                    className="capitalize w-[120px]"
                    onClick={() => setNilaiTab(tab.kategori)}
                  >
                    {tab.kategori}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value={nilaiTab} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterPekerjaan
                  .slice(0, perlihatkanKonten)
                  .map((konten, indeks) => (
                    <motion.div
                      key={indeks}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <KontenPekerjaan {...konten} />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {perlihatkanKonten < PekerjaanSaya.length && (
              <div className="flex justify-center mt-12">
                <button onClick={kotenSelengkapnya} className="btn btn-accent">
                  Lihat Selengkapnya
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pekerjaan;
