import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

export const useCartItem = (itemId: string) => {
  const { items, addItem, removeItem } = useContext(CartContext)

  const addItemToCart = (id: string) => {
    addItem(id)
  }

  const removeItemFromCart = (id: string) => {
    removeItem(id)
  }

  return {
    itemsNumber: items[itemId].itemsNumber ?? 0,
    addItemToCart,
    removeItemFromCart,
  }
}
