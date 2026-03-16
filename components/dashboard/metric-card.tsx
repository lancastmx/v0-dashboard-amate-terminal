import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  subtext: string
  accentColor: "cienega" | "karttel" | "mecedora"
  icon?: React.ReactNode
}

const accentStyles = {
  cienega: {
    bg: "bg-cienega/10",
    border: "border-cienega/30",
    text: "text-cienega",
    glow: "shadow-cienega/5",
  },
  karttel: {
    bg: "bg-karttel/30",
    border: "border-karttel/50",
    text: "text-ostra",
    glow: "shadow-karttel/5",
  },
  mecedora: {
    bg: "bg-mecedora/10",
    border: "border-mecedora/30",
    text: "text-mecedora",
    glow: "shadow-mecedora/5",
  },
}

export function MetricCard({ title, value, subtext, accentColor, icon }: MetricCardProps) {
  const styles = accentStyles[accentColor]

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border backdrop-blur-sm p-5 transition-all duration-300 hover:scale-[1.02]",
        styles.bg,
        styles.border,
        "shadow-lg",
        styles.glow
      )}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium text-ostra/70 uppercase tracking-wider">{title}</p>
          {icon && <div className="text-ostra/50">{icon}</div>}
        </div>
        
        <p className={cn("mt-3 text-3xl font-bold tracking-tight", styles.text)}>
          {value}
        </p>
        
        <p className="mt-2 text-sm text-ostra/60">{subtext}</p>
      </div>
    </div>
  )
}
