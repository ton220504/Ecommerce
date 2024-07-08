import React from "react";
import Collections from "../pages/home/Collections";
import Carousel from "../pages/home/Carousel";
import ToastMessage from "../pages/home/ToastMessage";
import HotDeals from "../pages/home/HotDeals";
import Widgets from "../pages/home/Widgets";
import NewsLetter from "../pages/home/NewsLetter";
import Voucher from "../pages/home/Voucher";
function Home(props) {
  return (
    <div>
      <Collections />
      <ToastMessage />
      <Carousel title="Sản Phẩm mới" id="1" />
      <HotDeals />
      <Carousel
        title="Sản Phẩm khuyến mãi"
        id="2"
        showQuickView={props.showQuickView}
      />
      <Voucher/>
      <Widgets />
      <NewsLetter />
    </div>
  );
}
export default Home;
