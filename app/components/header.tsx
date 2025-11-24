"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const closeMenu = () => setIsMobileMenuOpen(false)

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group z-50" onClick={closeMenu}>
                    <div className="relative w-32 md:w-40 h-10 md:h-12 transition-all duration-300">
                        <Image
                            src="/logo-full.png"
                            alt="Emprego Na Gringa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="#how-it-works">Como Funciona</NavLink>
                    <NavLink href="#testimonials">Depoimentos</NavLink>
                    <NavLink href="#faq">FAQ</NavLink>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="#cta">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 font-bold rounded-full px-6">
                            Começar Agora
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-slate-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 md:hidden flex flex-col gap-4"
                        >
                            <nav className="flex flex-col gap-2">
                                <MobileNavLink href="#how-it-works" onClick={closeMenu}>Como Funciona</MobileNavLink>
                                <MobileNavLink href="#testimonials" onClick={closeMenu}>Depoimentos</MobileNavLink>
                                <MobileNavLink href="#faq" onClick={closeMenu}>FAQ</MobileNavLink>
                            </nav>
                            <div className="pt-4 border-t border-slate-100">
                                <Link href="#cta" onClick={closeMenu} className="block w-full">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-6">
                                        Começar Agora
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group">
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
        </Link>
    )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block p-4 text-lg font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all"
        >
            {children}
        </Link>
    )
}
