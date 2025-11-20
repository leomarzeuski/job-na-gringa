import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-white">Emprego Na Gringa</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Ajudando profissionais brasileiros a conquistarem o mercado internacional.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Sobre</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Depoimentos</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Vagas</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Privacidade</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">Contato</Link></li>
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
