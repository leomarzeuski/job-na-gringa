"use client"

import { motion } from "framer-motion"

const techs = [
    "React", "Node.js", "Python", "Java", "AWS", "Docker", "Kubernetes", "TypeScript", "Go", "Rust",
    "Angular", "Vue", "C#", ".NET", "Flutter", "Swift", "Kotlin", "Terraform", "Azure", "GCP"
]

export function TechMarquee() {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span key={i} className="text-2xl font-bold text-white/20 uppercase tracking-widest hover:text-blue-500/50 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
