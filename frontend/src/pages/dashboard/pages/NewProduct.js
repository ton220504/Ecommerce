// import axios from 'axios';
// import React, { Component } from 'react';
// import Swal from 'sweetalert2';
// import { ip } from '../../api/Api';

// class NewProduct extends Component {
//     constructor() {
//         super();

//         this.state = {
//             name: '',
//             category_id: '',
//             brand: '',
//             description: '',
//             details: '',
//             photos: null,
//             price: '',
//             size: '',
//             color: '',
//             quantity: 1,
//             success: false,
//             error: null,
//             errorKeys: [],
//             categories: []
//         };

//         this.baseState = this.state;

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.fileSelectHandler = this.fileSelectHandler.bind(this);
//     }

//     componentDidMount() {
//         this.getCategories();
//     }

//     getCategories() {
//         axios.get(`${ip}/product/categories`)
//             .then(response => {
//                 if (response.data.length > 0) {
//                     this.setState({
//                         category_id: response.data[0].id,
//                         categories: response.data
//                     });
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching categories:', error);
//             });
//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         const {
//             name,
//             category_id,
//             brand,
//             description,
//             details,
//             photos,
//             price,
//             size,
//             color,
//             quantity
//         } = this.state;

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('category_id', category_id);
//         formData.append('brand', brand);
//         formData.append('description', description);
//         formData.append('details', details);
//         formData.append('price', price);
//         formData.append('size', size);
//         formData.append('color', color);
//         formData.append('quantity', quantity);

//         if (photos) {
//             for (let i = 0; i < photos.length; i++) {
//                 formData.append('photos[]', photos[i]);
//             }
//         }

//         const token = localStorage.getItem('token');

//         axios.post(`${ip}/products`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             console.log('Product created successfully:', response.data);
//             Swal.fire({
//                 icon: "success",
//                 text: response.data.message
//             });
//             this.setState({
//                 ...this.baseState,
//                 success: true
//             });
//             this.getCategories();
//         })
//         .catch(err => {
//             console.error('Error creating product:', err);
//             let errorData = {};
//             if (err.response && err.response.data && err.response.data.errors) {
//                 errorData = err.response.data.errors;
//             } else if (err.response && err.response.data && err.response.data.message) {
//                 errorData = { general: err.response.data.message };
//             } else {
//                 errorData = { general: 'Something went wrong. Please try again later.' };
//             }

//             this.setState({
//                 error: errorData,
//                 errorKeys: Object.keys(errorData)
//             });
//         });
//     }

//     handleChange(event) {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });

//         if (this.state.success) {
//             this.setState({
//                 success: false
//             });
//         }
//     }

//     fileSelectHandler(event) {
//         this.setState({
//             photos: event.target.files
//         });
//     }

//     render() {
//         return (
//             <div className="container-fluid">
//                 {this.state.success && (
//                     <div className="alert alert-success">
//                         The product was created successfully.
//                     </div>
//                 )}

