"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Slider } from "@/app/components/ui/slider"
import { Switch } from "@/app/components/ui/switch"
import { CheckCircle2, TrendingUp } from "lucide-react"

export function SalaryCalculator() {
    const [hourlyRate, setHourlyRate] = useState(35)
    const [isEuro, setIsEuro] = useState(false)

    const currencySymbol = isEuro ? "€" : "$"
    const conversionRate = isEuro ? 6.2 : 5.8 // Mock rates
    const monthlyHours = 160 // 40h/week * 4

    const monthlyIncomeForeign = hourlyRate * monthlyHours
    const monthlyIncomeBRL = monthlyIncomeForeign * conversionRate
    const yearlyIncomeBRL = monthlyIncomeBRL * 12

    // Role estimation helper
    const getRoleLabel = (rate: number) => {
        if (rate < 20) return "Júnior / Suporte"
        if (rate < 40) return "Pleno / Especialista"
        if (rate < 70) return "Sênior / Tech Lead"
        return "Staff / Principal / Management"
    }

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                            <TrendingUp className="w-4 h-4" />
                            Potencial Financeiro
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Multiplique sua renda <br />
                            <span className="text-blue-600">sem sair do Brasil</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            O mercado internacional paga em média 5x mais que o mercado local. Faça uma simulação realista baseada em vagas atuais.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Receba em moeda forte (Dólar ou Euro)",
                                "Impostos reduzidos para exportação de serviços",
                                "Poder de compra internacional morando no Brasil"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white border-slate-200 shadow-xl rounded-2xl overflow-hidden">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
                                <CardTitle className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-slate-800">Simulador de Salário</span>
                                    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                                        <span className={`text-sm font-bold ${!isEuro ? "text-blue-600" : "text-slate-400"}`}>USD</span>
                                        <Switch checked={isEuro} onCheckedChange={setIsEuro} className="data-[state=checked]:bg-blue-600" />
                                        <span className={`text-sm font-bold ${isEuro ? "text-blue-600" : "text-slate-400"}`}>EUR</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 space-y-8">

                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Valor Hora</span>
                                            <div className="text-3xl font-bold text-slate-900 mt-1">
                                                {currencySymbol} {hourlyRate}<span className="text-lg text-slate-400 font-medium">/h</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm font-bold">
                                                {getRoleLabel(hourlyRate)}
                                            </span>
                                        </div>
                                    </div>

                                    <Slider
                                        value={[hourlyRate]}
                                        onValueChange={(value) => setHourlyRate(value[0])}
                                        min={15}
                                        max={150}
                                        step={1}
                                        className="py-4 cursor-pointer"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 pt-6 border-t border-slate-100">
                                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                        <span className="text-sm text-slate-500 font-medium block mb-1">Renda Mensal Estimada (R$)</span>
                                        <div className="text-4xl font-bold text-slate-900">
                                            R$ {monthlyIncomeBRL.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                                        </div>
                                        <div className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                                            <span>≈ {currencySymbol} {monthlyIncomeForeign.toLocaleString('en-US')} / mês</span>
                                        </div>
                                    </div>

                                    <div className="p-5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                        <span className="text-blue-100 text-sm font-medium block mb-1">Renda Anual Projetada (R$)</span>
                                        <div className="text-3xl font-bold">
                                            R$ {yearlyIncomeBRL.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs text-center text-slate-400">
                                    *Valores estimados com base na cotação atual ({currencySymbol}1 = R${conversionRate}). Impostos não inclusos.
                                </p>

                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
