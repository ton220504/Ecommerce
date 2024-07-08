import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ip } from '../api/Api';
import { ToastContainer, toast } from "react-toastify";
import Button from 'react-bootstrap/Button';

class ProductItem extends Component {

  handleWishlist = (e) => {
    const { product } = this.props;
    if (!localStorage.getItem("token")) {
      //this.props.showLogin();
      toast.error('Cần đăng nhập!');
    } else {
      axios
        .post(
          `${ip}/product/wishlist`,
          {
            productId: product.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.props.updateWishlistCount(response.data);
            //this.props.showToast("Added to wishlist!");
            toast.success('Đã thêm sản phẩm vào danh sách yêu thích!');
          }
        })
        .catch((error) => {
          //this.props.showToast("Product is already in the wishlist!");
          toast.warning('Sản phẩm đã có trong danh sách yêu thích!');
        });
    }
  };

  handleClick = (e) => {
    const { product } = this.props;
    const id = product.id;
    if (
      e.target.className === "add-to-cart-btn" ||
      e.target.className === "quick-view" ||
      e.target.className === "fa fa-eye"
    ) {
      this.props.showQuickView(id);
    } else {
      e.preventDefault();
      this.getProducts(id);
      this.setState({ currentCategory: id });
    }
  };

  render() {
    const { product } = this.props;
    return (

      <div className="product" style={{ marginBottom: "60px" }}>
        <ToastContainer />
        <div className="product-img">
          <img src={require(`../../../public/img/${JSON.parse(product.photo)[0]}`)} alt={product.photo} />
          <div className="product-label">
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">{product.category.name}</p>
          <h3 className="product-name">
            <a style={{ textDecoration: "none" }} href="#">{product.name}</a>
          </h3>
          <h4 className="product-price">${product.price}</h4>
          <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="product-btns">
            <Button
              id={product.id}
              className="add-to-wishlist"
              onClick={this.handleWishlist}
              bsPrefix="q"
            >
              <i id={product.id} className="fa fa-heart-o"></i>
              <span className="tooltipp">add to wishlist</span>
            </Button>
            <button className="add-to-compare">
              <i className="fa fa-exchange"></i>
              <span className="tooltipp">add to compare</span>
            </button>
            <Button id={product.id} className="qucik-view" onClick={this.handleClick} bsPrefix="q"><i id={product.id} onClick={this.handleClick} className="fa fa-eye"></i><span className="tooltipp">quick view</span></Button>
          </div>
        </div>
        <div className="add-to-cart">
          <button id={product.id} className="add-to-cart-btn" onClick={this.handleClick}>
            <i id={product.id} onClick={this.handleClick} className="fa fa-shopping-cart"></i> add to cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.product_id,
  showModal: state.show_modal,
});

const mapDispatchToProps = (dispatch) => ({
  showQuickView: (id) => dispatch({ type: "QUICKVIEW_CONTROL", value: id }),
  showLogin: () => dispatch({ type: "LOGIN_CONTROL", value: true }),
  updateWishlistCount: (count) =>
    dispatch({ type: "WISHLIST_COUNT", value: count }),
  showToast: (msg) => dispatch({ type: "SHOW_TOAST", value: msg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);