import "./assets/sass/app.scss";

import Main from "./Layouts/Main";
import UserLayout from "./Layouts/UserLayout";
import AdminLayout from "./pages/dashboard/pages/AdminLayout";
import QuickView from "./pages/home/QuickView";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/products/ProductPage";
import Wishlist from "./pages/wishlist/Wishlist";
import ShoppingCart from "./pages/cart/ShoppingCart";
import Checkout from "./pages/home/Checkout";
import ProductDetail from "./pages/products/ProductDetail";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Products from "./pages/dashboard/pages/Product/Products";
import NewProduct from "./pages/dashboard/pages/NewProduct";
import MainAdmin from "./pages/dashboard/container/MainAdmin";
import TinTuc from "./pages/home/TinTuc";
import LienHe from "./pages/home/LienHe";
import PhanHoi from "./pages/home/PhanHoi";





// function App() {
//   return (
//     <div>
//       <QuickView />
//       <Header />
//       <Nav />
//       <Main />     
//       <Footer />
//     </div>
//   );
// }
// export default App;


function App() {
  return (

    <Routes>
      <Route path="/dashboard/*" element={<AdminLayout />}>
        <Route index element={<MainAdmin />} />
      </Route>


      <Route path="/" element={<UserLayout />}>
        <Route index element={<QuickView />} />
        <Route path="main" element={<Main />} />
        <Route path="product" element={<ProductPage />} /> {/* Thêm Route cho /product */}
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="tin-tuc" element={<TinTuc />} />
        <Route path="lien-he" element={<LienHe />} />
        <Route path="phan-hoi" element={<PhanHoi />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="detailProduct/:productId" element={<ProductDetail />} />
      </Route>

    </Routes>

  );
}

export default App;