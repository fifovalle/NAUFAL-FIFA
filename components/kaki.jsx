import React from "react";
import Logo from "@/components/logo";

const Kaki = () => {
  return (
    <footer className="py-12 bg-utama">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <Logo cerah={true} />
          <div className="text-white/70 font-light">
            Hakcipta &copy; {new Date().getFullYear()}. Oleh Naufal FIFA.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Kaki;
