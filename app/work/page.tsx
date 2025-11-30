"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { motion, easeIn } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Constants
import { projects } from "@/constants/work";

const Home = () => {
  const categories = ["frontend", "fullstack", "Iot"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* HEADING */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>

        {/* TABS */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* TABS LIST */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-12 px-6 rounded-full cursor-pointer"
              >
                {category === "Iot" ? "Internet of Things" : category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* TABS CONTENT */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              const filteredProjects = projects.filter(
                (project) => project.category === category
              );

              return (
                <TabsContent
                  key={category}
                  value={category}
                  className="mb-10 xl:mb-0"
                >
                  {filteredProjects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[300px] text-center text-gray-400">
                      <p className="text-lg">
                        No projects available in this category yet.
                      </p>
                    </div>
                  ) : (
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="h-max xl:h-[460px]"
                    >
                      {filteredProjects.map((project) => (
                        <SwiperSlide
                          key={project.id}
                          className="h-full cursor-grab mb-10 xl:mb-0"
                        >
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                            {/* PROJECT INFO */}
                            <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                              <h3 className="h3">{project.title}</h3>
                              <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                <p className="mb-4">Technologies Used</p>
                                <ul className="flex flex-wrap gap-4">
                                  {project.tech.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center gap-4 bg-[#a883ff]/13 h-7 px-3.5 rounded-full"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4 items-start">
                                {project.link && (
                                  <Link
                                    target="_blank"
                                    href={project.link}
                                    rel="noopener noreferrer"
                                  >
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdOutlineArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                )}
                                {project.github && (
                                  <Link
                                    target="_blank"
                                    href={project.github}
                                    rel="noopener noreferrer"
                                  >
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                )}
                              </div>
                            </div>

                            {/* PROJECT IMAGE */}
                            <div className="w-full relative aspect-video mt-6 rounded-lg overflow-hidden">
                              <Image
                                fill
                                priority
                                src={project.image}
                                alt={project.title}
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Home;
