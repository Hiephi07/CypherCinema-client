import Footer from '@/components/client/Footer/Footer'
import Header from '@/components/client/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
    
}

const LayoutClient = (props: Props) => {
    return (
        <>
            <Header/>
                <Outlet />
            <Footer />
        </>
    )
}

export default LayoutClient
