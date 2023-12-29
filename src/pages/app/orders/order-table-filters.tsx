import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[302px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue className="text-sm font-medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Processando</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="h4 mr-2 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="h4 mr-2 w-4" />
        Remover resultados
      </Button>
    </form>
  )
}
