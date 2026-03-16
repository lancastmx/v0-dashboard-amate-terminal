import { Plus } from "lucide-react"

export function ModuleSlot() {
  return (
    <button
      className="w-full h-full min-h-[180px] rounded-xl border-2 border-dashed border-border/50 bg-karttel/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cienega/50 hover:bg-karttel/30 group"
      aria-label="Instalar nuevo módulo de métricas"
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="h-14 w-14 rounded-full bg-muted/30 flex items-center justify-center group-hover:bg-cienega/20 transition-colors">
          <Plus className="h-7 w-7 text-ostra/50 group-hover:text-cienega transition-colors" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-ostra/70 group-hover:text-ostra transition-colors">
            Instalar Nuevo Módulo de Métricas
          </p>
          <p className="text-xs text-ostra/50 mt-1">
            (ej. Sueño, Peso, Recuperación Auditiva)
          </p>
        </div>
      </div>
    </button>
  )
}
