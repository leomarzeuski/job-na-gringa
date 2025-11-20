"use client"

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"

const faqs = [
    {
        question: "Preciso ter inglês fluente?",
        answer: "Não! Você precisa de inglês técnico para sua área e comunicação básica. Ensinamos exatamente o vocabulário necessário para passar nas entrevistas e trabalhar no dia a dia."
    },
    {
        question: "Serve para iniciantes na programação?",
        answer: "O foco principal é quem já tem alguma experiência (mesmo que júnior) no Brasil, pois é mais fácil validar essa experiência lá fora. Mas temos módulos para quem está começando do zero também."
    },
    {
        question: "Como recebo o pagamento?",
        answer: "Existem diversas plataformas como Payoneer, Husky, Wise, etc. Ensinamos o passo a passo para abrir sua conta e receber com as menores taxas."
    },
    {
        question: "E se eu não conseguir uma vaga?",
        answer: "O método é validado e temos uma taxa de sucesso altíssima. Além disso, você tem 7 dias de garantia incondicional para testar o curso."
    }
]

export function FAQ() {
    return (
        <section className="py-24 relative bg-black/20">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Perguntas <span className="text-blue-400">Frequentes</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                                <AccordionTrigger className="text-left text-lg hover:text-blue-400 transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
