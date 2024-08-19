import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { CartContextProvider } from '@/contexts/CartContext'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RootSiblingParent } from 'react-native-root-siblings'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <RootSiblingParent>
      <AlertContextProvider>
        <CartContextProvider>
          <Stack>
            <Stack.Screen name={'Cart'} />
          </Stack>
        </CartContextProvider>
      </AlertContextProvider>
    </RootSiblingParent>
  )
}
