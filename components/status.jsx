import React from "react";
// KOMPONEN SAYA
import KontenStatus from "@/components/kontenStatus";

const statusSaya = [
  {
    teks: "+",
    jumlah: 1,
    deskripsi: "Tahun Pengalaman",
  },
  {
    teks: "+",
    jumlah: 78,
    deskripsi: "Proyek",
  },
  {
    teks: "%",
    jumlah: 95,
    deskripsi: "Pelanggan Puas",
  },
];

const Status = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statusSaya.map((status, indeks) => (
        <KontenStatus
          key={indeks}
          jumlah={status.jumlah}
          teks={status.teks}
          deskripsi={status.deskripsi}
        />
      ))}
    </section>
  );
};

export default Status;
