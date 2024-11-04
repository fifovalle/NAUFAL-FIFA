"use client";
import React, { useEffect } from "react";
// KOMPONEN SAYA
import Beranda from "@/components/Beranda";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Perjalanan from "@/components/perjalanan";
import Pekerjaan from "@/components/pekerjaan";
import Kontak from "@/components/Kontak";
import DaftarTetap from "@/components/daftarTetap";

const Utama = () => {
  useEffect(() => {
    const gulirLokomotif = async () => {
      const lokomotif = (await import("locomotive-scroll")).default;
      new lokomotif();
    };

    gulirLokomotif();
  }, []);

  return (
    <>
      <Beranda />
      <DaftarTetap />
      <Layanan />
      <Tentang />
      <Perjalanan />
      <Pekerjaan />
      <Kontak />

      <div className="h-[3000px]"></div>
    </>
  );
};

export default Utama;