//                 {this.state.error && (
//                     <div className="alert alert-danger">
//                         {this.state.errorKeys.map(key => (
//                             <div key={key}>
//                                 <i className="fa fa-exclamation-triangle mr-2"></i>
//                                 {this.state.error[key]}
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 <div className="card shadow mb-4">
//                     <div className="card-header py-3">
//                         <h6 className="m-0 font-weight-bold text-primary">Add a New Product</h6>
//                     </div>
//                     <div className="card-body">
//                         <form onSubmit={this.handleSubmit}>
//                             <div className="row">
//                                 <div className="col-xl-6">
//                                     <div className="form-group">
//                                         <label className="small mb-1">Name</label>
//                                         <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Product name" required />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Category</label>
//                                         <select className="form-control" name="category_id" value={this.state.category_id} onChange={this.handleChange}>
//                                             {this.state.categories.map(category => (
//                                                 <option key={category.id} value={category.id}>{category.name}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Brand</label>
//                                         <input className="form-control" name="brand" value={this.state.brand} onChange={this.handleChange} type="text" placeholder="Product brand" required />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Price</label>
//                                         <div className="input-group mb-2">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">$</div>
//                                             </div>
//                                             <input className="form-control" name="price" value={this.state.price} onChange={this.handleChange} type="text" placeholder="Product price" required />
//                                         </div>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Upload Photo(s)</label>
//                                         <input className="form-control" onChange={this.fileSelectHandler} type="file" multiple style={{ paddingTop: '3px' }} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6">
//                                     <div className="form-group">
//                                         <label className="small mb-1">Description</label>
//                                         <textarea rows='2' className="form-control" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Product description" required />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Details</label>
//                                         <textarea rows='4' className="form-control" name="details" value={this.state.details} onChange={this.handleChange} placeholder="Product details" required />
//                                     </div>
//                                     <div className="form-row">
//                                         <div className="form-group col-md-5">
//                                             <label className="small mb-1">Size</label>
//                                             <input className="form-control" type="text" name="size" placeholder="Product size" value={this.state.size} onChange={this.handleChange} required />
//                                         </div>
//                                         <div className="form-group col-md-5">
//                                             <label className="small mb-1">Color</label>
//                                             <input className="form-control" type="text" name="color" placeholder="Product color" value={this.state.color} onChange={this.handleChange} required />
//                                         </div>
//                                         <div className="form-group col-md-2">
//                                             <label className="small mb-1">Quantity</label>
//                                             <input className="form-control" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="btn btn-primary float-right">Create Product</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NewProduct;


// import React, { Component } from "react";
// import axios from "axios";
// import { ip } from "../../api/Api";
// class NewProduct extends Component {
//     constructor() {
//         super();

//         this.state = {
//             name: "",
//             category_id: "",
//             brand: "",
//             description: "",
//             details: "",
//             photos: null,
//             price: "",
//             size: "",
//             color: "",
//             quantity: 1,
//             success: false,
//             error: "",
//             errorKeys: "",
//             categories: [],
//         };

//         this.baseState = this.state;

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.fileSelectHandler = this.fileSelectHandler.bind(this);
//     }

//     componentDidMount() {
//         this.getCategories();
//     }

//     getCategories() {
//         axios
//             .get(`${ip}/product/categories`)
//             .then((response) => {
//                 this.setState({
//                     category_id: response.data[0].id,
//                     categories: [...response.data],
//                 });
//             });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const data = new FormData();
//         if (this.state.photos) {
//             Array.from(this.state.photos).forEach((photo) =>
//                 data.append("photos[]", photo)
//             );
//         }
//         data.append("name", this.state.name);
//         data.append("category_id", this.state.category_id);
//         data.append("brand", this.state.brand);
//         data.append("description", this.state.description);
//         data.append("details", this.state.details);
//         data.append("price", this.state.price);
//         data.append("size", this.state.size);
//         data.append("color", this.state.color);
//         data.append("quantity", this.state.quantity);

//         // Log FormData contents
//         for (let [key, value] of data.entries()) {
//             console.log(key, value);
//         }

//         axios
//             .post(`${ip}/products`, data, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//             })
//             .then((response) => {
//                 this.setState({
//                     ...this.baseState,
//                     success: true,
//                 });
//                 this.getCategories();
//             })
//             .catch((err) => {
//                 if (err.response && err.response.data && err.response.data.errors) {
//                     this.setState({
//                         error: err.response.data.errors,
//                         errorKeys: Object.keys(err.response.data.errors),
//                     });
//                 } else {
//                     this.setState({
//                         error: "An error occurred",
//                         errorKeys: [],
//                     });
//                 }
//             });
//     }

//     handleChange(event) {
//         if (event.target.type == "select-one") {
//             this.setState({
//                 category_id: event.target.value,
//             });
//         } else {
//             const { name, value } = event.target;
//             this.setState({
//                 [name]: value,
//             });
//         }

//         if (this.state.success) {
//             this.setState({
//                 success: false,
//             });
//         }
//     }

//     fileSelectHandler(event) {
//         this.setState({
//             photos: event.target.files,
//         });
//     }

//     render() {
//         return (
//             <div className="container-fluid">
//                 {this.state.success && (
//                     <div className="card mb-4 py-3 border-left-success">
//                         <div className="card-body">
//                             The product was created successfully.
//                         </div>
//                     </div>
//                 )}

