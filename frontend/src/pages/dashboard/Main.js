import React from 'react'
import { Switch, Route, Routes } from 'react-router-dom'

import Home from '../dashboard/pages/Home'
import Products from '../dashboard/pages/Product/Products'
import NewProduct from '../dashboard/pages/NewProduct'
import EditProduct from './pages/Product/EditProduct'

const Main = () => (
    <main>

        <Routes>

            <Route path="/dashboard/" element={<Home />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/products/:id" element={<EditProduct />} />
            <Route path="/dashboard/new-product" element={<NewProduct />} />

        </Routes>
    </main>
)

export default Main
