import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



const Collections = () => (
  <div className="section">
    <div className="container">
      {/* <div className="row">
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img src="../../img/shop01.png" alt="" />
            </div>
            <div className="shop-body">
              <h3>
                Laptop
                <br />{" "}
              </h3>
              <a href="#" className="cta-btn">
                Mua ngay <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img src="../../img/shop03.png" alt="" />
            </div>
            <div className="shop-body">
              <h3>
                Phụ kiện
                <br />
              </h3>
              <a href="#" className="cta-btn">
                Mua ngay <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img src="../../img/shop02.png" alt="" />
            </div>
            <div className="shop-body">
              <h3>
                Điện thoại
                <br />{" "}
              </h3>
              <a href="#" className="cta-btn">
                Mua ngay <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <Link>
                <img className="mb-3 rounded-4" style={{ width: "280px", height: "130px" }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/redmi-13-series-right-banner-01-7-2024.jpg" />
              </Link>
            </li>

            <li>
              <Link>
                <img className="mb-3 rounded-4" style={{ width: "280px", height: "130px" }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/apple-chinh-hang-home.jpg" />

              </Link>
            </li>

            <li>
              <Link>
                <img className="rounded-4" style={{ width: "280px", height: "130px" }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-9" >
          <div id="demo" className="carousel slide " data-bs-ride="carousel">


            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            </div>


            {/* <div className="carousel-inner" style={{width:"900px", height:"400px"}}> */}
            <div className="carousel-inner rounded-4 border" >
              <div className="carousel-item active">
                <Link>
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-m55-sliding-01-7-2024.png" alt="Los Angeles" className="d-block w-100" />
                </Link>
              </div>

              <div className="carousel-item">
                <Link>
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/poco-m6-sliding-cate-27-6-2024.jpg" alt="Chicago" className="d-block w-100" />
                </Link>
              </div>

              <div className="carousel-item">
                <Link>
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/home-asus-tuf-gaming-new-01-07.png" alt="New York" className="d-block w-100" />
                </Link>
              </div>

              <div className="carousel-item">
                <Link>
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nang-cap-iphone-15-prm-chip-sliding-20-602024.jpg" alt="New York" className="d-block w-100" />
                </Link>
              </div>

              <div className="carousel-item">
                <Link>
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/dknt-galaxy-moi-sliding-010724.png" alt="New York" className="d-block w-100" />
                </Link>
              </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>


      <div className="d-flex justify-content-center">
        <Link>
          <img className="mt-2 rounded-4 border " src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(1).gif" />
        </Link>
      </div>
    </div>



  </div>
);
export default Collections;
