import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import axios from 'axios'
import { FaUserGroup } from 'react-icons/fa6'
import useAuth from '../../../../../hooks/useAuth'
import { Global } from '../../../../../helper/Global'
import { HiComputerDesktop } from 'react-icons/hi2'
import { FaAngleLeft } from 'react-icons/fa'
import logo from './../../../../../assets/logo/logo_morado.jpg'

const SideBar = (): JSX.Element => {
  const { setAuth, setLoadingComponents } = useAuth()
  const token = localStorage.getItem('token')
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const cerrarSession = async (): Promise<void> => {
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
      email_alter: '',
      firma: '',
      pass_email: '',
      id_rol: 0
    })
    navigate('/login')
  }

  return (
    <>
      <div
        className={
          `manejar_Scroll xl:h-[100vh] md:overflow-y-scroll relative  ${open ? 'w-[5%]' : 'w-[80%] md:w-[40%] lg:w-[15%]'}  h-full top-0 bg-white shadow-xl p-4 flex flex-col justify-between z-50 transition-all`
        }
      >

        <span onClick={() => { setOpen(!open) }} className='absolute top-0 right-0 w-7 h-7 hover:bg-gray-200 cursor-pointer transition-colors bg-white shadow-md rounded-full text-black flex items-center justify-center
        '><FaAngleLeft/></span>
        <div>
          <ul className="ml-0 py-0">
          <h1 className="text-center text-2xl font-bold text-black mb-5">
            <img src={logo} alt="" className="m-auto w-[5.4rem] object-contain" />
          </h1>
          <hr className="mb-5" />
            <li>
              <Link
                to="clientes"
                className={
                  'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-white hover:text-gray-600 transition-colors w-full'
                }
                onClick={() => {
                  setLoadingComponents(false)
                }}
              >
                <FaUserGroup className="text-secundario text-xl" /> {!open && 'Clientes'}
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={
                  'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-white hover:text-gray-600 transition-colors w-full'
                }
                onClick={() => {
                  setLoadingComponents(false)
                }}
              >
                <HiComputerDesktop className="text-secundario text-xl" /> {!open && 'Sistema'}
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to={''}
            onClick={() => {
              void cerrarSession()
            }}
            className= 'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-white hover:text-gray-600 transition-colors w-full'

          >
            <RiLogoutCircleRLine className="text-secundario " /> {!open && 'Cerrar sesión'}
          </Link>
        </nav>
      </div>
    </>
  )
}

export default SideBar
