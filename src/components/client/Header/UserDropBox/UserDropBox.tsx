import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Button } from '@/components/ui/button';
import { HoverCard } from '@radix-ui/react-hover-card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';



const UserDropBox = () => {
    return (
        <>
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <Avatar className="transition-all duration-300 mx-2 text-#fff bg-#2c2c2c4a border rounded-full border-#787878">
                <Link to={`/auth/1`} >
                  <AvatarImage className='w-[40px] h-[40px] rounded-full' src="https://github.com/shadcn.png" />
                  {/* <AvatarFallback>CN</AvatarFallback> */}
                  <HoverCardContent
                    sideOffset={6}
                    align="end"
                    alignOffset={-18}
                    className="rounded-xl w-56 px-0 text-12.8px bg-#2c2c2c4a border-#bababa py-2 min-w-40 backdrop-blur-[3px]"
                  >
                    <div className="flex items-center px-4 border-solid border-b-[1px] border-#bababa pb-3">
                      <div className="w-[30%] ">
                        <Avatar>
                            <Link to={`/auth/1`}>
                              <AvatarImage className='w-[50px] h-[50px] rounded-full' src="https://github.com/shadcn.png"/>
                            </Link>
                        </Avatar>
                      </div>
                      <div className="w-[70%]">
                        <Link to={`/auth/1`} className='font-black hover:text-#72be43'>Đức Trung</Link>
                        <p className='truncate text-11px'>nguyentrungduc2807@gmail.com</p>
                      </div>
                    </div>
                    <ul className='m-0 p-0'>
                        <li className='px-3 py-2 hover:bg-#72be43 text-left'><Link className='px-2 py-2' to={``}>Ví</Link></li>
                        <li className='px-3 py-2 hover:bg-#72be43 text-left'><Link className='px-2 py-2' to={``}>Đổi mật khẩu</Link></li>
                        <li className='px-3 py-2 hover:bg-#72be43 text-left'><Link className='px-2 py-2' to={``}>Đăng xuất</Link></li>
                    </ul>
                  </HoverCardContent>
                </Link>
                </Avatar>
              </HoverCardTrigger>
            </HoverCard>
        </>
    )
}

export default UserDropBox
