"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { day: "Lun", vitality: 72 },
  { day: "Mar", vitality: 78 },
  { day: "Mié", vitality: 85 },
  { day: "Jue", vitality: 82 },
  { day: "Vie", vitality: 88 },
  { day: "Sáb", vitality: 92 },
  { day: "Dom", vitality: 85 },
]

export function VitalityChart() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/30 bg-karttel/40 backdrop-blur-sm p-6">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-ostra">Tendencia de Vitalidad Semanal</h3>
            <p className="text-sm text-ostra/60 mt-1">Métricas de energía de los últimos 7 días</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cienega" />
            <span className="text-xs text-ostra/70">Índice de Vitalidad</span>
          </div>
        </div>

        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="vitalityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b5d333" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#b5d333" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#3a4540"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a09a90", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a09a90", fontSize: 12 }}
                domain={[60, 100]}
                ticks={[60, 70, 80, 90, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#264653",
                  border: "1px solid #3a4540",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
                }}
                labelStyle={{ color: "#d0cbc1", fontWeight: 600 }}
                itemStyle={{ color: "#b5d333" }}
                formatter={(value: number) => [`${value}%`, "Vitalidad"]}
              />
              <Area
                type="monotone"
                dataKey="vitality"
                stroke="#b5d333"
                strokeWidth={3}
                fill="url(#vitalityGradient)"
                dot={{
                  fill: "#b5d333",
                  stroke: "#264653",
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  fill: "#b5d333",
                  stroke: "#264653",
                  strokeWidth: 3,
                  r: 6,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
