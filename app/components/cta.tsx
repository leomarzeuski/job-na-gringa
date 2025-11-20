"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Timer } from "lucide-react"
import { CountdownTimer } from "@/app/components/countdown-timer"

export function CTA() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 p-8 md:p-16 text-center">

                    {/* Glow effect inside card */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8">
                            <Timer className="w-4 h-4" />
                            <span className="text-sm font-bold">Restam apenas 8 vagas</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Sua carreira internacional começa <span className="text-blue-400">hoje</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-10">
                            Não perca a oportunidade de transformar sua vida profissional e ganhar em moeda forte.
                        </p>

                        <CountdownTimer />

                        <Button size="lg" className="h-16 px-10 text-xl bg-white text-blue-900 hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Quero Garantir Minha Vaga
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>

                        <p className="mt-6 text-sm text-gray-400">
                            Garantia de 7 dias ou seu dinheiro de volta.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