//                 {this.state.error && (
//                     <div className="card mb-4 py-3 border-left-danger">
//                         <div className="card-body">
//                             {this.state.error &&
//                                 this.state.errorKeys &&
//                                 this.state.errorKeys.map((key) => (
//                                     <div key={key}>
//                                         <i
//                                             style={{ color: "#e74a3b" }}
//                                             className="fa fa-exclamation-triangle mr-2"
//                                         ></i>
//                                         {this.state.error[key]}
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 )}

//                 <div className="card shadow mb-4">
//                     <div className="card-header py-3">
//                         <h6 className="m-0 font-weight-bold text-primary">
//                             Add a New Product
//                         </h6>
//                     </div>
//                     <div className="card-body">
//                         <form onSubmit={this.handleSubmit}>
//                             <div className="d-flex">
//                                 <div className="col-xl-6">
//                                     <div className="form-group">
//                                         <label className="small mb-1">Name</label>
//                                         <input
//                                             className="form-control"
//                                             name="name"
//                                             value={this.state.name}
//                                             onChange={this.handleChange}
//                                             type="text"
//                                             placeholder="Product name"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Category</label>
//                                         <select
//                                             className="form-control"
//                                             onChange={this.handleChange}
//                                         >
//                                             {this.state.categories &&
//                                                 this.state.categories.map((c) => (
//                                                     <option value={c.id} key={c.id}>
//                                                         {c.name}
//                                                     </option>
//                                                 ))}
//                                         </select>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Brand</label>
//                                         <input
//                                             className="form-control"
//                                             name="brand"
//                                             value={this.state.brand}
//                                             onChange={this.handleChange}
//                                             type="text"
//                                             placeholder="Product brand"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Price</label>
//                                         <div className="input-group mb-2">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">$</div>
//                                             </div>
//                                             <input
//                                                 className="form-control"
//                                                 name="price"
//                                                 value={this.state.price}
//                                                 onChange={this.handleChange}
//                                                 type="text"
//                                                 placeholder="Product price"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Upload Photo(s)</label>
//                                         <input
//                                             className="form-control"
//                                             onChange={this.fileSelectHandler}
//                                             type="file"
//                                             multiple
//                                             style={{ paddingTop: "3px" }}
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6">
//                                     <div className="form-group">
//                                         <label className="small mb-1">Description</label>
//                                         <textarea
//                                             rows="2"
//                                             className="form-control"
//                                             name="description"
//                                             value={this.state.description}
//                                             onChange={this.handleChange}
//                                             placeholder="Product description"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="small mb-1">Details</label>
//                                         <textarea
//                                             rows="4"
//                                             className="form-control"
//                                             name="details"
//                                             value={this.state.details}
//                                             onChange={this.handleChange}
//                                             placeholder="Product details"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-row">
//                                         <div className="form-group col-md-5">
//                                             <label className="small mb-1">Size</label>
//                                             <input
//                                                 className="form-control"
//                                                 type="text"
//                                                 name="size"
//                                                 placeholder="Product size"
//                                                 onChange={this.handleChange}
//                                                 value={this.state.size}
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="form-group col-md-5">
//                                             <label className="small mb-1">Color</label>
//                                             <input
//                                                 className="form-control"
//                                                 type="text"
//                                                 name="color"
//                                                 placeholder="Product color"
//                                                 onChange={this.handleChange}
//                                                 value={this.state.color}
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="form-group col-md-2">
//                                             <label className="small mb-1">Quantity</label>
//                                             <input
//                                                 className="form-control"
//                                                 type="number"
//                                                 name="quantity"
//                                                 onChange={this.handleChange}
//                                                 value={this.state.quantity}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <button className="btn btn-primary float-right">
//                                     Create Product
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NewProduct;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ip } from "../../api/Api";
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const NewProduct = () => {
//     const [name, setName] = useState("");
//     const [category_id, setCategoryId] = useState("");
//     const [brand, setBrand] = useState("");
//     const [description, setDescription] = useState("");
//     const [details, setDetails] = useState("");
//     const [photos, setPhotos] = useState(null);
//     const [price, setPrice] = useState("");
//     const [size, setSize] = useState("");
//     const [color, setColor] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState("");
//     const [errorKeys, setErrorKeys] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getCategories();
//     }, []);

//     const getCategories = async () => {
//         try {
//             const response = await axios.get(`${ip}/product/categories`);
//             setCategories(response.data);
//             setCategoryId(response.data[0]?.id || "");
//         } catch (err) {
//             console.error('Error fetching categories', err);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value, type } = event.target;
//         if (type === "select-one") {
//             setCategoryId(value);
//         } else {
//             switch (name) {
//                 case "name":
//                     setName(value);
//                     break;
//                 case "brand":
//                     setBrand(value);
//                     break;
//                 case "description":
//                     setDescription(value);
//                     break;
//                 case "details":
//                     setDetails(value);
//                     break;
//                 case "price":
//                     setPrice(value);
//                     break;
//                 case "size":
//                     setSize(value);
//                     break;
//                 case "color":
//                     setColor(value);
//                     break;
//                 case "quantity":
//                     setQuantity(value);
//                     break;
//                 default:
//                     break;
//             }
//         }

//         if (success) {
//             setSuccess(false);
//         }
//     };

//     const fileSelectHandler = (event) => {
//         setPhotos(event.target.files);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         if (photos) {
//             Array.from(photos).forEach((photo) =>
//                 data.append("photos[]", photo)
//             );
//         }
//         data.append("name", name);
//         data.append("category_id", category_id);
//         data.append("brand", brand);
//         data.append("description", description);
//         data.append("details", details);
//         data.append("price", price);
//         data.append("size", size);
//         data.append("color", color);
//         data.append("quantity", quantity);

//         try {
//             const response = await axios.post(`${ip}/products`, data, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//             });
//             Swal.fire({
//                 icon: "success",
//                 text: response.data.message,
//             }).then(() => {
//                 resetForm();
//                 getCategories();
//             });
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.errors) {
//                 setError(err.response.data.errors);
//                 setErrorKeys(Object.keys(err.response.data.errors));
//             } else {
//                 setError("An error occurred");
//                 setErrorKeys([]);
//             }
//         }
//     };

//     const resetForm = () => {
//         setName("");
//         setCategoryId(categories[0]?.id || "");
//         setBrand("");
//         setDescription("");
//         setDetails("");
//         setPhotos(null);
//         setPrice("");
//         setSize("");
//         setColor("");
//         setQuantity(1);
//         setSuccess(false);
//         setError("");
//         setErrorKeys([]);
//     };

//     return (
//         <div className="container-fluid">
//             {success && (
//                 <div className="card mb-4 py-3 border-left-success">
//                     <div className="card-body">
//                         The product was created successfully.
//                     </div>
//                 </div>
//             )}
//             {error && (
//                 <div className="card mb-4 py-3 border-left-danger">
//                     <div className="card-body">
//                         {error && errorKeys && errorKeys.map((key) => (
//                             <div key={key}>
//                                 <i
//                                     style={{ color: "#e74a3b" }}
//                                     className="fa fa-exclamation-triangle mr-2"
//                                 ></i>
//                                 {error[key]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//             <div className="card shadow mb-4">
//                 <div className="card-header py-3">
//                     <h6 className="m-0 font-weight-bold text-primary">
//                         Add a New Product
//                     </h6>
//                 </div>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit}>
//                         <div className="d-flex">
//                             <div className="col-xl-6">
//                                 <div className="form-group">
//                                     <label className="small mb-1">Name</label>
//                                     <input
//                                         className="form-control"
//                                         name="name"
//                                         value={name}
//                                         onChange={handleChange}
//                                         type="text"
//                                         placeholder="Product name"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Category</label>
//                                     <select
//                                         className="form-control"
//                                         name="category_id"
//                                         value={category_id}
//                                         onChange={handleChange}
//                                         required
//                                     >
//                                         {categories.map((category) => (
//                                             <option key={category.id} value={category.id}>
//                                                 {category.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Brand</label>
//                                     <input
//                                         className="form-control"
//                                         name="brand"
//                                         value={brand}
//                                         onChange={handleChange}
//                                         type="text"
//                                         placeholder="Brand name"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Description</label>
//                                     <textarea
//                                         className="form-control"
//                                         name="description"
//                                         value={description}
//                                         onChange={handleChange}
//                                         rows="4"
//                                         required
//                                     ></textarea>
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Details</label>
//                                     <textarea
//                                         className="form-control"
//                                         name="details"
//                                         value={details}
//                                         onChange={handleChange}
//                                         rows="4"
//                                         required
//                                     ></textarea>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6">
//                                 <div className="form-group">
//                                     <label className="small mb-1">Photos</label>
//                                     <input
//                                         className="form-control"
//                                         type="file"
//                                         name="photos"
//                                         multiple
//                                         onChange={fileSelectHandler}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Price</label>
//                                     <input
//                                         className="form-control"
//                                         type="number"
//                                         name="price"
//                                         onChange={handleChange}
//                                         value={price}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Size</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="size"
//                                         onChange={handleChange}
//                                         value={size}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Color</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="color"
//                                         onChange={handleChange}
//                                         value={color}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="small mb-1">Quantity</label>
//                                     <input
//                                         className="form-control"
//                                         type="number"
//                                         name="quantity"
//                                         onChange={handleChange}
//                                         value={quantity}
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <button className="btn btn-primary float-right">
//                                 Create Product
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewProduct;



import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ip } from "../../api/Api";

