"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserCircle, Search, Users, MessageSquare, Wallet, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/app/components/ui/button"

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
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const ActiveIcon = steps[activeStep].icon

    // Auto-scroll to active item on mobile with centering logic
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeElement = scrollContainerRef.current.children[activeStep] as HTMLElement
            if (activeElement) {
                const container = scrollContainerRef.current
                // Calculate position to center the element
                const scrollLeft = activeElement.offsetLeft - (container.clientWidth / 2) + (activeElement.clientWidth / 2)

                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                })
            }
        }
    }, [activeStep])

    const nextStep = () => {
        if (activeStep < steps.length - 1) setActiveStep(prev => prev + 1)
    }

    const prevStep = () => {
        if (activeStep > 0) setActiveStep(prev => prev - 1)
    }

    return (
        <section id="how-it-works" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Seu caminho até a <br />
                        <span className="text-blue-600">Contratação Internacional</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Um processo validado e replicável para você sair do zero e conquistar seu emprego na gringa.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto items-start relative">

                    {/* Desktop Timeline Line */}
                    <div className="hidden lg:block absolute left-[16.5%] top-10 bottom-10 w-0.5 bg-slate-200 -z-10" />

                    {/* Left Side: Navigation (Horizontal Scroll on Mobile) */}
                    <div
                        ref={scrollContainerRef}
                        className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x hide-scrollbar z-10"
                    >
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`group flex-shrink-0 lg:flex-shrink lg:w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border snap-center min-w-[260px] lg:min-w-0 bg-white ${activeStep === index
                                    ? "border-blue-600 shadow-md ring-1 ring-blue-600"
                                    : "border-slate-200 hover:border-blue-300 hover:shadow-sm"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors shrink-0 ${activeStep === index ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                                    }`}>
                                    {step.id}
                                </div>

                                <span className={`text-lg font-semibold transition-colors ${activeStep === index ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                                    }`}>
                                    {step.title}
                                </span>
                                {activeStep === index && (
                                    <motion.div
                                        className="ml-auto hidden lg:block"
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
                                className="bg-white rounded-3xl p-6 md:p-12 border border-slate-100 shadow-xl min-h-[400px] flex flex-col justify-center relative overflow-hidden"
                            >
                                {/* Background Decoration */}
                                <div className={`absolute top-0 right-0 w-64 h-64 ${steps[activeStep].bg} rounded-bl-full opacity-20 -mr-10 -mt-10 transition-colors duration-500`} />

                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${steps[activeStep].bg} flex items-center justify-center mb-6 md:mb-8`}>
                                    <ActiveIcon className={`w-7 h-7 md:w-8 md:h-8 ${steps[activeStep].color}`} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                            Passo {steps[activeStep].id}
                                        </span>
                                        <div className="h-px flex-1 bg-slate-100" />
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                        {steps[activeStep].description}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span>Conteúdo prático e validado</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile Navigation Buttons */}
                        <div className="flex justify-between mt-6 lg:hidden gap-4">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={activeStep === 0}
                                className="flex-1 h-12 rounded-xl border-slate-200 text-slate-600"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Anterior
                            </Button>
                            <Button
                                onClick={nextStep}
                                disabled={activeStep === steps.length - 1}
                                className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                            >
                                Próximo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
