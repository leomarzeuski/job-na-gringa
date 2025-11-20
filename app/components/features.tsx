"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card"
import { Laptop, DollarSign, Search, FileText, MessageCircle, Rocket } from "lucide-react"

const features = [
    {
        icon: Search,
        title: "Plataformas Secretas",
        description: "Aprenda as melhores plataformas para encontrar vagas remotas que pagam em moeda forte."
    },
    {
        icon: FileText,
        title: "Posicionamento",
        description: "Monte seu perfil e currículo de forma estratégica para atrair recrutadores internacionais."
    },
    {
        icon: MessageCircle,
        title: "Abordagem Validada",
        description: "Scripts e templates de mensagem para abordar empresas e garantir entrevistas."
    },
    {
        icon: DollarSign,
        title: "Negociação",
        description: "Aprenda a negociar seu salário e contratos para garantir os melhores ganhos possíveis."
    },
    {
        icon: Laptop,
        title: "Trabalho Remoto",
        description: "Tudo o que você precisa saber para trabalhar de qualquer lugar do mundo com segurança."
    },
    {
        icon: Rocket,
        title: "Aceleração de Carreira",
        description: "Mentoria e acompanhamento para você conquistar sua vaga em tempo recorde."
    }
]

export function Features() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Tudo o que você precisa para <br />
                        <span className="text-primary">trabalhar para o exterior</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Um método completo, passo a passo, para você sair do zero e conquistar seu primeiro emprego ganhando em Dólar ou Euro.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground mb-2">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
