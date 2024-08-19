import { TouchableOpacity, View } from 'react-native'
import PlusIcon from '@/components/svg/PlusIcon'
import { PlusIconStyles } from '@/components/PlusIcon/PlusIcon.styles'

interface PlusIconProps {
  onPress: () => void
}

export const PlusIconButton = (props: PlusIconProps) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={PlusIconStyles.container}>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  )
}
