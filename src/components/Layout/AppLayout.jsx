import React from 'react'
import Headers from '../ui/Headers'
import Footers from '../ui/Footers'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <Headers />
            <main className="Page-Wrapper">
                <Outlet />
            </main>
            <Footers />
        </>
    )
}

export default AppLayout