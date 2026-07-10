import { RefreshCw, PackageSearch, Sparkles } from 'lucide-react'
import { StudioHeader } from '@/components/nexus/studio-header'
import { MetricRibbon } from '@/components/nexus/metric-ribbon'
import { ActionCard, type ActionCardData } from '@/components/nexus/action-card'
import { BottomNav } from '@/components/nexus/bottom-nav'

const cards: ActionCardData[] = [
  {
    category: 'Pós-Venda Inteligente',
    icon: RefreshCw,
    badge: 'Reativação (2 anos)',
    title: 'Mariana Souza',
    description:
      'Comprou lentes Zeiss/Varilux há 1 ano e 10 meses. Hora de sugerir revisão de grau.',
    action: 'Clique abaixo para enviar o convite premium de retorno.',
    buttonText: 'Iniciar Reativação no WhatsApp',
  },
  {
    category: 'Alerta de Estoque',
    icon: PackageSearch,
    badge: 'Giro de Estoque',
    title: 'Roberto Alencar',
    description:
      'Cliente VIP de grifes. Temos excesso de estoque parado da nova coleção Fendi/Prada.',
    action: 'Sugerir a nova armação que combina com o histórico de compras dele.',
    buttonText: 'Enviar Novidades no WhatsApp',
  },
  {
    category: 'Visagismo & Estilo',
    icon: Sparkles,
    badge: 'Ação de Balcão',
    title: 'Ana Clara Silva',
    description: 'Cadastro sem mapeamento de Visagismo Facial registrado.',
    action: 'Abordar no pós-venda para agendar uma consultoria de estilo gratuita.',
    buttonText: 'Chamar no WhatsApp',
  },
]

export default function Page() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <StudioHeader />

      <main className="flex-1 pb-6">
        <MetricRibbon />

        <div className="mt-6 px-5">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-lg text-foreground">Feed de Ações</h2>
            <span className="text-xs font-medium text-muted-foreground">3 sugestões</span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Sugestões inteligentes priorizadas para hoje.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 px-5">
          {cards.map((card) => (
            <ActionCard key={card.title} data={card} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
