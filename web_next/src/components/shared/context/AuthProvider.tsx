'use client'
import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react'
import {
  carrito, errorValues
} from '../interfaces/interfaces'

export interface AuthContextValue {
  cart: carrito[];
  setCart: Dispatch<SetStateAction<carrito[]>>;
  heard: carrito[];
  setHeard: Dispatch<SetStateAction<carrito[]>>;
  carrito: boolean
  setCarrito: Dispatch<SetStateAction<boolean>>;
  setShowError: Dispatch<SetStateAction<errorValues | null>>
  showError: errorValues | null
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<carrito[]>([])
  const [heard, setHeard] = useState<carrito[]>([])
  const [carrito, setCarrito] = useState(false)
  useEffect(() => {
    // Recuperar el carrito del almacenamiento local cuando la página se cargue
    const storedCart = localStorage.getItem('cart')
    const storedHeard = localStorage.getItem('heard')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCart(parsedCart)
    }
    if (storedHeard) {
      const parsedHeardt = JSON.parse(storedHeard)
      setHeard(parsedHeardt)
    }
  }, [])
  const [showError, setShowError] = useState<errorValues | null>(null)

  return (
    <AuthContext.Provider
      value={{
        cart,
        setHeard,
        heard,
        setCart,
        carrito,
        setCarrito,
        showError,
        setShowError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
