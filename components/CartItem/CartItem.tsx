import { Text, View } from 'react-native'
import { useCartItem } from '@/hooks/useCartItem'
import { PlusIconButton } from '@/components/PlusIcon/PlusIcon'
import { MinusIconButton } from '@/components/MinusIcon/MinusIconButton'

interface CartItemProps {
  name: string
  price: number
  id: string
}

export const CartItem = (props: CartItemProps) => {
  const { name, price, id } = props

  const { itemsNumber, removeItemFromCart, addItemToCart } = useCartItem(id)

  const onPlusPress = () => {
    addItemToCart(id)
  }

  const onMinusPress = () => {
    removeItemFromCart(id)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: `rgba(00,00,00,.1)`,
      }}
    >
      <Text style={{ marginRight: 'auto' }}>{name}</Text>
      <Text style={{ marginRight: 'auto' }}>{`$${price} x`}</Text>
      <MinusIconButton onPress={onMinusPress} />
      <Text style={{ marginHorizontal: 5 }}>{itemsNumber}</Text>
      <PlusIconButton onPress={onPlusPress} />
    </View>
  )
}
