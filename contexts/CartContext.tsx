import React, { createContext } from 'react'
import { MenuItem } from '@/types/MenuItem'

interface CartContextType {
  items: { [id: string]: MenuItem & { itemsNumber: number } }
  addItem: (id: string, item: MenuItem) => void
}

export const CartContext = createContext<CartContextType>({ items: {}, addItem: () => {} })

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContextProvider = (props: CartProviderProps) => {
  const { children } = props

  const [items, setItems] = React.useState<{ [id: string]: MenuItem & { itemsNumber: number } }>({})

  const addItem = (id: string, item: MenuItem) => {
    if (id in items) {
      setItems((prev) => ({
        ...prev,
        [id]: { ...prev[id], itemsNumber: prev[id].itemsNumber + 1 },
      }))
    } else {
      setItems((prev) => ({ ...prev, [id]: { ...item, itemsNumber: 1 } }))
    }
  }

  const value = {
    items,
    addItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
