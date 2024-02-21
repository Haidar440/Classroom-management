import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link to="/">
          <div className="navbar-brand brand-logo mr-5 pl-3">
            <img
              src="images/logo.svg"
              style={{ height: "30px" }}
              className="mr-2"
              alt="logo"
            />
          </div>
        </Link>
        <a className="navbar-brand brand-logo-mini">
          <img src="images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <button
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="profileDropdown"
            >
              {/* profile photo */}
              <img src="images/faces/face28.jpg" alt="profile" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <button className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </button>
              <button className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                Logout
              </button>
            </div>
          </li>
          {/* <li className="nav-item nav-settings d-none d-lg-flex">
                        <a className="nav-link" href="#">
                            <i className="icon-ellipsis"></i>
                        </a>
                    </li> */}
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
