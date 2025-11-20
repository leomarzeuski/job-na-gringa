"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Ricardo Silva",
        role: "Dev Fullstack @ Tech US",
        content: "Em menos de 3 meses consegui minha primeira vaga internacional. O método é direto ao ponto e funciona de verdade.",
        avatar: "https://i.pravatar.cc/150?u=ricardo"
    },
    {
        name: "Ana Costa",
        role: "Product Designer @ Startup UK",
        content: "Eu achava que precisava ser fluente em inglês, mas o curso me mostrou que com o inglês técnico eu já conseguia. Hoje ganho 3x mais.",
        avatar: "https://i.pravatar.cc/150?u=ana"
    },
    {
        name: "Pedro Santos",
        role: "Data Analyst @ Canada Corp",
        content: "O suporte da comunidade é incrível. Sempre que tive dúvidas sobre contratos ou pagamentos, fui ajudado na hora.",
        avatar: "https://i.pravatar.cc/150?u=pedro"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Quem aplicou, <span className="text-blue-400">aprovou</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Veja o que nossos alunos estão falando sobre o programa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm">
                                <CardContent className="pt-6">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>
                                    <p className="text-lg mb-6 text-gray-300">"{testimonial.content}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
