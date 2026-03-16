import { Zap, Activity, Shield } from "lucide-react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { MetricCard } from "@/components/dashboard/metric-card"
import { VitalityChart } from "@/components/dashboard/vitality-chart"
import { ModuleSlot } from "@/components/dashboard/module-slot"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-hortal">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="pl-16 lg:pl-64 min-h-screen transition-all duration-300">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Header */}
          <Header />

          {/* Metrics Grid */}
          <section className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <MetricCard
                title="Nivel de Energía"
                value="85%"
                subtext="Ready for the pit."
                accentColor="cienega"
                icon={<Zap className="h-5 w-5" />}
              />
              <MetricCard
                title="Índice de Estrés"
                value="Bajo"
                subtext="Sistema nervioso estable."
                accentColor="karttel"
                icon={<Activity className="h-5 w-5" />}
              />
              <MetricCard
                title="Soberanía de Datos"
                value="100% Local"
                subtext="0 bytes enviados a nubes corporativas."
                accentColor="mecedora"
                icon={<Shield className="h-5 w-5" />}
              />
            </div>
          </section>

          {/* Vitality Chart */}
          <section className="mt-6 lg:mt-8">
            <VitalityChart />
          </section>

          {/* Modular Section */}
          <section className="mt-6 lg:mt-8">
            <ModuleSlot />
          </section>

          {/* Footer */}
          <footer className="mt-8 pt-6 border-t border-border/30">
            <p className="text-xs text-ostra/40 text-center">
              Amate Terminal v1.0 — Tus datos. Tu control. Tu soberanía.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
