'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart } from "recharts"
import { IndianRupee, TrendingUp, LineChart, Target } from 'lucide-react'

// Static data
const roiTrendData = [
  { name: "2027-6%", value: 6 },
  { name: "2030-19%", value: 19 },
  { name: "2033-41%", value: 41 },
  { name: "2036-79%", value: 79 },
  { name: "2039-139%", value: 139 },
  { name: "2042-239%", value: 239 }
]

const capitalYieldData = [
  { name: "2024-5.8%", value: 5.8 },
  { name: "2027-6.1%", value: 6.1 },
  { name: "2030-6.9%", value: 6.9 },
  { name: "2033-8.2%", value: 8.2 },
  { name: "2036-10.3%", value: 10.3 },
  { name: "2039-13.8%", value: 13.8 },
  { name: "2042-19.6%", value: 19.6 },
  { name: "2045-29.4%", value: 29.4 }
]

const capitalAppreciationData = [
  { year: "2024", value: 5000000 },
  { year: "2027", value: 7000000 },
  { year: "2030", value: 10000000 },
  { year: "2033", value: 13000000 },
  { year: "2036", value: 17000000 },
  { year: "2039", value: 22000000 },
  { year: "2042", value: 30000000 }
]

const monthlyRentalData = [
  { year: "2024", value: 40000 },
  { year: "2025", value: 42000 },
  { year: "2026", value: 45000 },
  { year: "2027", value: 48000 },
  { year: "2028", value: 51000 },
  { year: "2029", value: 54000 },
  { year: "2030", value: 57000 },
  { year: "2031", value: 60000 }
]

const rentSqftData = [
  { year: "2024", value: 85 },
  { year: "2025", value: 90 },
  { year: "2026", value: 95 },
  { year: "2027", value: 100 },
  { year: "2028", value: 105 },
  { year: "2029", value: 110 },
  { year: "2030", value: 115 },
  { year: "2031", value: 120 }
]

const COLORS = ['#ff6b6b', '#ff8787', '#ffa5a5', '#ffc9c9', '#ffe3e3']

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#fdf4f0]">
      <div className="container mx-auto p-6">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold">Radiant  Properties</h1>
          <h2 className="text-2xl font-semibold">Fractional Commercial Investment</h2>
          <p className="text-sm uppercase tracking-wider text-slate-600">KNOW YOUR INVESTMENT</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <IndianRupee className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle className="text-sm">Minimum Amount to be Invested</CardTitle>
                <p className="text-2xl font-bold">₹57,50,000</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle className="text-sm">Capital Yield</CardTitle>
                <p className="text-2xl font-bold">6%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <LineChart className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle className="text-sm">Rental Yield</CardTitle>
                <p className="text-2xl font-bold">8.87%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle className="text-sm">Target IRR</CardTitle>
                <p className="text-2xl font-bold">14%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Row */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
  {/* ROI Growth Trend */}
  <Card className="bg-white h-[260px]">
    <CardHeader className="p-4">
      <CardTitle className="text-sm">ROI Growth Trend</CardTitle>
    </CardHeader>
    <CardContent className="p-2">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={roiTrendData}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
              label={({
                cx,
                cy,
                midAngle,
                outerRadius,
                // value,
                name,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = outerRadius * 1.2;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                return (
                  <text
                    x={x}
                    y={y}
                    fill="#666"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                    fontSize="10"
                  >
                    {name}
                  </text>
                );
              }}
            >
              {roiTrendData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>

  {/* Capital Appreciation */}
  <Card className="bg-[#e5e5e5] lg:col-span-2 h-[260px]">
    <CardHeader className="p-4">
      <CardTitle className="text-sm">Capital Appreciation</CardTitle>
    </CardHeader>
    <CardContent className="p-2">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={capitalAppreciationData}>
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `₹${value / 1000000}M`} />
            <Tooltip formatter={(value: number) => [`₹${value / 1000000}M`]} />
            <Bar dataKey="value" fill="#ff6b6b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
</div>
        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Capital Yield Growth Trend */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Capital Yield Growth Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={capitalYieldData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                      label={({
                        cx,
                        cy,
                        midAngle,
                        // innerRadius,
                        outerRadius,
                        // value,
                        name
                      }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = outerRadius * 1.2;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#666"
                            textAnchor={x > cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            fontSize="12"
                          >
                            {name}
                          </text>
                        );
                      }}
                    >
                      {capitalYieldData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Rental Trend */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Monthly Rental Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Value",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={monthlyRentalData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff6b6b" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Rent/Sqft Trend */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Rent / Sqft Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Value",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={rentSqftData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff6b6b" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


