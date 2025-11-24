"use client"

import { motion } from "framer-motion"

const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify", "Uber", "Airbnb",
    "Apple", "Tesla", "Twitter", "LinkedIn", "Salesforce", "Adobe", "Oracle", "IBM",
    "Intel", "Nvidia", "Stripe", "Shopify"
]

export function TechMarquee() {
    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
            <div className="flex relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex gap-20 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...companies, ...companies].map((company, i) => (
                        <span
                            key={i}
                            className="text-3xl font-bold text-slate-300 hover:text-slate-800 transition-colors duration-300 cursor-default select-none"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
