import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { MenuItem } from '@/types/MenuItem'

export const useCartItem = (itemId: string) => {
  const { items, addItem, removeItem } = useContext(CartContext)

  const addItemToCart = (id: string, item?: MenuItem) => {
    addItem(id, item)
  }

  const removeItemFromCart = (id: string) => {
    removeItem(id)
  }

  return {
    itemsNumber: items[itemId]?.itemsNumber ?? 0,
    addItemToCart,
    removeItemFromCart,
  }
}
