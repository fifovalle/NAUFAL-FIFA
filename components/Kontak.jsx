import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimasiTeks from "@/components/animasiTeks";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
// GAMBAR SAYA
import Gambar1 from "@/public/assets/kontak/gambar.jpg";

const Kontak = () => {
    const [state, tanganiPengiriman] = useForm("mkgnjdqo");
    const [tampilkanIkon, setTampilkanIkon] = useState(false);

    const [dataFormulir, setDataFormulir] = useState({
        namaDepan: "",
        namaBelakang: "",
        email: "",
        nomorTelepon: "",
        pesan: "",
    });

    const tanganiPerubahan = (e) => {
        const { name, value } = e.target;
        setDataFormulir({ ...dataFormulir, [name]: value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setTampilkanIkon(true);

            setDataFormulir({
                namaDepan: "",
                namaBelakang: "",
                email: "",
                nomorTelepon: "",
                pesan: "",
            });

            const waktu = setTimeout(() => {
                setTampilkanIkon(false);
            }, 3000);
            return () => clearTimeout(waktu);
        }
    }, [state.succeeded]);

    const tanganiFormulirDiKirim = (e) => {
        e.preventDefault();
        tanganiPengiriman(dataFormulir);
    };

    return (
        <section className="pt-8 xl:pt-12 pb-32" id="Kontak">
            <div className="container mx-auto">
                <div className="flex flex-col items-center xl:flex-row gap-16">
                    <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
                        <AnimasiTeks
                            teks="Ayo Bekerja Sama"
                            gayaTeks="h2 mb-12 text-center xl:text-left"
                        />

                        <form
                            onSubmit={tanganiFormulirDiKirim}
                            className="flex flex-col gap-6 w-full max-w-[480px]"
                        >
                            <div className="flex gap-8">
                                <div className="flex-1">
                                    <label
                                        htmlFor="namaDepan"
                                        className="block mb-2 text-sm font-medium text-utama"
                                    >
                                        Nama Depan{" "}
                                        <span className="text-aksen">*</span>
                                    </label>
                                    <input
                                        onChange={tanganiPerubahan}
                                        type="text"
                                        id="namaDepan"
                                        name="namaDepan"
                                        value={dataFormulir.namaDepan}
                                        className="input"
                                        placeholder="Nama Depan"
                                        required
                                    />
                                </div>

                                <div className="flex-1">
                                    <label
                                        htmlFor="namaBelakang"
                                        className="block mb-2 text-sm font-medium text-utama"
                                    >
                                        Nama Belakang{" "}
                                        <span className="text-aksen">*</span>
                                    </label>
                                    <input
                                        onChange={tanganiPerubahan}
                                        type="text"
                                        id="namaBelakang"
                                        name="namaBelakang"
                                        value={dataFormulir.namaBelakang}
                                        className="input"
                                        placeholder="Nama Belakang"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-utama"
                                >
                                    Email <span className="text-aksen">*</span>
                                </label>
                                <input
                                    onChange={tanganiPerubahan}
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={dataFormulir.email}
                                    className="input"
                                    placeholder="emailAnda@gmail.com"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="nomorTelepon"
                                    className="block mb-2 text-sm font-medium text-utama"
                                >
                                    Nomor Telepon{" "}
                                    <span className="text-aksen">*</span>
                                </label>
                                <input
                                    onChange={tanganiPerubahan}
                                    type="text"
                                    id="nomorTelepon"
                                    name="nomorTelepon"
                                    value={dataFormulir.nomorTelepon}
                                    className="input"
                                    placeholder="+628123456789"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="pesan"
                                    className="block mb-2 text-sm font-medium text-utama"
                                >
                                    Pesan <span className="text-aksen">*</span>
                                </label>
                                <textarea
                                    onChange={tanganiPerubahan}
                                    type="text"
                                    id="pesan"
                                    name="pesan"
                                    value={dataFormulir.pesan}
                                    className="textarea"
                                    placeholder="Tinggalkan Pesanmu Disini..."
                                    rows="5"
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="btn btn-accent flex items-center justify-center gap-2"
                            >
                                {state.submitting ? (
                                    <span>Mengirim...</span>
                                ) : (
                                    <>
                                        <FaCheckCircle
                                            className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                                                tampilkanIkon
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                        />
                                        <span
                                            className={`transition-opacity duration-500 ease-in-out ${
                                                tampilkanIkon
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                            }`}
                                        >
                                            Kirim Pesan
                                        </span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
                        <Image
                            src={Gambar1}
                            fill
                            priority
                            alt="Gambar Kontak"
                            quality={100}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kontak;
