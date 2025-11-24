"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, FileText, MessageCircle, DollarSign, Laptop, Rocket, ArrowRight, X, CheckCircle2 } from "lucide-react"

const features = [
    {
        icon: Search,
        title: "Vagas Secretas",
        description: "Acesso exclusivo às melhores plataformas e vagas ocultas que pagam em dólar.",
        color: "bg-blue-100 text-blue-600",
        details: [
            "Lista curada de sites de emprego remoto pouco conhecidos",
            "Como usar filtros avançados no LinkedIn para achar vagas sem concorrência",
            "Acesso ao nosso banco de dados de recrutadores internacionais",
            "Estratégias para encontrar vagas antes delas serem anunciadas"
        ]
    },
    {
        icon: FileText,
        title: "Currículo Global",
        description: "Transformamos seu CV para o padrão internacional que os recrutadores amam.",
        color: "bg-amber-100 text-amber-600",
        details: [
            "Adaptação para o formato ATS (Applicant Tracking System)",
            "Tradução estratégica e uso de palavras-chave do setor",
            "Otimização do perfil do LinkedIn para buscas globais",
            "Modelos de Cover Letter que convertem"
        ]
    },
    {
        icon: MessageCircle,
        title: "Entrevistas em Inglês",
        description: "Scripts validados e preparação para você destravar na hora da entrevista.",
        color: "bg-green-100 text-green-600",
        details: [
            "Simulações de entrevista com feedback real",
            "Scripts prontos para as perguntas mais comuns (Behavioral Questions)",
            "Como responder sobre pretensão salarial em dólar",
            "Técnicas para reduzir o nervosismo e falar com confiança"
        ]
    },
    {
        icon: DollarSign,
        title: "Negociação Salarial",
        description: "Estratégias para negociar contratos e garantir os maiores salários possíveis.",
        color: "bg-purple-100 text-purple-600",
        details: [
            "Benchmark salarial por país e cargo",
            "Como negociar bônus, stock options e benefícios",
            "Scripts de negociação para aumentar a oferta inicial",
            "Entendendo a diferença entre contrato PJ (Contractor) e CLT global"
        ]
    },
    {
        icon: Laptop,
        title: "Trabalho Remoto",
        description: "Guia completo sobre contratos, impostos e como receber do exterior legalmente.",
        color: "bg-rose-100 text-rose-600",
        details: [
            "Abertura de empresa e contabilidade para exportação de serviços",
            "Melhores plataformas para receber pagamentos (menores taxas)",
            "Gestão de fuso horário e comunicação assíncrona",
            "Equipamentos e setup ideal para trabalho remoto"
        ]
    },
    {
        icon: Rocket,
        title: "Mentoria Acelerada",
        description: "Acompanhamento passo a passo para você conquistar sua vaga em tempo recorde.",
        color: "bg-indigo-100 text-indigo-600",
        details: [
            "Plano de ação personalizado para sua carreira",
            "Acompanhamento semanal de progresso",
            "Acesso direto a mentores que já trabalham fora",
            "Comunidade exclusiva de networking"
        ]
    }
]

export function Features() {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null)

    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Tudo o que você precisa para ser <br />
                        <span className="text-blue-600">Contratado no Exterior</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Nossa metodologia cobre todas as etapas do processo seletivo internacional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedFeature(feature)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            <div className="flex items-center text-blue-600 font-semibold group/link">
                                <span className="group-hover/link:underline">Ver detalhes</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedFeature && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 p-6 md:p-8 border border-slate-100 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className={`w-16 h-16 rounded-xl ${selectedFeature.color} flex items-center justify-center mb-6`}>
                                <selectedFeature.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {selectedFeature.title}
                            </h3>

                            <p className="text-slate-600 text-lg mb-6">
                                {selectedFeature.description}
                            </p>

                            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    <Rocket className="w-4 h-4 text-blue-600" />
                                    O que você vai aprender:
                                </h4>
                                <ul className="space-y-3">
                                    {selectedFeature.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Fechar
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}
