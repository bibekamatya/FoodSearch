import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.JPG";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg fixed-top shadow-lg"
            : "my-nav navbar navbar-expand-lg fixed-top logo"
        }
      >
        <NavLink className='navbar-brand' to='/FoodSearch'>
          <img
            src={logo}
            alt='logo'
            className={scroll ? "logo-before-scroll" : "logo-after-scroll"}
          />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/FoodSearch'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/FoodSearch/contact'>
                Contact
              </Link>
            </li>{" "}
            <li className='nav-item'>
              <Link className='nav-link' to='/FoodSearch/about'>
                About
              </Link>
            </li>
          </ul>
          {/* <ul className='navbar-nav ml-auto pr-5'>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                SignUp
              </Link>
            </li>{" "}
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                LogIn
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
