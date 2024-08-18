import React, { createContext } from 'react'
import { MenuItem } from '@/types/MenuItem'

interface CartContextType {
  items: { [id: string]: MenuItem }
}

export const CartContext = createContext<CartContextType>({ items: {} })

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContextProvider = (props: CartProviderProps) => {
  const { children } = props

  const [items, setItems] = React.useState<{ [id: string]: MenuItem }>({})

  const value = {
    items,
  }

  const addItem = (id: string, item: MenuItem) => {
    if (id in items) {
      return
    }

    setItems((prev) => ({ ...prev, [id]: { ...item } }))
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
