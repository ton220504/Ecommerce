import axios from 'axios'
import React, { Component } from 'react'
import { ip } from '../../api/Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';



class Topbar extends Component {
  constructor() {
    super()

    this.state = {
      user: '',
      redirect: false
    }
  }

  componentDidMount() {
    this.getAuth(localStorage.getItem('token'))
  }

  getAuth(token) {
    axios.get(`${ip}/auth`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(result => {
      this.setState({
        user: result.data.user
      })
    }).catch(error => {
      this.logout()
    })
  }

  logout() {
    localStorage.removeItem('token')
    this.setState({
      user: '',
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) {
      window.location.href = '/';
    }

    return (
      <div>
        <nav className="navbar navbar-expand  bg-white topbar  static-top shadow ">



          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">

            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}


            {/* <!-- Nav Item - Alerts --> */}


            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small me-2">{this.state.user.name}</span>
                <img className="img-profile rounded-circle" style={{ height: "30px", width: "30px" }} src="/img/user.png" />
              </a>
              {/* <!-- Dropdown - User Information --> */}
              {/* <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div> */}
            </li>

          </ul>

        </nav>
        <div>
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <div className="container-fluid">
                {/* <a className="navbar-brand" href="/admin">Logo</a> */}
                <Link to="/">
                  <img style={{ height: "15px", width: "100px" }} src='https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/logo_footer.png?1712897547805' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/dashboard/products">Sản phẩm</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/dashboard/category">Thương hiệu</a>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
          </div>

        </div>
      </div>

    )
  }
}
export default Topbar