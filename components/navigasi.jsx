import React from "react";
import { Link as ScrollLink } from "react-scroll";

const tautanNavigasi = [
  {
    nama: "Beranda",
  },
  {
    nama: "Tentang Saya",
  },
  {
    nama: "Perjalanan",
  },
  {
    nama: "Pekerjaan",
  },
  {
    nama: "Kontak",
  },
];

const Navigasi = ({ gayaWadah, gayaDaftar, gayaTautan, pengintai }) => {
  return (
    <nav className={gayaWadah}>
      <ul className={gayaDaftar}>
        {tautanNavigasi.map((tautan, indeks) => (
          <ScrollLink
            spy={pengintai}
            key={indeks}
            activeClass="active"
            to={tautan.nama}
            smooth={true}
            className={gayaTautan}
            onMouseEnter={(e) => {
              if (tautan.nama === "Beranda") e.target.style.color = "#7edad2";
            }}
            onMouseLeave={(e) => {
              if (tautan.nama === "Beranda") e.target.style.color = "";
            }}
          >
            {tautan.nama}
          </ScrollLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigasi;
