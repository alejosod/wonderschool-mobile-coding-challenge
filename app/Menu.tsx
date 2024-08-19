import { View } from 'react-native'
import { MenuItem } from '@/components/MenuItem/MenuItem'
import { MenuHeader } from '@/components/MenuHeader/MenuHeader'

const Menu = () => {
  return (
    <View>
      <MenuHeader />
      <MenuItem id={'testing'} name={'testing'} price={5.99} />
    </View>
  )
}

export default Menu
