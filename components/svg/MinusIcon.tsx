import React from 'react'
import Svg, { Line } from 'react-native-svg'
import { ViewStyle } from 'react-native'

interface MinusIconProps {
  size?: number
  color?: string
  style?: ViewStyle
}

const MinusIcon: React.FC<MinusIconProps> = ({ size = 24, color = 'black', style }) => {
  const strokeWidth = size / 8

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={style}>
      <Line
        x1={0}
        y1={size / 2}
        x2={size}
        y2={size / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default MinusIcon
