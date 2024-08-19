import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { ViewStyle } from 'react-native'

interface CartIconProps {
  size?: number
  color?: string
  style?: ViewStyle
}

const CartIcon: React.FC<CartIconProps> = ({ size = 24, color = 'black', style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M6 6h15l-1.68 7.29a2 2 0 0 1-2 1.71H8.41a2 2 0 0 1-2-1.55L4.34 4H2" />
      <Circle cx="9" cy="19" r="1" />
      <Circle cx="18" cy="19" r="1" />
    </Svg>
  )
}

export default CartIcon
