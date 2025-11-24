"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react"

export function CTA() {
    return (
        <section id="cta" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-blue-600 shadow-2xl shadow-blue-900/20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">Método Validado por +1000 alunos</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Pronto para ganhar em <span className="text-blue-200">Dólar ou Euro?</span>
                            </h2>

                            <p className="text-lg text-blue-100 max-w-lg">
                                Pare de perder tempo com processos seletivos que não dão retorno. Tenha acesso ao mapa completo para sua carreira internacional.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Acesso vitalício ao conteúdo",
                                    "Mentoria semanal em grupo",
                                    "Modelos de currículo e cover letter",
                                    "Comunidade exclusiva de networking"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-white">
                                        <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:pl-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-xl"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Garanta sua vaga</h3>
                                    <p className="text-slate-500">Junte-se à próxima turma de sucesso.</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/553192248272?text=Quero%20participar%20do%20pr%C3%A9-lan%C3%A7amento%20do%20Freelancer%20Na%20Gringa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button size="lg" className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/25 transition-all duration-300">
                                            Quero Acessar Agora
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </a>

                                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-4">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        <span>Garantia incondicional de 7 dias</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <div className="flex items-center justify-center -space-x-3 mb-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Aluno" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                            +1k
                                        </div>
                                    </div>
                                    <p className="text-center text-sm text-slate-400">
                                        Junte-se a nossa comunidade global
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
