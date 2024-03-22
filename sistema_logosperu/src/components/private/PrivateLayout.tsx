import { Navigate, Outlet } from 'react-router-dom'
import Header from './includes/Header'
import SideBar from './includes/SideBar'
import useAuth from '../../hooks/useAuth'

export const PrivateLayout = (): JSX.Element => {
  const { auth, loading } = useAuth()
  const currentPath = window.location.pathname
  if (loading && auth) {
    return (
      <div className="centrarclase_do_spinner">
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="min-h-screen grid grid-cols-1 xl:grid-cols-7">
        <SideBar />
        <div className="xl:col-span-6">
          <Header />
          <div className={`${currentPath.includes('admin/lista-servicios/avances2') ? 'bg-white/60' : ''} ${currentPath.includes('admin/gestor-tareas') || currentPath.includes('admin/colaboradores/gestor_tareas') || currentPath.includes('/admin/colaboradores/horario-laboral') || currentPath.includes('admin/listadocm') || currentPath.includes('admin/documentos') ? 'h-[100vh]' : 'h-[90vh] py-2 px-4 lg:px-8 '} overflow-y-auto relative `}>
          {
              auth.id != ''
                ? <Outlet />
                : <Navigate to="/login"/>
            }
          </div>
        </div>
      </div>
    )
  }
}
