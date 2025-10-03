'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, MessageCircle, Star, Users, Clock, Award } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [viewHistory, setViewHistory] = useState<string[]>([])

  // Local Storage para persistência
  useEffect(() => {
    // Carregar preferências do usuário
    const savedHistory = localStorage.getItem('courseViewHistory')
    if (savedHistory) {
      setViewHistory(JSON.parse(savedHistory))
    }

    // Registrar visualização da página
    const currentView = new Date().toISOString()
    const updatedHistory = [...(savedHistory ? JSON.parse(savedHistory) : []), currentView]
    setViewHistory(updatedHistory)
    localStorage.setItem('courseViewHistory', JSON.stringify(updatedHistory))

    // Salvar dados do formulário conforme o usuário digita
    const savedFormData = localStorage.getItem('contactFormData')
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)
    localStorage.setItem('contactFormData', JSON.stringify(updatedFormData))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Limpar dados do formulário do localStorage após envio
    localStorage.removeItem('contactFormData')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handlePurchase = () => {
    // Registrar interesse de compra no localStorage
    const purchaseIntent = {
      course: 'Se Torne um Blogueiro de Sucesso',
      price: 89.90,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('purchaseIntent', JSON.stringify(purchaseIntent))
    alert('Redirecionando para o pagamento...')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-8">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Curso Exclusivo</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Se Torne um
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Blogueiro de Sucesso
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Você não precisa depender de ninguém. No meu método, eu te mostro como se tornar o seu próprio depositante e lucrar de verdade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handlePurchase}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Comprar Agora - R$ 89,90</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>
              
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Acesso imediato</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                <div className="text-gray-400">Aula Completa</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2h</div>
                <div className="text-gray-400">de Conteúdo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-400">Acesso Vitalício</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                O que você vai aprender
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Estratégias de Conteúdo</h3>
                    <p className="text-gray-300">Técnicas avançadas para criar conteúdo que engaja e converte sua audiência</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Aumentar seus depositantes</h3>
                    <p className="text-gray-300">Métodos comprovados para expandir sua base de seguidores e leitores fiéis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Aula sobre CPA</h3>
                    <p className="text-gray-300">Estratégias de Cost Per Action para maximizar seus resultados e conversões</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Crescer o seu grupo do whatsapp e instagram</h3>
                    <p className="text-gray-300">Técnicas para expandir sua presença nas redes sociais e construir comunidades engajadas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Liberar baús + bater rollover</h3>
                    <p className="text-gray-300">Estratégias avançadas para otimizar seus resultados e superar metas estabelecidas</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Aula Única e Completa</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Uma masterclass de 2 horas que condensa anos de experiência em blogging. 
                  Você aprenderá tudo o que precisa para começar e ter sucesso, desde a criação 
                  do seu primeiro post até as estratégias avançadas de monetização.
                </p>
                <div className="flex items-center text-cyan-400">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-medium">Certificado de conclusão incluído</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 border border-blue-500/30">
                <div className="space-y-6">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/593a6dba-3814-4656-8d79-0fda67a46ec9.jpg" 
                      alt="Esquema de recompensas - Estratégias de monetização" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f7f66beb-860f-40ae-b488-6f3c6fdb59a1.jpg" 
                      alt="Sistema de recompensas - Técnicas avançadas" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 mt-6">Exemplo Real:</h3>
                <p className="text-gray-300 mb-6">
                  Saquei R$ 20 mil usando exatamente o método que ensino no curso. E o melhor: isso sem contar as cooperações pagas pelos gerentes e os bônus que caem todos os dias na conta.
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Estratégias comprovadas</span>
                  <span>Resultados reais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tem alguma dúvida?
            </h2>
            <p className="text-xl text-gray-300">
              Entre em contato diretamente com o instrutor
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-blue-900/80 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-gray-300">Responderemos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Sua dúvida
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Digite sua pergunta sobre o curso..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comece sua jornada hoje mesmo
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos blogueiros que já transformaram sua paixão em profissão
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 border border-blue-500/30 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="text-4xl font-bold text-white mb-2">R$ 89,90</div>
                <div className="text-gray-300">Pagamento único • Acesso vitalício</div>
                <div className="flex items-center mt-2 text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">Garantia de 7 dias</span>
                </div>
              </div>
              
              <button
                onClick={handlePurchase}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 whitespace-nowrap"
              >
                <span className="relative z-10">Garantir minha vaga</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Mais de 1.000 alunos</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Avaliação 4.9/5</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Certificado incluído</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Se Torne um Blogueiro de Sucesso. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Visualizações da página: {viewHistory.length}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}