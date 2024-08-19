import { ScrollView, Text, View } from 'react-native'
import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/components/CartItem/CartItem'
import { reduceCartTotal } from '@/utils/reduceCartTotal'

const Cart = () => {
  const { items } = useCart()

  const total = items.reduce(reduceCartTotal, 0)

  return items.length > 0 ? (
    <View>
      <ScrollView
        style={{
          height: '85%',
          borderBottomWidth: 2,
          borderBottomColor: `rgba(00,00,00,.1)`,
        }}
      >
        {items.map((item) => (
          <CartItem id={item.id} key={item.id} name={item.name} price={item.price} />
        ))}
      </ScrollView>
      <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 20 }}>{`Total: $${total}`}</Text>
    </View>
  ) : (
    <View>
      <Text>No items Added</Text>
    </View>
  )
}

export default Cart
