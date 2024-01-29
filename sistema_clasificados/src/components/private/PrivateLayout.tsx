import { Navigate, Outlet } from 'react-router-dom'
import SideBar from './includes/SideBar'
import useAuth from '../../hooks/useAuth'

export const PrivateLayout = (): JSX.Element => {
  const { auth, loading } = useAuth()

  if (loading) {
    return <div className='centrarclase_do_spinner'>
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
  } else {
    return (
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
          <SideBar />
          <div className="xl:col-span-5 h-full md:h-[96vh] my-auto">
            <div className="h-full md:h-[96vh] overflow-y-scroll md:pt-1 md:px-4 relative overflow-x-hidden">
            {
              auth.id
                ? <Outlet />
                : <Navigate to="/login"/>
            }
            </div>
          </div>

        </div>
    )
  }
}
