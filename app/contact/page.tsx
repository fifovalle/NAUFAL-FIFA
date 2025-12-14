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
  const [serviceValue, setServiceValue] = useState<string>("");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const firstname = formRef.current.firstname.value.trim();
    const lastname = formRef.current.lastname.value.trim();
    const email = formRef.current.email.value.trim();
    const service = serviceValue;
    const message = formRef.current.message.value.trim();

    if (!firstname) {
      toast.error("Please fill in your first name!");
      setIsSubmitting(false);
      return;
    }
    if (!lastname) {
      toast.error("Please fill in your last name!");
      setIsSubmitting(false);
      return;
    }
    if (!email) {
      toast.error("Please fill in your email!");
      setIsSubmitting(false);
      return;
    }
    if (!service) {
      toast.error("Please select a service!");
      setIsSubmitting(false);
      return;
    }
    if (!message) {
      toast.error("Please write your message!");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_5qzuvdq",
        "template_qkktvw9",
        e.currentTarget,
        "m1L6EO-wdPJLc4zNG"
      );

      toast.success("Thank you for your message!");
      formRef.current?.reset();
      setServiceValue("");
    } catch (err) {
      console.error("Email sending error:", err);
      toast.error("Something went wrong, please try again!");
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
            <div className="flex-1 xl:w-150 flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-115">
                  Fill up the form and my team will get in touch shortly.
                </p>
              </div>

              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+62 823-1833-4287</span>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>fifanaufal10@gmail.com</span>
                </div>

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
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                    />
                  </div>

                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    I&apos;m interested in{" "}
                    <span className="text-accent">*</span>
                  </Label>
                  <Select
                    name="service"
                    value={serviceValue}
                    onValueChange={(val) => setServiceValue(val)}
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full h-12! bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="Simple Website">
                        Simple Website
                      </SelectItem>
                      <SelectItem value="Interactive Website">
                        Interactive Website
                      </SelectItem>
                      <SelectItem value="Mobile App">Mobile App</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-40 bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>

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
