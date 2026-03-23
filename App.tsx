/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  BookOpen, 
  Trophy, 
  ChevronRight, 
  ExternalLink, 
  Code, 
  Zap, 
  Cpu, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import teamPhoto from "./team-photo.png";

// Colors from Produtiva Júnior identity
const COLORS = {
  primary: "#00A8B5", // Teal/Cyan
  secondary: "#1A365D", // Navy
  accent: "#F27D26", // Orange (optional accent)
  bg: "#F8FAFC",
  white: "#FFFFFF",
};

type Tab = "capacitacao" | "desafio";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("capacitacao");
  const [showMaterials, setShowMaterials] = useState<number | null>(null);

  const schedule = [
    {
      day: 1,
      title: "Conceitos Básicos",
      focus: "N8N para fluxo e Lovable para interface/front-end",
      topics: [
        "Introdução ao Low-code/No-code",
        "Configuração inicial do N8N",
        "Criando sua primeira interface no Lovable",
        "Conectando front-end simples com back-end"
      ],
      materials: [
        { name: "Documentação Oficial N8N", url: "https://docs.n8n.io/" },
        { name: "Guia Rápido Lovable", url: "https://docs.lovable.dev/" },
        { name: "Exemplo de Fluxo HTTP", url: "#" }
      ]
    },
    {
      day: 2,
      title: "Automações Avançadas",
      focus: "Webhooks, manipulação de JSON, APIs complexas e lógica condicional",
      topics: [
        "Trabalhando com Webhooks",
        "Transformação de dados com JSON",
        "Integração com APIs externas (REST)",
        "Lógica condicional (If/Switch) no N8N"
      ],
      materials: [
        { name: "Guia de Webhooks", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/" },
        { name: "Manipulação de JSON no N8N", url: "https://docs.n8n.io/code/javascript/" },
        { name: "Postman API Learning", url: "https://learning.postman.com/" }
      ]
    },
    {
      day: 3,
      title: "Aplicação Prática",
      focus: "Mão na massa no projeto, refinamento de arquitetura e agentes de IA",
      topics: [
        "Desenvolvimento do MVP",
        "Implementação de Agentes de IA",
        "Refinamento de UX/UI no Lovable",
        "Pitch e apresentação técnica"
      ],
      materials: [
        { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
        { name: "Arquitetura de Agentes", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ai-agent/" },
        { name: "Template de Pitch", url: "#" }
      ]
    }
  ];

  const codeExample = `// Exemplo de lógica condicional no N8N (Node de Código)
const items = $input.all();
const threshold = 100;

return items.map(item => {
  if (item.json.valor > threshold) {
    item.json.status = "Prioridade Alta";
  } else {
    item.json.status = "Normal";
  }
  return item;
});`;

  return (
    <div className="min-h-screen font-sans text-slate-800" style={{ backgroundColor: COLORS.bg }}>
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.primary }}>
              <Zap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">InovaCIT <span className="font-light opacity-80">Painel de Apoio</span></h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => setActiveTab("capacitacao")}
              className={`text-sm font-medium transition-colors ${activeTab === "capacitacao" ? "text-white border-b-2" : "text-slate-300 hover:text-white"}`}
              style={{ borderColor: COLORS.primary }}
            >
              CAPACITAÇÕES
            </button>
            <button 
              onClick={() => setActiveTab("desafio")}
              className={`text-sm font-medium transition-colors ${activeTab === "desafio" ? "text-white border-b-2" : "text-slate-300 hover:text-white"}`}
              style={{ borderColor: COLORS.primary }}
            >
              DESAFIO E PREMIAÇÃO
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}>
                Bem-vindo ao Hackathon
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Olá, participante! Este é o seu <span style={{ color: COLORS.primary }}>Painel de Apoio InovaCIT</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl">
                As nossas capacitações são <strong>presenciais</strong>, mas estou aqui como seu braço direito digital para fornecer materiais extras, exemplos de código e guiar você no desafio final da Produtiva Júnior.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab("capacitacao")}
                  className="px-6 py-3 rounded-xl font-bold text-white flex items-center gap-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Ver Cronograma <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveTab("desafio")}
                  className="px-6 py-3 rounded-xl font-bold border-2 transition-colors hover:bg-slate-50"
                  style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
                >
                  Detalhes do Desafio
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-200">
              <img 
                src={teamPhoto} 
                alt="Equipe InovaCIT" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/inovacit-team/800/1000";
                }}
              />
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "capacitacao" ? (
            <motion.div
              key="capacitacao"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8" style={{ color: COLORS.primary }} />
                  <h3 className="text-2xl font-bold text-slate-900">Cronograma de Capacitação</h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">
                  <Info className="w-4 h-4" />
                  Sessões Presenciais
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {schedule.map((day) => (
                  <div key={day.day} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: COLORS.secondary }}>
                        {day.day}º
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dia</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{day.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 italic">Foco: {day.focus}</p>
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {day.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: COLORS.primary }} />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => setShowMaterials(showMaterials === day.day ? null : day.day)}
                      className="w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                      style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
                    >
                      {showMaterials === day.day ? "Ocultar Materiais" : "Materiais de Apoio"}
                      <ChevronRight className={`w-4 h-4 transition-transform ${showMaterials === day.day ? "rotate-90" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {showMaterials === day.day && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-4 space-y-2"
                        >
                          {day.materials.map((mat, idx) => (
                            <a 
                              key={idx} 
                              href={mat.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-medium text-slate-600"
                            >
                              {mat.name}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold">Dica Técnica: Manipulação de Dados</h4>
                </div>
                <pre className="bg-slate-800 p-6 rounded-xl overflow-x-auto font-mono text-sm text-cyan-100 border border-slate-700">
                  <code>{codeExample}</code>
                </pre>
                <p className="mt-4 text-sm text-slate-400">
                  Use nodes de código no N8N para lógicas que vão além dos nodes padrões. Isso dá superpoderes ao seu fluxo!
                </p>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-100 text-amber-800">
                <Info className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Nota do Mentor:</strong> Este sistema é um material de <strong>apoio complementar</strong>. Durante as sessões presenciais, sinta-se à vontade para tirar dúvidas diretamente com os mentores físicos. Use os links e exemplos aqui para aprofundar seus conhecimentos após as aulas!
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="desafio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8" style={{ color: COLORS.primary }} />
                <h3 className="text-2xl font-bold text-slate-900">O Desafio InovaCIT</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" style={{ color: COLORS.primary }} />
                    O Desafio: Foco na Produtiva
                  </h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    O objetivo central é identificar um <strong>gargalo real</strong> ou um processo manual repetitivo dentro da <strong>Produtiva Júnior</strong> (seja ele interno ou voltado para clientes externos) e transformá-lo completamente.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border-l-4" style={{ borderColor: COLORS.primary }}>
                      <p className="text-sm font-bold text-slate-900 mb-1">Missão:</p>
                      <p className="text-sm text-slate-600">Automatizar e criar uma interface intuitiva que resolva o problema de ponta a ponta.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border-l-4" style={{ borderColor: COLORS.secondary }}>
                      <p className="text-sm font-bold text-slate-900 mb-1">Ferramentas Obrigatórias:</p>
                      <p className="text-sm text-slate-600">N8N (Fluxos), Lovable (Interface) ou Agentes de IA.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" style={{ color: COLORS.primary }} />
                    Critérios de Avaliação
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white" style={{ backgroundColor: COLORS.primary }}>1</div>
                      <div>
                        <p className="font-bold text-slate-900">Impacto no Processo</p>
                        <p className="text-sm text-slate-500">O quanto a solução realmente economiza tempo ou recursos.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white" style={{ backgroundColor: COLORS.primary }}>2</div>
                      <div>
                        <p className="font-bold text-slate-900">Viabilidade Técnica</p>
                        <p className="text-sm text-slate-500">A robustez do fluxo n8n e a integração com o front-end.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white" style={{ backgroundColor: COLORS.primary }}>3</div>
                      <div>
                        <p className="font-bold text-slate-900">Criatividade</p>
                        <p className="text-sm text-slate-500">Uso inovador das ferramentas e experiência do usuário.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white" style={{ backgroundColor: COLORS.primary }}>4</div>
                      <div>
                        <p className="font-bold text-slate-900">Uso de IA</p>
                        <p className="text-sm text-slate-500">Implementação inteligente de agentes para tomada de decisão.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-10 text-white text-center shadow-xl">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-3xl font-extrabold mb-4">Pronto para o Próximo Nível?</h4>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Lembre-se: o melhor projeto não é apenas o mais complexo, mas aquele que resolve um problema real da forma mais elegante.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white font-bold">P</div>
            <p className="text-sm font-bold text-slate-900">Produtiva Júnior | InovaCIT 2026</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Cpu className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Zap className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Code className="w-5 h-5" /></a>
          </div>
          <p className="text-xs text-slate-400">Desenvolvido como painel de apoio para capacitação técnica e inovação.</p>
        </div>
      </footer>
    </div>
  );
}
