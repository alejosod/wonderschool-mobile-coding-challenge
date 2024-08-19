import { View } from 'react-native'
import { Item } from '@/components/Item/Item'
import { MenuItem as MenuItemType } from '@/types/MenuItem'
import { PlusIconButton } from '@/components/PlusIcon/PlusIcon'
import { useCart } from '@/hooks/useCart'

interface MenuItemProps {
  id: string
  name: string
  price: number
}

export const MenuItem = (props: MenuItemProps) => {
  const { id, name, price } = props
  const { addItemToCart } = useCart()

  const onPress = () => {
    const item: MenuItemType = {
      id,
      name,
      price,
    }

    addItemToCart(id, item)
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <Item name={name} price={price} />
      <PlusIconButton onPress={onPress} />
    </View>
  )
}
