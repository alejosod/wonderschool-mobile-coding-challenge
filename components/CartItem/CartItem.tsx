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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginRight: 10,
        }}
      >
        <Text>{name}</Text>
        <Text style={{ marginLeft: 'auto' }}>{`$${price} x`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
        }}
      >
        <MinusIconButton onPress={onMinusPress} />
        <Text style={{ marginHorizontal: 5 }}>{itemsNumber}</Text>
        <PlusIconButton onPress={onPlusPress} />
        <Text
          style={{ marginRight: 10, marginLeft: 10 }}
        >{`$${(price * itemsNumber).toFixed(2)}`}</Text>
      </View>
    </View>
  )
}
