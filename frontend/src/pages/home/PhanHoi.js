const PhanHoi = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src="https://2.bp.blogspot.com/-Wb8LOyIz47g/Zk_2kBqy_lI/AAAAAABybXw/P3FAKItM9JIRASCGD3qkRDrqv56fe9OUgCNcBGAsYHQ/chibi_head.png?imgmax=3000" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <h5 className="text-danger my-2">Hãy để lại những phản hồi này với chúng tôi</h5>
                        <p className="text-danger">Chúng tôi sẻ tiếp nhận các yêu cầu từ bạn</p>
                        <form action="/action_page.php">
                            <textarea className="form-control" rows="10" id="comment" name="text"></textarea>
                            <button type="submit" className="btn btn-danger form-control mt-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhanHoi;