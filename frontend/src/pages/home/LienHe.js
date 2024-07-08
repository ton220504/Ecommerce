const LienHe = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <h3 className="text-center text-dark py-4">Cảm ơn bạn đã đồng hành cùng chúng tôi !</h3>
                    <p className="mb-3">Bạn có thể liên hệ trực tiếp với chúng tôi bằng :</p>
                    <ul>
                        <li className="my-3">- Cách 1: Liên hệ qua fanpage chính thức
                            <a href="https://www.facebook.com/profile.php?id=100044594873035" style={{ color: "blue", marginLeft: "5px" }}>
                                https://www.facebook.com/profile.php?id=100044594873035
                            </a>
                        </li>
                        <li className="my-3">-Cách 2: Liên hệ qua số điện thoại: <a href="0392083871" style={{ color: "blue", marginLeft: "5px" }}>
                            0392083871
                        </a></li>


                        <li className="my-3">-Cách 3: Gặp trực tiếp tại tòa nhà A1, địa chỉ
                            <a href="58/3 Tân Lập 1, Hiệp Phú, Tp.Thủ Đức" style={{ color: "blue", marginLeft: "5px" }}>
                                58/3 Tân Lập 1, Hiệp Phú, Tp.Thủ Đức
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="col-5 ">
                    <div className="py-4">
                        <p className="text-dark">Địa chỉ của chúng tôi: </p>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7571.705741402478!2d106.7745069062693!3d10.848700671454887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e3465da241%3A0x90ccc9c684a8c7d2!2zUGjDsm5nIHRy4buNIEhPQkEgSE9NRSBDTjY!5e1!3m2!1svi!2s!4v1719846188290!5m2!1svi!2s" style={{ width: "350px", height: "350px", border: "1px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;