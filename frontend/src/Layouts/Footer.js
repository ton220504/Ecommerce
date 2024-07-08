import React from 'react';
import { Link } from "react-router-dom";



const Footer = () => (
  <footer id="footer">
    {/* <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Giới thiệu</h3>
              <p>Văn Toàn</p>
              <ul className="footer-links">
                <li><a href="#"><i className="fa fa-map-marker"></i> 58/3 Tân Lập 1</a></li>
                <li><a href="#"><i className="fa fa-phone"></i> 0392083871</a></li>
                <li><a href="#"><i className="fa fa-envelope-o"></i> trantoan220504@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Ngành hàng</h3>
              <ul className="footer-links">
                <li><a href="#">Điện thoại</a></li>
                <li><a href="#">Tablet</a></li>
                <li><a href="#">Laptop</a></li>
                <li><a href="#">Đồng hồ</a></li>
                <li><a href="#">Phụ kiện</a></li>
                <li><a href="#">Khuyến mãi</a></li>
              </ul>
            </div>
          </div>

     
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Liên hệ</h3>
              <ul className="footer-links">
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Liên hệ</a></li>
                <li><a href="#">Chính sách mua hàng</a></li>
                <li><a href="#">Mua hàng</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Dịch vụ</h3>
              <ul className="footer-links">
                <li><a href="#">Tài khoản</a></li>
                <li><a href="#">Giỏ hàng</a></li>
                <li><a href="#">Ưa thích</a></li>
                <li><a href="#">Theo dõi đơn hàng</a></li>
                <li><a href="#">Trợ giúp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
    </div> */}
    <div className="bg-black mt-3" style={{ height: "100%px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 text-white my-3">

                                <Link to="">
                                    <img src='https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/logo_footer.png?1712897547805' className="img-fluid my-3" alt="logo" style={{ height: "30px", width: "100%" }} />
                                </Link>

                                <p>Hệ thống cửa hàng Sudes Phone chuyên bán lẻ điện thoại, máy tính laptop, smartwatch, smarthome, phụ kiện chính hãng - Giá tốt, giao miễn phí.</p>
                                <p>Địa chỉ: 70 Lữ Gia, Phường 15, Quận 11, Tp.HCM</p>
                                <p>Điện thoại: 1900 6789</p>
                                <p>Email: support@sapo.vn</p>
                            </div>
                            <div id="chinhsach" className="col-3 text-white pt-4 ps-5">
                               
                                <Link id="cs" className="nav-link   mt-2 mb-4" to="#"><a>CHÍNH SÁCH</a></Link>
                                
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-mua-hang"><a>Chính sách mua hàng</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-doi-tra"><a>Chính sách đổi trả</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-van-chuyen"><a>Chính sách vận chuyển</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-bao-mat"><a>Chính sách bảo mật</a></Link>
                                

                            </div>
                            <div id="huongdan" className="col-3 text-white pt-4 ">
                                <Link id="cs" className="nav-link  text-white  mt-2 mb-4" to="#"><a>HƯỚNG DẪN</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn mua hàng</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn đổi trả</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn chuyển khoản</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn trả góp</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn hoàn hàng</a></Link>



                            </div>
                            <div className="col-3 text-white pt-4 ">
                                <Link id="ketnoi" className="nav-link  text-white  mt-2 mb-4" to="#"><a>KẾT NỐI VỚI CHÚNG TÔI</a></Link>
                                <div className="row">
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/facebook_2.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/instagram_1.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/shopee.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/lazada.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/tiktok.svg?1706429532485" /></Link>
                                    </div>

                                </div>
                                <Link id="hotro" className="nav-link  text-white mt-3 mb-4" to="#"><a>HỔ TRỢ THANH TOÁN</a></Link>
                                <div className="row">
                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_1.svg?1706429532485" /></Link>
                                    </div>

                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_2.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_3.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_4.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_5.svg?1706429532485" /></Link>
                                    </div>

                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_6.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_7.svg?1706429532485" /></Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

    <div id="bottom-footer" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="footer-payments">
              <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
              <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
              <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
              <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
              <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
              <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
            </ul>
            <span className="copyright">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* /bottom footer */}
  </footer>
);

export default Footer;