export default function NewProduct() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");
    const [photos, setPhotos] = useState([]);
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [categories, setCategories] = useState([]);
    const [validationError, setValidationError] = useState({});

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get(`${ip}/product/categories`);
            setCategories(response.data);
            setCategoryId(response.data[0]?.id || "");
        } catch (err) {
            console.error('Error fetching categories', err);
        }
    };

    const changeHandler = (event) => {
        const { name, value, files } = event.target;
        if (name === "photos") {
            setPhotos(files);
        
        } else {
            switch (name) {
                case "name":
                    setName(value);
                    break;
                case "category_id":
                    setCategoryId(value);
                    break;
                case "brand":
                    setBrand(value);
                    break;
                case "description":
                    setDescription(value);
                    break;
                case "details":
                    setDetails(value);
                    break;
                case "price":
                    setPrice(value);
                    break;
                case "size":
                    setSize(value);
                    break;
                case "color":
                    setColor(value);
                    break;
                case "quantity":
                    setQuantity(value);
                    break;
                default:
                    break;
            }
        }
    };

    const createProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category_id', category_id);
        formData.append('brand', brand);
        formData.append('description', description);
        formData.append('details', details);
        formData.append('price', price);
        formData.append('size', size);
        formData.append('color', color);
        formData.append('quantity', quantity);
        if (photos.length > 0) {
            Array.from(photos).forEach((photo, index) => {
                formData.append(`photos[${index}]`, photo);
            });
        }
        

        try {
            const { data } = await axios.post(`${ip}/products`, formData);

            Swal.fire({
                icon: "success",
                text: data.message
            });

            navigate("/");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setValidationError(error.response.data.errors);
            } else {
                Swal.fire({
                    text: error.response.data.message,
                    icon: "error"
                });
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Create Product</h4>
                            <hr />
                            <div className="form-wrapper">
                                {
                                    Object.keys(validationError).length > 0 && (
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="alert alert-danger">
                                                    <ul className="mb-0">
                                                        {
                                                            Object.entries(validationError).map(([key, values]) => (
                                                                <li key={key}>{values}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <Form onSubmit={createProduct}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Category">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="category_id"
                                                    value={category_id}
                                                    onChange={changeHandler}
                                                >
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="Description">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="description"
                                                    value={description}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="Details">
                                                <Form.Label>Details</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="details"
                                                    value={details}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Brand">
                                                <Form.Label>Brand</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="brand"
                                                    value={brand}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="Price">
                                                <Form.Label>Price</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="price"
                                                    value={price}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Size">
                                                <Form.Label>Size</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="size"
                                                    value={size}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Color">
                                                <Form.Label>Color</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="color"
                                                    value={color}
                                                    onChange={changeHandler}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Quantity">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="quantity"
                                                    value={quantity}
                                                    onChange={changeHandler}
                                                    min="1"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Photos" className="mb-3">
                                                <Form.Label>Photos</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="photos"
                                                    onChange={changeHandler}
                                                    multiple
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        variant="primary"
                                        className="mt-2"
                                        size="lg"
                                        block
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}









