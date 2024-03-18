import { RiArrowDownSLine, RiLogoutCircleRLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import icono from './../../../assets/logo/icono.png'
import axios from 'axios'
import { Global } from '../../../helper/Global'
import { ModalNotificaciones } from '../tables/notificaciones/ModalNotificaciones'
import { AnimatePresence } from 'framer-motion'
import { AlertSucess } from '../../shared/alerts/AlertSucess'
import { ModalNoti } from '../tables/gestor-tareas/components/notificaciones/ModalNoti'
import { Toaster } from 'sonner'
const Header = (): JSX.Element => {
  const { auth, setAuth, title, showError, setShowError } = useAuth()
  const navigate = useNavigate()
  const [colaboradores, setColaboradores] = useState([])

  const cerrarSession = async (): Promise<void> => {
    const token = localStorage.getItem('token')

    const data = new FormData()
    data.append('_method', 'POST')

    await axios.post(`${Global.url}/logout`, data, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    localStorage.clear()
    setAuth({
      id: '',
      name: '',
      email: '',
      firma: '',
      pass_email: '',
      email_alter: '',
      id_rol: 0
    })
    navigate('/login')
  }

  const token = localStorage.getItem('token')
  const getColaboradores = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getUsuarios`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setColaboradores(request.data)
  }
  const currentPath = window.location.pathname

  useEffect(() => {
    getColaboradores()
  }, [])
  useEffect(() => {
    setTimeout(() => {
      if (showError != null) {
        setShowError(null)
      }
    }, 3000)
  }, [setShowError, showError])

  return (
    <>
       <ModalNoti />
       <Toaster position="top-center" richColors />

      {!currentPath.includes('admin/gestor-tareas') && !currentPath.includes('admin/colaboradores/gestor_tareas') && !currentPath.includes('admin/listadocm') && !currentPath.includes('admin/documentos') && !currentPath.includes('/admin/colaboradores/horario-laboral') &&
      (
        <>
          <header className="h-[7vh] lg:h-[10vh] border-b border-gray-100 shadow-sm p-8 flex items-center justify-between bg-white z-10">
            <div className="flex gap-3 md:gap-5">
              <p className="font-bold text-black  text-sm md:text-xl">
                {title}
              </p>
            </div>
            <nav className="flex items-center gap-2">
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 hover:bg-[#f1f1f1] group p-2 rounded-lg transition-colors">
                    <img
                      src={icono}
                      className="w-6 h-6 object-contain rounded-full"
                    />
                    <span className="text-black group-hover:text-main line-clamp-1">
                      {auth.name}
                    </span>
                    <RiArrowDownSLine />
                  </MenuButton>
                }
                align="end"
                arrow
                transition
                menuClassName="bg-secondary-100 p-4 "
              >
                <MenuItem className="p-0 hover:bg-transparent group">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-main_2-100 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <img
                      src={icono}
                      className="w-8 h-8 object-contain rounded-full"
                    />
                    <div className="flex flex-col text-sm ">
                      <span className="text-sm group-hover:text-black">
                        {auth.name}
                      </span>
                      <span className="text-xs group-hover:text-black">
                        {auth.email_alter}
                      </span>
                    </div>
                  </Link>
                </MenuItem>
                <hr className="my-4 border-gray-500" />
                <MenuItem className="p-0 hover:bg-transparent group">
                  <Link
                    to={''}
                    onClick={() => {
                      void cerrarSession()
                    }}
                    className="rounded-lg transition-colors text-gray-300 group-hover:text-black hover:bg-main_2-100 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiLogoutCircleRLine /> Cerrar sesión
                  </Link>
                </MenuItem>
              </Menu>
            </nav>
            <ModalNotificaciones colaboradores={colaboradores} />
          </header>
          <AnimatePresence>
            {showError != null && <AlertSucess showError={showError} />}
          </AnimatePresence>
        </>
      )
        }
    </>
  )
}

export default Header
