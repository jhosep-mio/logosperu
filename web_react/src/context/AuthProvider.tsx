import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react'
import { type ValuesSubCategoriasPortafolio, type carrito } from '../components/shared/Interfaces'
import { getDataSubCategoriasToPortafolio } from '../components/shared/FechData'

export interface AuthContextValue {
  cart: carrito[]
  setCart: Dispatch<SetStateAction<carrito[]>>
  heard: carrito[]
  loadinggeneral: boolean
  subcategorias: ValuesSubCategoriasPortafolio[]
  setHeard: Dispatch<SetStateAction<carrito[]>>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}): JSX.Element => {
  const [cart, setCart] = useState<carrito[]>([])
  const [heard, setHeard] = useState<carrito[]>([])
  const [loadinggeneral, setloadinggeneral] = useState(true)
  const [subcategorias, setSubcategorias] = useState<
  ValuesSubCategoriasPortafolio[]
  >([])
  const [, setTotalRegistros] = useState(0)

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

    Promise.all([
      getDataSubCategoriasToPortafolio(
        'getSubCategoriasToPortafolio',
        setSubcategorias,
        setTotalRegistros
      )
    ]).then(() => {
      setloadinggeneral(false)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        cart,
        loadinggeneral,
        setHeard,
        heard,
        setCart,
        subcategorias
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
