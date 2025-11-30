"use client";

import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion, easeIn } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, FormEvent } from "react";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const Home = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_5qzuvdq",
        "template_qkktvw9",
        e.currentTarget,
        "m1L6EO-wdPJLc4zNG"
      );

      toast.success("Pesan berhasil dikirim!");
      formRef.current?.reset();
    } catch (err) {
      console.error("Email sending error:", err);
      toast.error("Terjadi kesalahan, coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* ============== INFO TEXT =============== */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              {/* ============== TEXT =============== */}
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Fill up the form and my team will get in touch shortly.
                </p>
              </div>

              {/* ============== INFO =============== */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* =============== PHONE =============== */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+62 823-1833-4287</span>
                </div>

                {/* =============== EMAIL =============== */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>fifanaufal10@gmail.com</span>
                </div>

                {/* =============== LOCATION =============== */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Bandung, Indonesia</span>
                </div>
              </div>
            </div>

            {/* ============== FORM =============== */}
            <div className="flex-1">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 items-start"
              >
                {/* ============== FIRSTNAME & LASTNAME =============== */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      required
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                    />
                  </div>

                  <div className="w-full">
                    <Label htmlFor="name">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      required
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* ============== EMAIL =============== */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    required
                    id="email"
                    name="email"
                    placeholder="youremial@gmail.com"
                  />
                </div>

                {/* ============== SELECT =============== */}
                <div className="w-full">
                  <Label htmlFor="name">
                    I&apos;m interested in
                    <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full h-12! bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="Internet of Things">
                        Internet of Things
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* ============== TEXT AREA =============== */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Message
                    <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    required
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-40 bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>

                {/* ============== BTN =============== */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-lg btn-accent ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
