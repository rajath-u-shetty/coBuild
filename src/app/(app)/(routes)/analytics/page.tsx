'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart } from "recharts"
import { Coins } from 'lucide-react'

// Static data
const roiTrendData = [
  { name: "2027", value: 6, label: "2027-6%" },
  { name: "2030", value: 19, label: "2030-19%" },
  { name: "2033", value: 41, label: "2033-41%" },
  { name: "2036", value: 79, label: "2036-79%" },
  { name: "2039", value: 139, label: "2039-139%" },
  { name: "2042", value: 239, label: "2042-239%" }
]

// const capitalYieldData = [
//   { name: "2024", value: 5.8, label: "2024-5.8%" },
//   { name: "2027", value: 6.1, label: "2027-6.1%" },
//   { name: "2030", value: 6.9, label: "2030-6.9%" },
//   { name: "2033", value: 8.2, label: "2033-8.2%" },
//   { name: "2036", value: 10.3, label: "2036-10.3%" },
//   { name: "2039", value: 13.8, label: "2039-13.8%" },
//   { name: "2042", value: 19.6, label: "2042-19.6%" },
//   { name: "2045", value: 29.4, label: "2045-29.4%" }
// ]

const capitalAppreciationData = [
  { year: "Jul-24", value: 5000000 },
  { year: "Jul-27", value: 5500000 },
  { year: "Jul-30", value: 6500000 },
  { year: "Jul-33", value: 8000000 },
  { year: "Jul-36", value: 10000000 },
  { year: "Jul-39", value: 14000000 },
  { year: "Jul-42", value: 20000000 }
]

const investmentOptionsData = [
  { name: "Mutual Funds", value: 75 },
  { name: "Fixed Deposit", value: 60 },
  { name: "Gold", value: 65 },
  { name: "Bonds", value: 70 },
  { name: "Stocks", value: 80 },
  { name: "Residential Investment", value: 85 },
  { name: "Commercial Investment", value: 95 }
]

const rentTrendData = [
  { year: "2024", rent: "Rs.85" },
  { year: "2025", rent: "Rs.89.2" },
  { year: "2026", rent: "Rs.93.7" },
  { year: "2027", rent: "Rs.98.3" },
  { year: "2028", rent: "Rs.103.3" },
  { year: "2029", rent: "Rs.108.4" },
  { year: "2030", rent: "Rs.113.9" }
]

// interface CustomLabelProps {
//   cx: number;
//   cy: number;
//   midAngle: number;
//   innerRadius: number;
//   outerRadius: number;
//   label: string;
// }

const COLORS = ['#ff6b6b', '#ff8787', '#ffa5a5', '#ffc9c9', '#ffe3e3']

// const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, label }: CustomLabelProps) => {
//   const RADIAN = Math.PI / 180
//   const radius = outerRadius * 1.2
//   const x = cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = cy + radius * Math.sin(-midAngle * RADIAN)
//
//   return (
//     <text
//       x={x}
//       y={y}
//       fill="#666"
//       textAnchor={x > cx ? 'start' : 'end'}
//       dominantBaseline="central"
//       fontSize="11"
//     >
//       {label}
//     </text>
//   )
// }

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#fdf4f0]">
      <div className="container mx-auto p-6">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold">Y-Living Properties</h1>
          <h2 className="text-2xl font-semibold">Fractional Commercial Investment</h2>
          <p className="text-sm uppercase tracking-wider text-slate-600">KNOW YOUR INVESTMENT</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Capital Appreciation */}
            <Card className="bg-[#e5e5e5]">
              <CardHeader>
                <CardTitle>Capital Appreciation Trend Expected for Y-Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Value",
                      color: "#ff6b6b",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={capitalAppreciationData}>
                      <XAxis dataKey="year" />
                      <YAxis
                        tickFormatter={(value) => `₹${(value / 1000000)}M`}
                      />
                      <Tooltip
                        formatter={(value: number) => [`₹${(value / 1000000)}M`]}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ff6b6b"
                        strokeWidth={2}
                        dot={{ fill: '#ff6b6b' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Investment Options */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Value",
                      color: "#ff6b6b",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={investmentOptionsData}
                      layout="vertical"
                      margin={{ top: 0, right: 0, bottom: 0, left: 100 }}
                    >
                      <XAxis type="number" />
                      <YAxis
                        type="category"
                        dataKey="name"
                        width={100}
                      />
                      <Tooltip />
                      <Bar dataKey="value" fill="#ff6b6b" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Profit Margin Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Profit Margin Analysis</CardTitle>
                <p className="text-sm text-slate-500">
                  Understanding the Conservative Expectation of Market Growth
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center gap-6">
                  {/* Pie Chart */}
                  <div className="h-[200px] w-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Rental Yield", value: 8.87 },
                            { name: "Capital Yield", value: 6 },
                            { name: "Target IRR", value: 14.71 },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          labelLine={false}
                        >
                          {[
                            { name: "Rental Yield", value: 8.87 },
                            { name: "Capital Yield", value: 6 },
                            { name: "Target IRR", value: 14.71 },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Labels */}
                  <div className="space-y-3">
                    {[
                      { name: "Rental Yield", value: "8.87%", color: COLORS[0] },
                      { name: "Capital Yield", value: "6%", color: COLORS[1] },
                      { name: "Target IRR", value: "14.71%", color: COLORS[2] },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold text-slate-600">{item.value}</p>
                          <p className="text-xs text-slate-500">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Average Monthly Expected Rent */}
                <div className="bg-[#fdf4f0] p-4 rounded-lg mt-6">
                  <h4 className="text-sm font-medium mb-2">Average Monthly Expected Rent</h4>
                  <div className="text-2xl font-bold">₹65,000</div>
                  <div className="text-sm text-slate-500">Rupees/Month</div>
                </div>
              </CardContent>
            </Card>
            {/* Expected Rent Trend & ROI */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expected Rent Trend per Sqft</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {rentTrendData.map((item) => (
                      <div key={item.year} className="flex justify-between items-center py-1">
                        <span className="text-sm">{item.year}</span>
                        <span className="font-medium">{item.rent}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Return of Investment Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {roiTrendData.map((item) => (
                      <div key={item.name} className="flex justify-between items-center py-1">
                        <div className="flex items-center gap-2">
                          <Coins className="w-4 h-4 text-[#ff6b6b]" />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



