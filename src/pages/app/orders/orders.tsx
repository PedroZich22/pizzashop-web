import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result
                  ? result.orders.map((order) => {
                      return <OrderTableRow key={order.orderId} order={order} />
                    })
                  : Array.from({ length: 10 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="w-[64px]">
                          <Skeleton className="h-8 w-8" />
                        </TableCell>
                        <TableCell className="w-[140px]">
                          <Skeleton className="h-8 w-24" />
                        </TableCell>
                        <TableCell className="w-[180px]">
                          <Skeleton className="h-8 w-24" />
                        </TableCell>
                        <TableCell className="w-[140px]">
                          <Skeleton className="h-8 w-24" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-8 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-8 w-full" />
                        </TableCell>
                        <TableCell className="w-[164px]">
                          <Skeleton className="h-8 w-24" />
                        </TableCell>
                        <TableCell className="w-[132px]">
                          <Skeleton className="h-8 w-24" />
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
