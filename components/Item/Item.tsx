import { Text, View } from 'react-native'
import { ItemStyles } from '@/components/Item/Item.styles'

interface ItemProps {
  id: string
  name: string
  price: number
}

export const Item = (props: ItemProps) => {
  const { name, price } = props

  return (
    <View style={ItemStyles.container}>
      <Text style={ItemStyles.itemName}>{name}</Text>
      <Text style={ItemStyles.itemPrice}>{`$${price.toFixed(2)}`}</Text>
    </View>
  )
}
