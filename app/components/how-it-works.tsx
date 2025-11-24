"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserCircle, Search, Users, MessageSquare, Wallet, ArrowRight } from "lucide-react"

const steps = [
    {
        id: "01",
        title: "Otimização de Perfil",
        description: "Transformamos seu LinkedIn e currículo em ímãs de recrutadores. Utilizamos palavras-chave estratégicas e formatação ATS (Applicant Tracking System) para garantir que seu perfil seja encontrado pelas melhores empresas.",
        icon: UserCircle,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: "02",
        title: "Busca Estratégica",
        description: "Pare de perder tempo em vagas que não dão retorno. Ensinamos como acessar o 'mercado oculto' de vagas remotas e usar filtros avançados para encontrar oportunidades que pagam em dólar e aceitam brasileiros.",
        icon: Search,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: "03",
        title: "Networking Ativo",
        description: "Não dependa apenas de candidaturas. Aprenda scripts validados para conectar diretamente com hiring managers e recrutadores, conseguindo indicações e furando a fila dos processos seletivos.",
        icon: Users,
        color: "text-green-600",
        bg: "bg-green-100"
    },
    {
        id: "04",
        title: "Entrevista Internacional",
        description: "Perca o medo do inglês. Preparamos você com simulações reais, frameworks para responder perguntas comportamentais (STAR method) e dicas técnicas para passar confiança durante a entrevista.",
        icon: MessageSquare,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        id: "05",
        title: "Oferta e Pagamento",
        description: "O momento da vitória. Ajudamos você a negociar o melhor salário possível e guiamos todo o processo burocrático: contrato internacional (Contractor vs EOR), abertura de conta e recebimento em moeda forte.",
        icon: Wallet,
        color: "text-rose-600",
        bg: "bg-rose-100"
    }
]

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0)

    const ActiveIcon = steps[activeStep].icon

    return (
        <section id="how-it-works" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Seu caminho até a <br />
                        <span className="text-blue-600">Contratação Internacional</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Um processo validado e replicável para você sair do zero e conquistar seu emprego na gringa.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-start">
                    {/* Left Side: Navigation */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border ${activeStep === index
                                    ? "bg-white border-blue-200 shadow-md scale-[1.02]"
                                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200"
                                    }`}
                            >
                                <span className={`text-2xl font-bold transition-colors ${activeStep === index ? "text-blue-600" : "text-slate-300 group-hover:text-slate-400"
                                    }`}>
                                    {step.id}
                                </span>
                                <span className={`text-lg font-semibold transition-colors ${activeStep === index ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                                    }`}>
                                    {step.title}
                                </span>
                                {activeStep === index && (
                                    <motion.div
                                        layoutId="active-arrow"
                                        className="ml-auto"
                                    >
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Content Display */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl min-h-[400px] flex flex-col justify-center relative overflow-hidden"
                            >
                                {/* Background Decoration */}
                                <div className={`absolute top-0 right-0 w-64 h-64 ${steps[activeStep].bg} rounded-bl-full opacity-20 -mr-10 -mt-10 transition-colors duration-500`} />

                                <div className={`w-16 h-16 rounded-2xl ${steps[activeStep].bg} flex items-center justify-center mb-8`}>
                                    <ActiveIcon className={`w-8 h-8 ${steps[activeStep].color}`} />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                                        Passo {steps[activeStep].id}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="text-xl text-slate-600 leading-relaxed">
                                        {steps[activeStep].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
