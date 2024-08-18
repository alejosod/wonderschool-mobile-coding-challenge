import { menuItems } from '@/data/menu'
import { useEffect, useState } from 'react'
import { MenuItem } from '@/types/MenuItem'
import { MenuResponseToMenusItem } from '@/utils/MenuResponseToMenusItem'

// hook to emulate fetching data and some util states.
export const useData = () => {
  const [data, setData] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const newSanitizedData = menuItems.map(MenuResponseToMenusItem)
      setData(newSanitizedData)
      setLoading(false)
      setCompleted(true)
    })()
  }, [])

  return [data, { loading, error, completed }]
}
