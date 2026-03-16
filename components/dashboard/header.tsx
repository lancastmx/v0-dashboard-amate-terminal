import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/30">
      <div>
        <h1 className="text-2xl font-bold text-ostra tracking-tight">
          Amate Sovereign Terminal
        </h1>
        <p className="text-sm text-ostra/60 mt-1">
          Tu centro de control de salud personal
        </p>
      </div>
      <Button
        variant="outline"
        className="bg-karttel/50 border-border/50 text-ostra hover:bg-karttel hover:text-cienega hover:border-cienega/50 transition-all"
      >
        <Download className="h-4 w-4 mr-2" />
        Export Data (JSON)
      </Button>
    </header>
  )
}
