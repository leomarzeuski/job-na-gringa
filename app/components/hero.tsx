"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Globe, DollarSign, Laptop, Rocket, Star } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Dramatic Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: "4s" }} />
            </div>

            {/* Floating Elements */}
            <FloatingIcon icon={DollarSign} className="absolute top-[20%] left-[10%] text-green-400" delay={0} />
            <FloatingIcon icon={Globe} className="absolute top-[15%] right-[15%] text-blue-400" delay={1} />
            <FloatingIcon icon={Laptop} className="absolute bottom-[20%] left-[15%] text-purple-400" delay={2} />
            <FloatingIcon icon={Rocket} className="absolute bottom-[25%] right-[10%] text-orange-400" delay={3} />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-blue-100">Método Validado por +1000 Alunos</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        Ganhe em <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Dólar</span> <br />
                        Trabalhando do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Brasil</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Desbloqueie sua carreira internacional. Junte-se à nossa comunidade exclusiva e tenha acesso a oportunidades de trabalho no exterior.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all duration-300">
                            Começar Agora
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/10 text-foreground backdrop-blur-sm">
                            Saiba Mais
                        </Button>
                    </motion.div>

                    {/* Stats / Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/5 pt-12 w-full"
                    >
                        <StatItem value="12+" label="Anos de Mercado" />
                        <StatItem value="1000+" label="Alunos Aprovados" />
                        <StatItem value="5x" label="Aumento de Renda" />
                        <StatItem value="100%" label="Garantia de Satisfação" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function FloatingIcon({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) {
    return (
        <motion.div
            className={`hidden md:flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            <Icon className="w-8 h-8" />
        </motion.div>
    )
}

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div className="flex flex-col items-center group cursor-default">
            <span className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{value}</span>
            <span className="text-sm md:text-base text-muted-foreground mt-2">{label}</span>
        </div>
    )
}
