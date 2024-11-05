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
import Gambar from "@/public/assets/testimoni/testimonial1.jpg";
import Gambar2 from "@/public/assets/testimoni/testimonial2.jpg";
import Gambar3 from "@/public/assets/testimoni/testimonial3.jpg";
import Gambar4 from "@/public/assets/testimoni/testimonial4.jpg";

const penggeser = [
  {
    gambar: Gambar,
    nama: "Mas Zahran",
    pesan:
      "Aplikasi ini sangat membantu saya dalam mengelola pekerjaan sehari-hari. Fitur-fiturnya lengkap dan mudah digunakan!",
  },
  {
    gambar: Gambar2,
    nama: "Pa Muslikun",
    pesan:
      "Desainnya menarik dan user-friendly! Sangat memudahkan saya dalam mengakses informasi yang dibutuhkan.",
  },
  {
    gambar: Gambar3,
    nama: "Pa Budi",
    pesan:
      "Pelayanan dan performa aplikasinya luar biasa. Sangat direkomendasikan untuk kebutuhan sehari-hari.",
  },
  {
    gambar: Gambar4,
    nama: "Pa Nano",
    pesan:
      "Sangat membantu dan memudahkan pekerjaan. Terima kasih untuk tim yang telah membuat aplikasi ini!",
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
