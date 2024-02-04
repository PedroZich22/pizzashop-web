import { Skeleton } from '@/components/ui/skeleton'

export function MetricsCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-1/4" />
      <Skeleton className="h-4 w-1/2" />
    </>
  )
}
