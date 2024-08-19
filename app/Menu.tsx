import { Text, View } from 'react-native'
import { MenuItem } from '@/components/MenuItem/MenuItem'

const App = () => {
  return (
    <View>
      <Text>testing</Text>
      <MenuItem id={'testing'} name={'testing'} price={5.99} />
    </View>
  )
}

export default App
