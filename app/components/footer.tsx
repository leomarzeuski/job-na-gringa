import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="relative w-40 h-12">
                            <Image
                                src="/logo-full.png"
                                alt="Job na Gringa Logo"
                                fill
                                className="object-contain invert opacity-90"
                            />
                        </div>
                        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                            Ajudando profissionais brasileiros a conquistarem o mercado internacional com estratégias validadas, mentoria especializada e suporte personalizado.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://instagram.com" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="https://wa.me/553192248272" icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Plataforma</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="#features">Funcionalidades</FooterLink>
                            <FooterLink href="#how-it-works">Como Funciona</FooterLink>
                            <FooterLink href="#calculator">Calculadora Salarial</FooterLink>
                            <FooterLink href="#testimonials">Depoimentos</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-slate-400 group">
                                <Mail className="w-5 h-5 text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors" />
                                <a href="mailto:contato@empregonagringa.com.br" className="hover:text-white transition-colors">
                                    contato@empregonagringa.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 group">
                                <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors" />
                                <a href="https://wa.me/553192248272" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +55 31 9224-8272
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Job na Gringa. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-blue-500 hover:-translate-y-1"
        >
            {icon}
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-blue-400 transition-colors block hover:translate-x-1 duration-200">
                {children}
            </Link>
        </li>
    )
}
