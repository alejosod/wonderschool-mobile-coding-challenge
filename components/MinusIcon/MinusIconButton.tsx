import { TouchableOpacity, View } from 'react-native'
import MinusIcon from '@/components/svg/MinusIcon'
import { MinusIconButtonStyles } from '@/components/MinusIcon/MinusIconButton.styles'

interface PlusIconProps {
  onPress: () => void
}

export const MinusIconButton = (props: PlusIconProps) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={MinusIconButtonStyles.container}>
        <MinusIcon />
      </View>
    </TouchableOpacity>
  )
}
