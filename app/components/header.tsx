"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-40 h-12 transition-all duration-300">
                        <Image
                            src="/logo-full.png"
                            alt="Emprego Na Gringa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                        Como Funciona
                    </Link>
                    <Link href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                        Depoimentos
                    </Link>
                    <Link href="#faq" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                        FAQ
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#cta">
                        <Button className="hidden sm:flex bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-md shadow-amber-500/20 font-bold">
                            Começar Agora
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.header>
    )
}
