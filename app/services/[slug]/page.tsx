"use client";

import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";
import { notFound } from "next/navigation";
import { motion, easeIn } from "framer-motion";
import { services } from "@/constants/services";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Interfaces
import { DetailProps } from "@/interfaces/detail-props";

const ServiceDetailPage = ({ params }: DetailProps) => {
    const { slug } = use(params);
    const service = services.find((s) => s.slug === slug);
    if (!service) return notFound();

    return (
        <main className="flex h-dvh w-full bg-background">
            <ScrollArea className="flex-1">
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
                    }}
                    className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12"
                >
                    {/* =============== BREADCRUMBS ================ */}
                    <div className="hidden xl:block sticky top-0 z-10 -mx-4 mb-8 border-b bg-background/70 px-4 py-3 backdrop-blur-md md:-mx-8 lg:-mx-12 md:px-8 lg:px-12">
                        <nav className="text-sm text-muted-foreground">
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <Link href="/services" className="hover:underline">
                                Services
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-foreground font-medium">
                                {service.title}
                            </span>
                        </nav>
                    </div>

                    {/* =============== HERO ================ */}
                    <header className="grid grid-cols-1 items-center gap-10 pb-20 md:grid-cols-12 mt-20 xl:mt-8">
                        <div className="md:col-span-8">
                            <div className="mb-6 flex items-center gap-4">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={80}
                                    height={80}
                                    className="drop-shadow"
                                />
                                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                                    {service.title}
                                </h1>
                            </div>
                            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                                {service.description}
                            </p>
                        </div>

                        <aside className="md:col-span-4">
                            <div className="rounded-2xl border bg-card p-6 shadow-sm">
                                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    Key Highlights
                                </h2>
                                <ul className="grid gap-3 text-sm leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                                        Tailored, goal-oriented delivery
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                                        Scalable, future-ready implementation
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                                        Transparent process & communication
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </header>

                    {/* =============== CONTENT ================ */}
                    <section className="grid grid-cols-1 gap-10 pb-24 md:grid-cols-2">
                        <div className="rounded-3xl border bg-card/80 p-8 shadow-sm">
                            <h3 className="mb-4 text-2xl font-semibold">
                                What You Get
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I deliver solutions that are not only functional
                                but also visually refined and technically
                                robust. Each engagement starts by understanding
                                your goals, then translating them into a clear
                                roadmap.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                                <li>
                                    • Discovery → scope, requirements, success
                                    metrics
                                </li>
                                <li>
                                    • Architecture → structured, scalable
                                    systems
                                </li>
                                <li>
                                    • Build & QA → iterative delivery,
                                    measurable results
                                </li>
                                <li>
                                    • Launch & Support → documentation & ongoing
                                    care
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border bg-card/80 p-8 shadow-sm">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Why Partner With Me
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I combine strategic thinking with solid
                                engineering practice. Expect reliable execution,
                                clean code, and interfaces that feel effortless
                                for your users.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "Performance-first",
                                    "Accessible UI",
                                    "Scalable patterns",
                                    "Clear documentation",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border bg-muted/50 px-3 py-1 text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* =============== CALL TO ACTION ================ */}
                    <section className="pb-24 text-center">
                        <blockquote className="mx-auto max-w-3xl rounded-3xl border bg-gradient-to-br from-muted/50 to-muted/30 p-8 italic text-lg leading-relaxed text-muted-foreground md:text-2xl">
                            “Great software doesn’t just work—it inspires
                            confidence, feels intuitive, and scales with your
                            business.”
                        </blockquote>

                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-4">
                                Let’s collaborate on your next big idea
                            </h3>
                            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
                                Reach out and let’s explore how we can transform
                                your vision into a scalable, high-quality
                                digital product.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-md transition hover:scale-105 hover:shadow-lg"
                            >
                                Start a Conversation
                            </Link>
                        </div>
                    </section>
                </motion.section>

                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </main>
    );
};

export default ServiceDetailPage;
