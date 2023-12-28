import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import { Login } from '../components/public/Login'
import { PrivateLayout } from '../components/private/PrivateLayout'
import { ListadoResultados } from '../components/private/tables/resultados/ListadoResultados'
import { ViewResultados } from '../components/private/tables/resultados/ViewResultados'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<PrivateLayout />}>
            <Route index element={<ListadoResultados />} />
            <Route path='view-servicio/:id' element={<ViewResultados />} />
            {/* SECCIONUNO */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
