import React, { Component } from "react";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-js-pagination";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import DeleteDialog from "../../container/DeleteDialog";
import { ip } from "../../../api/Api";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      currentPage: 1,
      perPage: 0,
      total: 0,
      products: [],
      deletingProductId: null,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts(pageNumber = 1) {
    Axios.get(`${ip}/products?page=${pageNumber}`).then((result) => {
      this.setState({
        currentPage: result.data.current_page,
        perPage: result.data.per_page,
        total: result.data.total,
        products: [...result.data.data],
        loading: false,
      });
    });
  }

  handleDelete(productId) {
    this.setState({ deletingProductId: productId });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");

        Axios.delete(`${ip}/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: response.data.message,
            }).then(() => {
              this.getProducts(this.state.currentPage);
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response?.data?.message || "Something went wrong!",
            });
          })
          .finally(() => {
            this.setState({ deletingProductId: null });
          });
      } else {
        this.setState({ deletingProductId: null });
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <h6 className="m-0 font-weight-bold text-primary">All Products</h6>
            <Link to={'/dashboard/new-product'} className="btn btn-success my-2 me-2 ">Thêm sản phẩm</Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.loading ? (
                    <tr>
                      <td colSpan="7">
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                          <Spinner animation="border" />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    this.state.products.map((product) => (
                      <tr key={product.id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            height="30px"
                            width="30px"
                            src={`/img/${JSON.parse(product.photo)[0]}`}
                            alt={JSON.parse(product.photo)[0]}
                          />
                        </td>
                        <td>{product.brand}</td>
                        <td>{product.name}</td>
                        <td>{product.category.name}</td>
                        <td>${product.price}</td>
                        <td>Available</td>
                        <td>
                          {/* <Button variant="success me-2">Sửa</Button> */}
                          <Link to={`/dashboard/products/edit/${product.id}`} className="btn btn-success my-2 me-2">Sửa</Link>

                          <Button
                            variant="danger"
                            onClick={() => this.handleDelete(product.id)}
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div style={{ float: "right" }}>
              {this.state.products.length > 0 &&
                this.state.total > this.state.perPage && (
                  <div className="pagination-container">
                    <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={this.state.perPage}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={5}
                      onChange={(pageNumber) => this.getProducts(pageNumber)}
                      itemClass="page-item"
                      linkClass="page-link"
                      firstPageText="First"
                      lastPageText="Last"
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
