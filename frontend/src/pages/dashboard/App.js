import React from 'react'

import Main from '../dashboard/Main'
import Sidebar from './container/Sidebar'
import Topbar from '../dashboard/container/Topbar'
import Footer from '../dashboard/container/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => (
    <React.Fragment>
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
                <Topbar />
                {/* <Main /> */}
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* Add other admin routes here */}
                </Routes>
                <Sidebar/>
            </div>
            <Footer />
        </div>
    </React.Fragment>
)

export default App

