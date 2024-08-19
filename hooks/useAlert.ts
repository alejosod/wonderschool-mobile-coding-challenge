import { useContext } from 'react'
import { AlertContext } from '@/contexts/AlertContext'

export const useAlert = (message: string) => {
  const { alert: sendAlert } = useContext(AlertContext)

  const alert = () => {
    sendAlert(message)
  }

  return {
    alert,
  }
}
