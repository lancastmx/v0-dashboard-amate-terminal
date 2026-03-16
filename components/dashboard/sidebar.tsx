"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Zap,
  Brain,
  Plus,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Zap, label: "Energy Log", active: false },
  { icon: Brain, label: "Stress Metrics", active: false },
  { icon: Plus, label: "Add Module +", active: false },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col bg-karttel/90 backdrop-blur-xl border-r border-border/30 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border/30">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cienega/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-cienega" />
            </div>
            <span className="font-semibold text-ostra tracking-tight">Amate</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-muted/50 text-ostra/70 hover:text-ostra transition-colors"
          aria-label={collapsed ? "Expandir menú" : "Colapsar menú"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  item.active
                    ? "bg-cienega/20 text-cienega"
                    : "text-ostra/70 hover:bg-muted/50 hover:text-ostra"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Storage Status */}
      <div className="px-3 pb-4">
        <div
          className={cn(
            "rounded-lg bg-hortal/50 border border-border/30 p-3",
            collapsed && "flex justify-center"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Database className="h-5 w-5 text-ostra/70" />
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cienega border-2 border-karttel" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-xs font-medium text-ostra">Storage: Local SQL</p>
                <p className="text-[10px] text-cienega">Conectado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
