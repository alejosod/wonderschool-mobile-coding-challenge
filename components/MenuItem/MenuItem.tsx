import { View } from 'react-native'
import { Item } from '@/components/Item/Item'
import { MenuItem as MenuItemType } from '@/types/MenuItem'
import { PlusIconButton } from '@/components/PlusIcon/PlusIcon'
import { useCartItem } from '@/hooks/useCartItem'
import { useAlert } from '@/hooks/useAlert'

interface MenuItemProps {
  id: string
  name: string
  price: number
}

export const MenuItem = (props: MenuItemProps) => {
  const { id, name, price } = props
  const { addItemToCart } = useCartItem(id)
  const { alert } = useAlert(`${name} added`)

  const onPress = () => {
    const item: MenuItemType = {
      id,
      name,
      price,
    }

    addItemToCart(id, item)
    alert()
  }

  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Item name={name} price={price} />
      <PlusIconButton onPress={onPress} />
    </View>
  )
}
