import { Text, View } from 'react-native'
import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/components/CartItem/CartItem'

const Cart = () => {
  const { items } = useCart()

  return items.length > 0 ? (
    <View>
      {items.map((item) => (
        <CartItem id={item.id} key={item.id} name={item.name} price={item.price} />
      ))}
    </View>
  ) : (
    <View>
      <Text>No items Added</Text>
    </View>
  )
}

export default Cart
