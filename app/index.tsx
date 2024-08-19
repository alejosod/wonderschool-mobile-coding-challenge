import { ScrollView, View } from 'react-native'
import { MenuItem } from '@/components/MenuItem/MenuItem'
import { MenuHeader } from '@/components/MenuHeader/MenuHeader'
import { useData } from '@/hooks/useData'

const Index = () => {
  const [data] = useData()

  return (
    <View>
      <MenuHeader />
      <ScrollView>
        {data.map((item) => (
          <MenuItem key={item.id} id={item.id} name={item.name} price={item.price} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Index
