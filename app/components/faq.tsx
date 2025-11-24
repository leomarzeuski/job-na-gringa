"use client"

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
    {
        question: "Preciso ter inglês fluente?",
        answer: "Não é necessário ser fluente. O foco é no inglês técnico para sua área e na comunicação essencial para entrevistas e dia a dia. Nosso método ensina exatamente o vocabulário e as estruturas que você vai usar."
    },
    {
        question: "Serve para iniciantes na programação?",
        answer: "O programa é otimizado para quem já possui alguma experiência (mesmo que Júnior) no Brasil, pois a validação dessa experiência é mais direta. No entanto, temos módulos de nivelamento que ajudam quem está começando a construir um portfólio internacional desde o zero."
    },
    {
        question: "Como recebo o pagamento em dólar/euro?",
        answer: "Existem diversas plataformas seguras como Payoneer, Husky, Wise e Deel. Ensinamos o passo a passo para abrir sua conta, configurar os recebimentos e regularizar seus impostos no Brasil (PJ) para pagar o mínimo possível legalmente."
    },
    {
        question: "E se eu não conseguir uma vaga?",
        answer: "Nosso método é validado por mais de 1000 alunos. Se você aplicar as estratégias consistentemente, o resultado vem. Além disso, oferecemos uma garantia incondicional de 7 dias para você entrar, olhar o conteúdo e decidir se é para você."
    },
    {
        question: "Quanto tempo de acesso eu tenho?",
        answer: "O acesso ao curso gravado e às atualizações é vitalício. Você pode assistir no seu ritmo e rever quantas vezes quiser. As mentorias ao vivo ficam gravadas na plataforma também."
    }
]

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Title & Context */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Dúvidas <span className="text-blue-600">Frequentes</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Tudo o que você precisa saber sobre como iniciar sua carreira internacional.
                            </p>
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <p className="text-sm font-medium text-slate-900 mb-2">Ainda tem dúvidas?</p>
                                <p className="text-sm text-slate-500 mb-4">Fale diretamente com nosso time de suporte.</p>
                                <a
                                    href="https://wa.me/553192248272"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-semibold hover:underline text-sm flex items-center gap-2"
                                >
                                    Chamar no WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="bg-white border border-slate-200 rounded-xl px-6 data-[state=open]:border-blue-200 data-[state=open]:ring-1 data-[state=open]:ring-blue-100 transition-all duration-200"
                                    >
                                        <AccordionTrigger className="text-left text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 hover:no-underline py-6 [&[data-state=open]>svg]:rotate-45">
                                            {faq.question}
                                            {/* Custom Icon handled by CSS/Icon component usually, but let's ensure clean trigger */}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
