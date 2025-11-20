import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-40 h-12 mb-4">
                            <Image
                                src="/logo-full.png"
                                alt="Emprego Na Gringa Logo"
                                fill
                                className="object-contain dark:invert"
                            />
                        </div>
                        <p className="text-muted-foreground max-w-xs">
                            Ajudando profissionais brasileiros a conquistarem o mercado internacional.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Sobre</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Depoimentos</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Vagas</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:contato@empregonagringa.com.br" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    contato@empregonagringa.com.br
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/emprego-na-gringa/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/553192248272?text=Quero%20participar%20do%20pr%C3%A9-lan%C3%A7amento%20do%20Freelancer%20Na%20Gringa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Emprego Na Gringa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
