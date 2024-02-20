import { useState, Fragment, useEffect } from 'react'
import { IoDocumentAttach } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
// Icons
import {
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiStackFill,
  RiCodeBoxFill
} from 'react-icons/ri'
import { MdNotificationsActive, MdDashboard } from 'react-icons/md'
import axios from 'axios'
import { Global } from '../../../helper/Global'
import logo from './../../../assets/logo/logo.png'
import { type RolsValues } from '../../shared/schemas/Interfaces'
import { SiGoogletagmanager } from 'react-icons/si'
import {
  FaBriefcase,
  FaChartSimple,
  FaReceipt,
  FaRectangleList,
  FaUserGroup
} from 'react-icons/fa6'
import { BsPersonVcardFill } from 'react-icons/bs'
import { HiRectangleGroup } from 'react-icons/hi2'
import { GrTransaction } from 'react-icons/gr'
import { FaTasks } from 'react-icons/fa'

const SideBar = (): JSX.Element => {
  const {
    auth,
    setAuth,
    roles,
    setLoadingComponents,
    loadingComponents,
    totalNotificaciones
  } = useAuth()
  const token = localStorage.getItem('token')
  const [showMenu, setShowMenu] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  //   const [showSubmenu2, setShowSubmenu2] = useState(false)
  const [showSubmenu3, setShowSubmenu3] = useState(false)
  const [showSubmenu4, setShowSubmenu4] = useState(false)
  const [showSubmenu5, setShowSubmenu5] = useState(false)
  const [showSubmenu6, setShowSubmenu6] = useState(false)
  const [showSubmenu7, setShowSubmenu7] = useState(false)
  const [showSubmenu8, setShowSubmenu8] = useState(false)
  const [showSubmenu9, setShowSubmenu9] = useState(false)

  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(0)
  const [activeItem2, setActiveItem2] = useState(0)
  const [colaboradores, setColaboradores] = useState([])

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

  const handleItemClick = (itemId: number): void => {
    setActiveItem(itemId)
  }

  const handleItemClick2 = (itemId: number): void => {
    setActiveItem2(itemId)
  }

  const getColaboradores = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getUsuarios`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setColaboradores(request.data)
  }

  useEffect(() => {
    getColaboradores()
  }, [])

  return (
    <>
      <div
        className={`manejar_Scroll xl:h-[100vh] md:overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-[#f1f1f1] shadow-xl p-4 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : 'left-full'
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-black mb-5">
            <img src={logo} alt="" className="m-auto w-[5.4rem]" />
          </h1>
          <hr className="mb-5" />
          <ul className="ml-0 p-0">
            <li className="">
              <button
                className={
                  'flex items-center gap-3 py-2 pl-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full relative'
                }
                onClick={() => {
                  setLoadingComponents(!loadingComponents)
                  setShowMenu(false)
                }}
              >
                <MdNotificationsActive className="text-main/80 text-2xl" />
                Notificaciones
                <span className="bg-main text-white w-5 h-5 text-xs flex justify-center items-center  rounded-md ">
                  {totalNotificaciones}
                </span>
              </button>
            </li>
            {roles.map(
              (role: RolsValues): React.ReactNode =>
                auth.id_rol == role.id &&
                JSON.parse(role.accesos).map((route: { peso: string }) => (
                  <>
                    {route.peso == 'superusuario'
                      ? (
                      <>
                        <li key={22}>
                          <button
                            onClick={() => {
                              setShowSubmenu8(!showSubmenu8)
                            }}
                            className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
                          >
                            <span className="flex items-center gap-4 w-full">
                              <FaUserGroup className="text-main/80 text-xl" />{' '}
                              Clientes
                            </span>
                            <RiArrowRightSLine
                              className={`mt-1 ${
                                showSubmenu8 ? 'rotate-90' : ''
                              } transition-all`}
                            />
                          </button>
                          <ul
                            className={` ml-0 ${
                              showSubmenu8 ? '' : 'h-0'
                            } overflow-hidden transition-all`}
                          >
                            <li>
                              <Link
                                to="lista-clientes"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 399
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(399)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Clientes
                              </Link>
                              <Link
                                to="lista-preventa/sinproyectos"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 499
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(499)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Sin proyectos
                              </Link>
                              <Link
                                to="lista-pre-clientes"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 339
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(339)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Pre-Clientes
                              </Link>
                            </li>
                            <ul
                              className={` ${
                                showSubmenu8 ? '' : 'h-0'
                              } overflow-hidden transition-all`}
                            >
                              <button
                                onClick={() => {
                                  setShowSubmenu9(!showSubmenu9)
                                  handleItemClick(397)
                                }}
                                className={`bg-transparent ${
                                  showSubmenu9
                                    ? 'after:absolute after:w-4 after:bg-gray-500 after:h-[1px] after:bottom-0 after:left-0'
                                    : ''
                                }  py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 397
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                              >
                                <span className="flex items-center gap-4 w-full ">
                                  Citas
                                </span>
                                <RiArrowRightSLine
                                  className={`mt-1  ${
                                    showSubmenu7 ? 'rotate-90' : ''
                                  } transition-all`}
                                />
                              </button>
                              <ul
                                className={` ml-4 ${
                                  showSubmenu9 ? '' : 'h-0'
                                } overflow-y-hidden transition-all`}
                              >
                                <li>
                                  <Link
                                    to={'/admin/llamadas-pendientes'}
                                    className={`py-2 px-4 border-l  flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                      activeItem == 375
                                        ? 'before:bg-main'
                                        : 'before:bg-gray-500'
                                    } hover:text-main transition-colors`}
                                    onClick={() => {
                                      handleItemClick(375)
                                      setShowMenu(false)
                                      setLoadingComponents(false)
                                    }}
                                  >
                                    Pendientes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={'/admin/lista-historial'}
                                    className={`py-2 px-4 border-l  flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                      activeItem == 395
                                        ? 'before:bg-main'
                                        : 'before:bg-gray-500'
                                    } hover:text-main transition-colors`}
                                    onClick={() => {
                                      handleItemClick(395)
                                      setShowMenu(false)
                                      setLoadingComponents(false)
                                    }}
                                  >
                                    Historial
                                  </Link>
                                </li>
                              </ul>
                            </ul>
                          </ul>
                        </li>
                        <li key={230}>
                          <Link
                            to="lista-preventa"
                            className={
                              'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                            }
                            onClick={() => {
                              handleItemClick2(1)
                              setShowMenu(false)
                              setLoadingComponents(false)
                            }}
                          >
                            <FaRectangleList className="text-main/80 text-xl" />{' '}
                            Preventa
                          </Link>
                        </li>
                        <li key={24}>
                          <button
                            onClick={() => {
                              setShowSubmenu6(!showSubmenu6)
                            }}
                            className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
                          >
                            <span className="flex items-center gap-4 w-full">
                              <FaChartSimple className="text-main/80 text-xl" />{' '}
                              Proyectos
                            </span>
                            <RiArrowRightSLine
                              className={`mt-1 ${
                                showSubmenu6 ? 'rotate-90' : ''
                              } transition-all`}
                            />
                          </button>
                          <ul
                            className={` ml-0 ${
                              showSubmenu6 ? '' : 'h-0'
                            } overflow-hidden transition-all`}
                          >
                            <li>
                              <Link
                                to="lista-ventas"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 299
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(299)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Todos
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="lista-ventas-agencia"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 291
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(291)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Proyectos de agencia
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="lista-ventas-vencidos"
                                className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 298
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                                onClick={() => {
                                  handleItemClick(298)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                              >
                                Plazo vencido
                              </Link>
                            </li>
                            <ul
                              className={` ${
                                showSubmenu6 ? '' : 'h-0'
                              } overflow-hidden transition-all`}
                            >
                              <button
                                onClick={() => {
                                  setShowSubmenu7(!showSubmenu7)
                                  handleItemClick(297)
                                }}
                                className={`bg-transparent ${
                                  showSubmenu7
                                    ? 'after:absolute after:w-4 after:bg-gray-500 after:h-[1px] after:bottom-0 after:left-0'
                                    : ''
                                }  py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                  activeItem == 297
                                    ? 'before:bg-main'
                                    : 'before:bg-gray-500'
                                } hover:text-main transition-colors`}
                              >
                                <span className="flex items-center gap-4 w-full ">
                                  Colaboradores
                                </span>
                                <RiArrowRightSLine
                                  className={`mt-1  ${
                                    showSubmenu7 ? 'rotate-90' : ''
                                  } transition-all`}
                                />
                              </button>
                              <ul
                                className={` ml-4 ${
                                  showSubmenu7 ? '' : 'h-0'
                                } overflow-y-hidden transition-all`}
                              >
                                {colaboradores
                                  .filter(
                                    (colaborador: {
                                      id_rol: string
                                      id: string
                                    }) =>
                                      colaborador.id_rol != '99' ||
                                      colaborador.id == '8'
                                  )
                                  .map(
                                    (colaborador: {
                                      name: string
                                      id: number
                                    }) => (
                                      <li key={colaborador.id}>
                                        <Link
                                          to={`/admin/lista-ventas/${colaborador.id}`}
                                          className={`py-2 px-4 border-l  flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                            activeItem == colaborador.id
                                              ? 'before:bg-main'
                                              : 'before:bg-gray-500'
                                          } hover:text-main transition-colors`}
                                          onClick={() => {
                                            handleItemClick(colaborador.id)
                                            setShowMenu(false)
                                            setLoadingComponents(false)
                                          }}
                                        >
                                          {colaborador.name}
                                        </Link>
                                      </li>
                                    )
                                  )}
                              </ul>
                            </ul>
                          </ul>
                        </li>
                        <li key={232}>
                            <Link
                                to="transacciones"
                                className={
                                'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                                }
                                onClick={() => {
                                  handleItemClick2(1)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                            >
                            <GrTransaction className="text-main/80 text-xl" />{' '} Transacciones
                            </Link>
                        </li>
                        <li key={25}>
                          <Link
                            to="lista-planes"
                            className={
                              'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                            }
                            onClick={() => {
                              handleItemClick2(25)
                              setShowMenu(false)
                              setLoadingComponents(false)
                            }}
                          >
                            <FaReceipt className="text-main/80 text-xl" />{' '}
                            Planes
                          </Link>
                        </li>
                        <li key={77}>
                          <Link
                            to="colaboradores"
                            className={
                              'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                            }
                            onClick={() => {
                              handleItemClick2(77)
                              setShowMenu(false)
                              setLoadingComponents(false)
                            }}
                          >
                            <BsPersonVcardFill className="text-main/80 text-xl" />{' '}
                            Colaboradores
                          </Link>
                        </li>
                        <li key={26}>
                          <button
                            onClick={() => {
                              setShowSubmenu4(!showSubmenu4)
                            }}
                            className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
                          >
                            <span className="flex items-center gap-4 w-full">
                              <RiCodeBoxFill className="text-main/80 text-[1.35rem]" />{' '}
                              Pagina web
                            </span>
                            <RiArrowRightSLine
                              className={`mt-1 ${
                                showSubmenu4 ? 'rotate-90' : ''
                              } transition-all`}
                            />
                          </button>
                          <ul
                            className={` ${
                              showSubmenu4 ? 'max-h-[160px]' : 'h-0'
                            } overflow-y-hidden transition-all`}
                          >
                            <button
                              onClick={() => {
                                setShowSubmenu5(!showSubmenu5)
                                handleItemClick2(2)
                              }}
                              className={`bg-transparent ${
                                showSubmenu5
                                  ? 'after:absolute after:w-4 after:bg-gray-500 after:h-[1px] after:bottom-0 after:left-0'
                                  : ''
                              } py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                activeItem2 == 2
                                  ? 'before:bg-main'
                                  : 'before:bg-gray-500'
                              } hover:text-main transition-colors`}
                            >
                              <span className="flex items-center gap-4 w-full">
                                <RiStackFill className="text-main" /> Portafolio
                              </span>
                              <RiArrowRightSLine
                                className={`mt-1  ${
                                  showSubmenu5 ? 'rotate-90' : ''
                                } transition-all`}
                              />
                            </button>
                            <ul
                              className={` ml-4 ${
                                showSubmenu5 ? 'h-[260px]' : 'h-0'
                              } overflow-y-hidden transition-all`}
                            >
                              <li>
                                <Link
                                  to="categorias-portafolio"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem == 1
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick(1)
                                  }}
                                >
                                  Categorias
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="subcategorias-portafolio"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem == 2
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick(2)
                                  }}
                                >
                                  Subcategorias
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="items-portafolio"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem == 3
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick(3)
                                  }}
                                >
                                  Items
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="lista-briefs-landing"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem == 4
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick(4)
                                  }}
                                >
                                  Landing Page
                                </Link>
                              </li>
                            </ul>
                          </ul>
                        </li>
                        <li key="clasificados">
                          <Link
                            to="lista-clasificados"
                            className={
                              'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                            }
                            onClick={() => {
                              handleItemClick2(25)
                              setShowMenu(false)
                              setLoadingComponents(false)
                            }}
                          >
                            <HiRectangleGroup className="text-main/80 text-xl" />{' '}
                            Clasificados
                          </Link>
                        </li>
                        <li key={236}>
                            <Link
                                to="dashboard"
                                className={
                                'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                                }
                                onClick={() => {
                                  handleItemClick2(1)
                                  setShowMenu(false)
                                  setLoadingComponents(false)
                                }}
                            >
                            <MdDashboard className="text-main/80 text-xl" />{' '} Metricas
                            </Link>
                        </li>
                      </>
                        )
                      : (
                          ''
                        )}
                  </>
                ))
            )}
            {roles.map(
              (role: RolsValues): React.ReactNode =>
                auth.id_rol == role.id &&
                JSON.parse(role.accesos).map((route: { peso: string }) => (
                  <>
                    {route.peso != 'superusuario' && (
                      <li>
                        <Link
                          to="lista-servicios"
                          className={
                            'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                          }
                          onClick={() => {
                            setShowMenu(false)
                            setLoadingComponents(false)
                          }}
                        >
                          <FaChartSimple className="text-main/80 text-xl" />{' '}
                          Proyectos
                        </Link>
                      </li>
                    )}
                  </>
                ))
            )}

            <li key={243}>
              <Link
                to="gestor-tareas"
                className={
                  'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                }
                onClick={() => {
                  handleItemClick2(1)
                  setShowMenu(false)
                  setLoadingComponents(false)
                }}
              >
              <FaTasks className="text-main/80 text-xl" />{' '} Gestor de tareas
              </Link>
            </li>

            <li key={243}>
              <Link
                to="documentos"
                className={
                  'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                }
                onClick={() => {
                  handleItemClick2(1)
                  setShowMenu(false)
                  setLoadingComponents(false)
                }}
              >
              <IoDocumentAttach className="text-main/80 text-xl" />{' '} Documentos
              </Link>
            </li>

            {auth.id == '9' &&
            <li key={233}>
              <Link
                to="clientes"
                className={
                  'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
                }
                onClick={() => {
                  handleItemClick2(1)
                  setShowMenu(false)
                  setLoadingComponents(false)
                }}
              >
              <FaUserGroup className="text-main/80 text-xl" />{' '} Clientes
              </Link>
            </li>}

            {auth.id_rol == 99 || auth.id == '2'
              ? <li key={234}>
                <button
                onClick={() => {
                  setShowSubmenu(!showSubmenu)
                }}
                className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
                >
                <span className="flex items-center gap-4 w-full">
                    <SiGoogletagmanager className="text-main/80 text-xl" />{' '}
                    CM
                </span>
                <RiArrowRightSLine
                    className={`mt-1 ${
                    showSubmenu ? 'rotate-90' : ''
                    } transition-all`}
                />
                </button>
                <ul
                className={` ml-0 ${
                    showSubmenu ? '' : 'h-0'
                } overflow-hidden transition-all`}
                >
                <li>
                    <Link
                    to="listadocm"
                    className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                        activeItem == 899
                        ? 'before:bg-main'
                        : 'before:bg-gray-500'
                    } hover:text-main transition-colors`}
                    onClick={() => {
                      handleItemClick(899)
                      setShowMenu(false)
                      setLoadingComponents(false)
                    }}
                    >
                    Calendario
                    </Link>
                    <Link
                    to="listadocm/metricas"
                    className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                        activeItem == 898
                        ? 'before:bg-main'
                        : 'before:bg-gray-500'
                    } hover:text-main transition-colors`}
                    onClick={() => {
                      handleItemClick(898)
                      setShowMenu(false)
                      setLoadingComponents(false)
                    }}
                    >
                    Metricas
                    </Link>
                </li>
                </ul>
            </li>

            //   <li key={234}>
            //   <Link
            //     to="listadocm"
            //     className={
            //       'flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full'
            //     }
            //     onClick={() => {
            //       handleItemClick2(1)
            //       setShowMenu(false)
            //       setLoadingComponents(false)
            //     }}
            //   >
            //   <SiGoogletagmanager className="text-main/80 text-xl" />{' '} CM
            //   </Link>
            // </li>
              : null}

            <li>
              <button
                onClick={() => {
                  setShowSubmenu3(!showSubmenu3)
                }}
                className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
              >
                <span className="flex items-center gap-4 w-full">
                  <FaBriefcase className="text-main/80 text-[1.15rem] ml-1" />{' '}
                  Briefs
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu3 ? 'rotate-90' : ''
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu3 ? 'h-[160px]' : 'h-0'
                } overflow-y-hidden transition-all`}
              >
                {roles.map(
                  (role: RolsValues): React.ReactNode =>
                    auth.id_rol == role.id &&
                    JSON.parse(role.accesos).map(
                      (route: { peso: string }, index: number) => (
                        <>
                          {route.peso == 'superusuario' ||
                          route.peso == 'diseño'
                            ? (
                            <Fragment key={index}>
                              <li>
                                <Link
                                  to="lista-briefs-diseños-new"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem2 == 1
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick2(1)
                                    setShowMenu(false)
                                    setLoadingComponents(false)
                                  }}
                                >
                                  <RiStackFill className="text-main" /> Logotipo
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="lista-briefs-brochure"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem2 == 999
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick2(999)
                                    setShowMenu(false)
                                    setLoadingComponents(false)
                                  }}
                                >
                                  <RiStackFill className="text-main" /> Brochure
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="lista-briefs-flyer"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem2 == 998
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick2(998)
                                    setShowMenu(false)
                                    setLoadingComponents(false)
                                  }}
                                >
                                  <RiStackFill className="text-main" /> Flyer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="lista-briefs-comunity"
                                  className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                    activeItem2 == 997
                                      ? 'before:bg-main'
                                      : 'before:bg-gray-500'
                                  } hover:text-main transition-colors`}
                                  onClick={() => {
                                    handleItemClick2(997)
                                    setShowMenu(false)
                                    setLoadingComponents(false)
                                  }}
                                >
                                  <RiStackFill className="text-main" /> Comunity
                                </Link>
                              </li>
                            </Fragment>
                              )
                            : (
                                ''
                              )}
                        </>
                      )
                    )
                )}
              </ul>
            </li>

            {/* <li>
                  <button
                    onClick={() => {
                      setShowSubmenu2(!showSubmenu2)
                    }}
                    className="flex items-center gap-4 py-2 px-4 rounded-lg text-black hover:bg-main_2-100 hover:text-main transition-colors w-full"
                  >
                    <span className="flex items-center gap-4 w-full">
                      <RiStackFill className="text-main" /> Old Briefs
                    </span>
                    <RiArrowRightSLine
                      className={`mt-1 ${
                        showSubmenu2 ? 'rotate-90' : ''
                      } transition-all`}
                    />
                  </button>
                  <ul
                    className={` ${
                      showSubmenu2 ? 'h-[250px]' : 'h-0'
                    } overflow-y-hidden transition-all`}
                  >
                    {roles.map(
                      (role: RolsValues): React.ReactNode =>
                        auth.id_rol == role.id &&
                        JSON.parse(role.accesos).map(
                          (route: { peso: string }, index: number) => (
                            <>
                              {route.peso == 'superusuario' ||
                              route.peso == 'diseño'
                                ? (
                                <li key={role.id}>
                                  <Link
                                    to="lista-briefs-diseños"
                                    className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                      activeItem2 == 1
                                        ? 'before:bg-main'
                                        : 'before:bg-gray-500'
                                    } hover:text-main transition-colors`}
                                    onClick={() => {
                                      handleItemClick2(1)
                                      setShowMenu(false)
                      setLoadingComponents(false)

                                    }}
                                  >
                                    <RiStackFill className="text-main" /> Diseño
                                  </Link>
                                </li>
                                  )
                                : (
                                    ''
                                  )}
                              {route.peso == 'superusuario' ||
                              route.peso == 'desarrollo'
                                ? (
                                <li key={index}>
                                  <button
                                    onClick={() => {
                                      setShowSubmenu(!showSubmenu)
                                      handleItemClick2(2)
                                    }}
                                    className={`bg-transparent py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                      activeItem2 == 2
                                        ? 'before:bg-main'
                                        : 'before:bg-gray-500'
                                    } hover:text-main transition-colors`}
                                  >
                                    <span className="flex items-center gap-4 w-full">
                                      <RiStackFill className="text-main" />{' '}
                                      Desarrollo
                                    </span>
                                    <RiArrowRightSLine
                                      className={`mt-1  ${
                                        showSubmenu ? 'rotate-90' : ''
                                      } transition-all`}
                                    />
                                  </button>
                                  <ul
                                    className={` ml-6 ${
                                      showSubmenu ? 'h-[160px]' : 'h-0'
                                    } overflow-y-hidden transition-all`}
                                  >
                                    <li>
                                      <Link
                                        to="lista-briefs-informativas"
                                        className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                          activeItem == 1
                                            ? 'before:bg-main'
                                            : 'before:bg-gray-500'
                                        } hover:text-main transition-colors`}
                                        onClick={() => {
                                          handleItemClick(1)
                                        }}
                                      >
                                        Informativas
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="lista-briefs-administrables"
                                        className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                          activeItem == 2
                                            ? 'before:bg-main'
                                            : 'before:bg-gray-500'
                                        } hover:text-main transition-colors`}
                                        onClick={() => {
                                          handleItemClick(2)
                                        }}
                                      >
                                        Administrables
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="lista-briefs-tiendas"
                                        className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                          activeItem == 3
                                            ? 'before:bg-main'
                                            : 'before:bg-gray-500'
                                        } hover:text-main transition-colors`}
                                        onClick={() => {
                                          handleItemClick(3)
                                        }}
                                      >
                                        Tiendas
                                      </Link>
                                    </li>

                                    <li>
                                      <Link
                                        to="lista-briefs-landing"
                                        className={`py-2 px-4 border-l flex items-center gap-3 text-black border-gray-500 ml-6  relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 ${
                                          activeItem == 4
                                            ? 'before:bg-main'
                                            : 'before:bg-gray-500'
                                        } hover:text-main transition-colors`}
                                        onClick={() => {
                                          handleItemClick(4)
                                        }}
                                      >
                                        Landing Page
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                  )
                                : (
                                    ''
                                  )}
                            </>
                          )
                        )
                    )}
                  </ul>
                </li> */}
          </ul>
        </div>
        <nav>
          <Link
            to={''}
            onClick={() => {
              void cerrarSession()
            }}
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-main_2-100 text-main transition-colors hover:text-main"
          >
            <RiLogoutCircleRLine className="text-main " /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => {
          setShowMenu(!showMenu)
        }}
        className="xl:hidden fixed bottom-4 right-4 bg-main text-white p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  )
}

export default SideBar
