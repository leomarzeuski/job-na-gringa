"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Slider } from "@/app/components/ui/slider"
import { Switch } from "@/app/components/ui/switch"
import { DollarSign, Euro } from "lucide-react"

export function SalaryCalculator() {
    const [hourlyRate, setHourlyRate] = useState(25)
    const [isEuro, setIsEuro] = useState(false)

    const currencySymbol = isEuro ? "€" : "$"
    const conversionRate = isEuro ? 6.2 : 5.8 // Mock rates
    const monthlyHours = 160 // 40h/week * 4

    const monthlyIncomeForeign = hourlyRate * monthlyHours
    const monthlyIncomeBRL = monthlyIncomeForeign * conversionRate

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Quanto você pode <br />
                            <span className="text-gradient-blue">ganhar?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Faça uma simulação e veja o poder de ganhar em moeda forte morando no Brasil.
                        </p>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                Salários 3x a 5x maiores que no Brasil
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                Poder de compra multiplicado
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-pink-500" />
                                Liberdade financeira real
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-card border-border backdrop-blur-xl shadow-2xl">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Simulador de Renda</span>
                                    <div className="flex items-center gap-2 text-sm font-normal">
                                        <span className={!isEuro ? "text-foreground font-bold" : "text-muted-foreground"}>USD</span>
                                        <Switch checked={isEuro} onCheckedChange={setIsEuro} />
                                        <span className={isEuro ? "text-foreground font-bold" : "text-muted-foreground"}>EUR</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8">

                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Valor Hora</span>
                                        <span className="font-bold text-xl">{currencySymbol} {hourlyRate}/h</span>
                                    </div>
                                    <Slider
                                        value={[hourlyRate]}
                                        onValueChange={(value) => setHourlyRate(value[0])}
                                        min={10}
                                        max={100}
                                        step={1}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Júnior ({currencySymbol}15)</span>
                                        <span>Sênior ({currencySymbol}60+)</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Mensal ({currencySymbol})</span>
                                        <span className="text-2xl font-bold text-foreground">
                                            {currencySymbol} {monthlyIncomeForeign.toLocaleString('en-US')}
                                        </span>
                                    </div>

                                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-muted-foreground">Mensal em Reais (R$)</span>
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                            R$ {monthlyIncomeBRL.toLocaleString('pt-BR')}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            *Cotação estimada: {currencySymbol}1 = R${conversionRate}
                                        </p>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
