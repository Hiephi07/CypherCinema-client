import HeaderAdmin from '@/components/admin/Header/HeaderAdmin'
import SideBar from '@/components/admin/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

interface Props {
    
}

const LayoutAdmin = (props: Props) => {
    return (
        <>
            <div className="flex">
              <div className="w-[20%]">
                <SideBar />
              </div>
            <div className="bg-[#1e2021] w-[100%]">
                <HeaderAdmin/>
                <main className='mt-16'>
                  <Outlet />
                </main>
            </div>
            </div>
        </>
    )
}

export default LayoutAdmin
