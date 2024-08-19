import CartIcon from '@/components/svg/CartIcon'
import { Link } from 'expo-router'
import { View } from 'react-native'

export const MenuHeader = () => {
  return (
    <View style={{ width: '100%' }}>
      <Link style={{ marginLeft: 'auto', margin: 10 }} href={'/Cart'}>
        <CartIcon />
      </Link>
    </View>
  )
}
