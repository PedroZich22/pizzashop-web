import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 to-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,50</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-400 dark:text-emerald-500">+ 15%</span>{' '}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
