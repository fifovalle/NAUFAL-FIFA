import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
// KOMPONEN SAYA
import AnimasiTeks from "@/components/animasiTeks";
// GAMBAR SAYA
import Gambar from "@/public/assets/testimoni/1.jpg";
import Gambar2 from "@/public/assets/testimoni/2.jpg";
import Gambar3 from "@/public/assets/testimoni/3.jpg";
import Gambar4 from "@/public/assets/testimoni/4.jpeg";
import Gambar5 from "@/public/assets/testimoni/5.jpg";

const penggeser = [
  {
    gambar: Gambar,
    nama: "Mas Zahran",
    pesan:
      "Terima kasih atas layanan dan produk yang luar biasa! PTSP sangat membantu pekerjaan kami menjadi lebih efisien. Sukses terus!",
  },
  {
    gambar: Gambar,
    nama: "Mas Zahran",
    pesan:
      "Terima kasih banyak atas dedikasi dan kerja keras yang telah kamu berikan dalam menyelesaikan proyek pengelolaan data alat-alat BMKG dan titik koordinatnya. Proyek ini tidak hanya berjalan lancar, tetapi juga memberikan manfaat yang besar. Saya sangat menghargai semua usaha yang telah kamu lakukan!",
  },
  {
    gambar: Gambar2,
    nama: "Pa Muslikun",
    pesan:
      "SIMORE yang kami beli dari Anda benar-benar memberikan kemudahan dalam proses administrasi kami. Produk yang sangat bermanfaat!",
  },
  {
    gambar: Gambar3,
    nama: "Pa Budi",
    pesan:
      "Luar biasa! Dapur Ku menghadirkan solusi dapur modern yang praktis dan inovatif. Kami sangat puas dengan produk ini!",
  },
  {
    gambar: Gambar4,
    nama: "Pa Nano",
    pesan:
      "NDARU FARM benar-benar memudahkan manajemen pertanian kami. Terima kasih atas produk yang sangat bermanfaat dan inovatif!",
  },
  {
    gambar: Gambar5,
    nama: "Pa Agus",
    pesan:
      "Dengan bangga kami mengumumkan bahwa proyek FSI telah berhasil diselesaikan! Terima kasih kepada semua pihak yang terlibat dalam proses ini.",
  },
];

const Testimonial = () => {
  const [refprensiiPenggesek, setRefprensiPenggesek] = useState(null);
  const [penggeserAktif, setPenggeserAktif] = useState(0);

  const tanganiSebelumnya = useCallback(() => {
    refprensiiPenggesek?.slidePrev();
  }, [refprensiiPenggesek]);

  const tanganiSelanjutnya = useCallback(() => {
    refprensiiPenggesek?.slideNext();
  }, [refprensiiPenggesek]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimasiTeks
          teks="Apa Yang Meraka Katakan"
          gayaTeks="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* INFO PENGGESER */}
          <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <ImQuotesLeft className="text-9xl text-aksen/20 leading-none mb-4" />
            <h3 className="h3 mb-2">{penggeser[penggeserAktif].nama}</h3>
            <p className="mb-8 max-w-[360px]">
              {penggeser[penggeserAktif].pesan}
            </p>

            {
              <div className="flex gap-3">
                <button
                  onClick={tanganiSebelumnya}
                  className="text-2xl bg-aksen w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-aksen-melayang transition-all duration-300"
                >
                  <FiArrowLeft />
                </button>

                <button
                  onClick={tanganiSelanjutnya}
                  className="text-2xl bg-aksen w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-aksen-melayang transition-all duration-300"
                >
                  <FiArrowRight />
                </button>
              </div>
            }
          </div>
          {/* PENGGESER */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setRefprensiPenggesek}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={(penggeser) =>
              setPenggeserAktif(penggeser.realIndex)
            }
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {penggeser.map((penggeser, indeks) => (
              <SwiperSlide key={indeks} className="h-full select-none">
                <div className="w-full h-full flex items-end">
                  <div
                    className={`${
                      penggeserAktif === indeks ? "h-full" : "h-[248px]"
                    } flex items-end rounded-xl overflow-hidden transition-all duration-500 relative w-full`}
                  >
                    <Image
                      src={penggeser.gambar}
                      className="object-cover object-center"
                      quality={100}
                      fill
                      alt="Gambar"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
