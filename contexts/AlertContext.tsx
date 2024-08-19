import { createContext, ReactNode } from 'react'
import Toast from 'react-native-root-toast'

export const AlertContext = createContext({
  alert: (message: string) => {},
})

interface AlertContextProps {
  children: ReactNode
}

const options = {
  position: Toast.positions.BOTTOM,
  duration: 100,
  backgroundColor: 'black',
  textColor: 'white',
}

export const AlertContextProvider = (props: AlertContextProps) => {
  const alert = (message: string) => {
    console.log(message)
    Toast.show(message, options)
  }

  return <AlertContext.Provider value={{ alert }}>{props.children}</AlertContext.Provider>
}
