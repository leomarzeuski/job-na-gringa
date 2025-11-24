"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Star, CheckCircle2, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Ricardo Silva",
        role: "Dev Fullstack",
        company: "Tech US",
        content: "Em menos de 3 meses consegui minha primeira vaga internacional. O método é direto ao ponto e funciona de verdade. O suporte para a entrevista foi decisivo.",
        avatar: "https://i.pravatar.cc/150?u=ricardo",
        flag: "🇺🇸"
    },
    {
        name: "Ana Costa",
        role: "Product Designer",
        company: "Startup UK",
        content: "Eu achava que precisava ser fluente em inglês, mas o curso me mostrou que com o inglês técnico eu já conseguia. Hoje ganho 3x mais do que ganhava no Brasil.",
        avatar: "https://i.pravatar.cc/150?u=ana",
        flag: "🇬🇧"
    },
    {
        name: "Pedro Santos",
        role: "Data Analyst",
        company: "Canada Corp",
        content: "O suporte da comunidade é incrível. Sempre que tive dúvidas sobre contratos ou pagamentos, fui ajudado na hora. O investimento se pagou no primeiro salário.",
        avatar: "https://i.pravatar.cc/150?u=pedro",
        flag: "🇨🇦"
    }
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-blue-600" />
                        <span>Histórias Reais</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Quem aplicou, <span className="text-blue-600">aprovou</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Junte-se a centenas de profissionais que transformaram suas carreiras e hoje trabalham para o mundo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="mb-6">
                                        <Quote className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />
                                    </div>

                                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="font-bold text-slate-900">{testimonial.name}</p>
                                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <p className="text-sm text-slate-500 flex items-center gap-1">
                                                {testimonial.role} <span className="text-slate-300">•</span> {testimonial.flag}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
