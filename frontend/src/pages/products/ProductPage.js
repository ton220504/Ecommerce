import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Loading from "../../components/loading/Loading";
import { ip } from "../api/Api";

const ProductPage = ({ title, handleShowToast }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [categoryPages, setCategoryPages] = useState({});

  useEffect(() => {
    fetchCategories();
    
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategory = categories[0].id;
      setCurrentCategory(defaultCategory);
      setCurrentPage(1);
      fetchProducts(1, defaultCategory);
    }
  }, [categories]);
  useEffect(() => {
    if (currentCategory !== null) {
      fetchProducts(currentPage, currentCategory);
    }
  }, [currentPage, currentCategory]);

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    console.log("Added to wishlist:", product);
  };

  const fetchProducts = async (page, currentCategory) => {
    try {
      setLoading(true);
      let response;
      if (currentCategory !== null) {
        response = await axios.get(`${ip}/product/categories/${currentCategory}/newpage?page=${page}`);
      } else {
        response = await axios.get(`${ip}/products?page=${page}`);
      }
      console.log("Fetched products for category:", currentCategory);
      console.log(response);
      setProducts(response.data.data || []);
      setLastPage(response.data.last_page || 1);
    } catch (error) {
      setProducts([]);
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  // const fetchCategories = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`${ip}/product/categories`);
  //     setCategories(response.data || []);
  //   } catch (error) {
  //     console.error("Error fetching categories", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${ip}/product/categories`);
      console.log('Fetched categories:', response.data);
      setCategories(response.data || []);
    } catch (error) {
      console.error('Error fetching categories', error);
      setCategories([]);
    }
  };

  const handleClick = async (categoryId) => {
    try {
      setCurrentCategory(categoryId);
      setCurrentPage(1); // Reset to first page when category changes
    } catch (error) {
      console.error("Error fetching products by category", error);
    }
  };
 


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const chunkArray = (array, size) => {
    if (!array) return [];
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const productRows = chunkArray(products, 4);

  // return (
  //   <div>
  //     <div id="breadcrumb" className="section">
  //       <div className="container">
  //         <div className="col-md-12">
  //           <div className="section-title">
  //             <h3 className="title">Danh mục sản phẩm</h3>
  //             {loading ? <Loading /> : null}
  //             <div className="section-nav">
  //               <ul className="section-tab-nav tab-nav">
  //                 {categories.map((category) => (
  //                   <li
  //                     key={category.id}
  //                     className={category.id === currentCategory ? "active" : ""}
  //                   >
  //                     <a
  //                       id={category.id}
  //                       onClick={() => handleClick(category.id)}
  //                       data-toggle="tab"
  //                       href="#"
  //                     >
  //                       {category.name}
  //                     </a>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="section">
  //       <div className="container">
  //         {productRows.map((row, rowIndex) => (
  //           <div className="row" key={rowIndex}>
  //             {row.map((product) => (
  //               <div className="col-md-3 col-xs-3" key={product.id}>
  //                 <ProductItem
  //                   product={product}
  //                   handleAddToWishlist={handleAddToWishlist}
  //                   handleShowToast={handleShowToast}
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         ))}
  //         <div className="pagination">
  //           {Array.from({ length: lastPage }, (_, index) => (
  //             <button
  //               key={index}
  //               onClick={() => handlePageChange(index + 1)}
  //               className={currentPage === index + 1 ? "active" : ""}
  //             >
  //               {index + 1}
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Danh mục sản phẩm</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  {categories.map(category => (
                    <li key={category.id} className={category.id === currentCategory ? "active" : ""}>
                      <a id={category.id} onClick={() => handleClick(category.id)} data-toggle="tab" href="#">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : products.length > 0 ? (
            productRows.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((product) => (
                  <div className="col-md-3 col-xs-3" key={product.id}>
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>No products found.</div>
          )}
          <div className="pagination">
            {Array.from({ length: lastPage }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
