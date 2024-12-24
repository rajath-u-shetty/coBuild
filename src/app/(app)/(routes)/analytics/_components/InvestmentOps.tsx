"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface InvestmentOption {
  name: string;
  value: number;
}

const investmentOptionsData: InvestmentOption[] = [
  { name: "Real Estate", value: 120 },
  { name: "Stocks", value: 85 },
  { name: "Mutual Funds", value: 65 },
  { name: "Gold", value: 50 },
  { name: "Cryptocurrency", value: 35 },
];

const chartConfig: ChartConfig = {
  value: {
    label: "Investment Value",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export function InvestmentOptionsChart(){
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Options</CardTitle>
        <CardDescription>
          Comparative Analysis of Investment Returns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={investmentOptionsData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value}
            />
            <XAxis dataKey="value" type="number" hide />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 7.5% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Displaying comparative analysis of investment returns.
        </div>
      </CardFooter>
    </Card>
  );
}

