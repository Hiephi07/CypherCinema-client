import HeaderAdmin from '@/components/admin/HeaderAdmin/HeaderAdmin'
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
            <div className=" bg-[#0f1111] w-[100%]">
                <HeaderAdmin/>
                <main className=''>
                  <Outlet />
                </main>
            </div>
            </div>
        </>
    )
}

export default LayoutAdmin
