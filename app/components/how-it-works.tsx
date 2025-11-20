"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
    {
        title: "Prepare seu Perfil",
        description: "Otimizamos seu LinkedIn e currículo para os padrões internacionais, tornando você irresistível para recrutadores.",
    },
    {
        title: "Encontre as Vagas",
        description: "Acesso à nossa lista curada de plataformas e empresas que contratam brasileiros remotamente.",
    },
    {
        title: "Aplique com Estratégia",
        description: "Use nossos templates de mensagem validados para abordar recrutadores e garantir entrevistas.",
    },
    {
        title: "Passe na Entrevista",
        description: "Treinamento completo de entrevista em inglês (e técnico) para você se sentir seguro.",
    },
    {
        title: "Receba em Dólar",
        description: "Guia completo sobre como abrir conta internacional, receber pagamentos e pagar impostos corretamente.",
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Como funciona o <span className="text-primary">Método</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Um caminho claro e validado para sua carreira internacional.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-4xl font-bold text-primary/10">0{index + 1}</span>
                                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
