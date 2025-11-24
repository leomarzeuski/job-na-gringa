"use client"

import { useState, useEffect } from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, CheckCircle2, Star, Briefcase, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 selection:bg-blue-100">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] opacity-20 animate-pulse-slow" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_600px_at_0%_0%,#e0f2fe,transparent)] opacity-30" />
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="flex-1 text-center lg:text-left z-10">

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8 hover:shadow-md transition-all cursor-default group"
                        >
                            <div className="flex -space-x-3 group-hover:space-x-[-8px] transition-all duration-300">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-slate-600 pl-2">
                                Junte-se a <span className="text-blue-600 font-bold">+1.000</span> alunos aprovados
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                        >
                            Sua Carreira Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-300% animate-gradient">
                                Começa Agora.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            O mapa completo para desenvolvedores brasileiros conquistarem vagas remotas em dólar e euro. <span className="font-semibold text-slate-900">Sem inglês fluente.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                <Button
                                    size="lg"
                                    className="relative h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Quero Minha Vaga Internacional
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 px-4">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Garantia de 7 dias</span>
                            </div>
                        </motion.div>

                        {/* Social Proof Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 pt-8 border-t border-slate-200/60"
                        >
                            <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Nossos alunos estão em:</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {["Google", "Microsoft", "Amazon", "Spotify", "Uber"].map((company) => (
                                    <span key={company} className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-default">{company}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual/Image */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateX: 10, rotateY: -10 }}
                            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ y: isMobile ? 0 : y1 }}
                            className="relative z-10"
                        >
                            {/* Main Card */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-blue-900/10 transition-shadow duration-500">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 bg-200% animate-gradient" />

                                {/* Header of the mock interface */}
                                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
                                            <Briefcase className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-lg">Nova Proposta</p>
                                            <p className="text-xs text-slate-500 font-medium">Acabou de chegar</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100 flex items-center gap-1 animate-pulse">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        Aprovado
                                    </div>
                                </div>

                                {/* Content of the mock interface */}
                                <div className="space-y-6">
                                    <div className="text-center py-6 bg-slate-50/50 rounded-2xl border border-slate-100">
                                        <p className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">Salário Anual Proposto</p>
                                        <p className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">$120,000<span className="text-3xl text-slate-400">.00</span></p>
                                        <div className="flex items-center justify-center gap-2 mt-3 text-sm text-slate-600">
                                            <Globe className="w-4 h-4 text-blue-500" />
                                            <span className="font-medium">Remoto • United States</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                                            <p className="text-xs text-slate-500 mb-1 font-medium">Cargo</p>
                                            <p className="font-bold text-slate-900">Senior Dev</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                                            <p className="text-xs text-slate-500 mb-1 font-medium">Bônus</p>
                                            <p className="font-bold text-slate-900">Signing Bonus</p>
                                        </div>
                                    </div>

                                    <div className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-center shadow-lg shadow-slate-900/20 cursor-pointer hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group/btn">
                                        Aceitar Proposta
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements with Parallax */}
                            <motion.div
                                style={{ y: y2 }}
                                className="absolute -top-12 right-4 md:-right-16 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 max-w-[200px] hidden sm:flex"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 leading-tight">Entrevista Agendada</p>
                                    <p className="text-xs text-slate-500 mt-1">Google Meet • 14:00</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 hidden sm:flex"
                            >
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 leading-tight">Perfil Otimizado</p>
                                    <p className="text-xs text-slate-500 mt-1">Top 1% do LinkedIn</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    )
}
