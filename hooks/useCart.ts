import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { MenuItem } from '@/types/MenuItem'

export const useCart = () => {
  const { addItem, items } = useContext(CartContext)

  const addItemToCart = (id: string, item: MenuItem) => {
    addItem(id, item)
  }

  return {
    addItemToCart,
    items: Object.values(items),
  }
}
