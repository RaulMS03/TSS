import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-800">
          <span>TS</span>
          <span className="text-purple-300">S</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="#quem-somos" className="text-gray-600 hover:text-purple-800">
            Quem Somos
          </Link>
          <Link href="#servicos" className="text-gray-600 hover:text-purple-800">
            Serviços
          </Link>
          <Link href="#contato" className="text-gray-600 hover:text-purple-800">
            Contato
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative rounded-b-[50%]">
          <div className="container mx-auto px-4 py-16 md:py-24 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sua impressora parou? A gente resolve!
              </h1>
              <p className="text-gray-600 mb-2">Atendimento especializado para empresas</p>
              <p className="text-gray-600 mb-6">Locação, Conserto, limpeza e troca de peças com agilidade.</p>
              <a
                href="https://wa.me/5511999031812"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md transition-colors"
              >
                Fale com um técnico
              </a>

            </div>
          </div>
        </section>

        {/* Quem Somos Section */}
        <section id="quem-somos" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Quem somos?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Somos uma empresa especializada na locação de impressoras para empresas,
                  oferecendo também serviços de manutenção preventiva e corretiva, limpeza completa, troca de peças
                  entre outros.
                </p>
                <p className="text-gray-600 mb-6">
                  Atendemos em horário comercial, de segunda a sexta-feira, das 08h às 12h e das 13h às 17h30.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>Atendimento rápido e no local</li>
                  <li>Técnicos especializados</li>
                  <li>Preços compativeis</li>
                  <li>Garantia no serviço</li>
                  <li>Suporte para vários tipos de impressoras</li>
                </ul>
              </div>
              <div className="relative">
                <div
                  className="rounded-full overflow-hidden border-4 border-purple-100 relative mx-auto"
                  style={{ width: "300px", height: "300px" }}
                >
                  <Image
                    src="/impressora.jpg"
                    alt="Impressora"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Serviços</h2>
            <p className="text-gray-600 mb-12">Problemas identificados, solução garantida!</p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Locação de Impressoras</h3>
                <p className="text-gray-600 text-sm">
                  Solução prática e econômica para sua empresa, com suporte técnico e assistência mensal.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Manutenção Corretiva</h3>
                <p className="text-gray-600 text-sm">
                  Resolve problemas como atolamentos, falha na impressão e outros defeitos que impedem o funcionamento
                  correto.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Manutenção Preventiva</h3>
                <p className="text-gray-600 text-sm">
                  Conserve sua impressora funcionando como nova, evitando problemas futuros e prolongando a vida útil do
                  equipamento.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Limpeza Técnica Completa</h3>
                <p className="text-gray-600 text-sm">
                  Desobstrução completa para fluidez de tintas, resultados mais nítidos e limpeza.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Troca de Peças</h3>
                <p className="text-gray-600 text-sm">
                  Peças compatíveis originais, universais, roletes, cabeçotes, etc.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3">Diagnóstico Técnico</h3>
                <p className="text-gray-600 text-sm">
                  Análise completa para identificar problemas, avaliar o estado da impressora e recomendar seus
                  especialistas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-16 bg-gradient-to-b from-purple-100 to-purple-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Não perca tempo com impressoras travadas.</h2>
            <p className="text-gray-700 mb-8">Solicite seu atendimento agora mesmo!</p>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors flex items-center mx-auto">
              <span>Entre em contato conosco</span>
              <Phone className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} TSS Serviços de Impressoras. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
