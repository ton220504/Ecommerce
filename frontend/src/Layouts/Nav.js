import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav id="navigation" className="bg-black" >
    <div className="container">
      <div id="responsive-nav">
        <ul className="main-nav nav nav-navbar">
          <li >
            <Link className="text-white" to="/" style={{ textDecoration: "none" }}>Trang chủ</Link>
          </li>
          <li>
            <Link className="text-white" to="/product" style={{ textDecoration: "none" }}>Sản phẩm</Link>
          </li>
          <li>
            <Link className="text-white" to="/tin-tuc" style={{ textDecoration: "none" }}>Tin tức</Link>
          </li>
          <li>
            <Link className="text-white" to="/lien-he" style={{ textDecoration: "none" }}>Liên hệ</Link>
          </li>
          <li>
            <Link className="text-white" to="/phan-hoi" style={{ textDecoration: "none" }}>Phản hồi</Link>
          </li>
          {/* <li>
            <Link to="/thong-tin">Thông tin</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
