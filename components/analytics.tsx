"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // This would be where you'd normally send analytics data
      // console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ''}`)
    }
  }, [pathname, searchParams])

  return null
}
