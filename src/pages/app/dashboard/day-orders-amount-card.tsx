import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 to-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">36</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-rose-400 dark:text-rose-500">+6%</span> em
          relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
