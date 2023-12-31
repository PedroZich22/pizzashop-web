import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 400 },
  { date: '12/12', revenue: 500 },
  { date: '13/12', revenue: 2000 },
  { date: '14/12', revenue: 800 },
  { date: '15/12', revenue: 2300 },
  { date: '16/12', revenue: 1300 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <CardTitle className="text-base font-medium">
          Receita no período
        </CardTitle>
        <CardDescription>Receita diária no período</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              dataKey="revenue"
              strokeWidth={2}
              stroke={colors.violet['400']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
