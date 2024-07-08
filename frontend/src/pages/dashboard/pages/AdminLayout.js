import React from 'react';

import { Route, Routes } from 'react-router-dom';


import NewProduct from './NewProduct';

import Topbar from '../container/Topbar';
import Footer from '../container/Footer';
import DeleteDialog from '../container/DeleteDialog';
import MainAdmin from '../container/MainAdmin';

import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Category/Category';
import Products from './Product/Products';
import CreateCategory from './Category/CreateCategory';
import EditCategory from './Category/EditCategory';
import EditProduct from './Product/EditProduct';

function AdminLayout() {
    return (
        <div>
            <Topbar />
            <DeleteDialog />
            <Routes>
                <Route index element={<MainAdmin />} />
                <Route path="products" element={<Products />} />
                <Route path="products/edit/:id" element={<EditProduct />} />
                <Route path="new-product" element={<NewProduct />} />
                <Route path="category" element={<Category />} />
                <Route path="category/edit/*" element={<EditCategory />} />
                <Route path="createCategory" element={<CreateCategory />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default AdminLayout;
