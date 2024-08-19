import React from 'react'
import Svg, { Line } from 'react-native-svg'
import { ViewStyle } from 'react-native'

interface PlusIconProps {
  size?: number
  color?: string
  style?: ViewStyle
}

const PlusIcon: React.FC<PlusIconProps> = ({ size = 24, color = 'black', style }) => {
  const halfSize = size / 2
  const strokeWidth = size / 8

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={style}>
      <Line
        x1={halfSize}
        y1={0}
        x2={halfSize}
        y2={size}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Line
        x1={0}
        y1={halfSize}
        x2={size}
        y2={halfSize}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PlusIcon
