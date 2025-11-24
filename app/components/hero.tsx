"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Content */}
                    <div className="flex-1 text-center lg:text-left z-10">

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-blue-900">Junte-se a +1.000 alunos aprovados</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                        >
                            Sua Carreira Internacional <br />
                            <span className="text-blue-600">Começa Aqui.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Pare de enviar currículos sem resposta. Use nossa metodologia validada para conseguir entrevistas e ofertas de emprego em dólar.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                className="h-16 px-8 text-lg font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                            >
                                Quero Ganhar em Dólar
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Garantia de 7 dias</span>
                            </div>
                        </motion.div>

                        {/* Social Proof Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 pt-8 border-t border-slate-100"
                        >
                            <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Nossos alunos trabalham em:</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder Logos - Replace with real SVGs */}
                                <span className="text-xl font-bold text-slate-800">Google</span>
                                <span className="text-xl font-bold text-slate-800">Microsoft</span>
                                <span className="text-xl font-bold text-slate-800">Amazon</span>
                                <span className="text-xl font-bold text-slate-800">Spotify</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                            {/* Mockup of Success/Dashboard */}
                            <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                                <div className="text-center p-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="w-10 h-10 text-green-600 fill-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Oferta Recebida!</h3>
                                    <p className="text-slate-600">Senior Software Engineer</p>
                                    <p className="text-green-600 font-bold text-xl mt-2">$120,000 / ano</p>
                                </div>
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Currículo Otimizado</p>
                                    <p className="text-xs text-slate-500">Score: 98/100</p>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                    <Star className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">LinkedIn Premium</p>
                                    <p className="text-xs text-slate-500">Perfil Campeão</p>
                                </div>
                            </div>
                        </div>

                        {/* Background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


