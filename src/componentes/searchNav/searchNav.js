import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./searchNav.css";
import { Link } from "react-router-dom";

const RecipeSearchNav = (props) => {
  const {
    input,
    onInputChange,
    onClickSearch,
    onKeyUp,
    name,
    recipeName,
    cart,
    cartItem,
  } = props;
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark nav-search mb-5'>
        <div className=' pt-1 pl-5 d-sm-none d-md-block d-none d-sm-block'>
          <span>
            {recipeName}
            <span className='searched-item'> {name}</span>
          </span>
        </div>
        <ul className='navbar-nav ml-sm-auto'>
          <li className='nav-item'>
            <Link
              className='nav-link cursor'
              to={{
                pathname: `/cart`,
                state: { cartItem },
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faShoppingCart}
                className='text-success cart-basket-icon'
              />
              <div id='cart'>
                <span
                  className={
                    cart === 0
                      ? "hide-price"
                      : " cart-basket d-flex align-items-center justify-content-center"
                  }
                >
                  {cart}
                </span>
              </div>
            </Link>
          </li>
          <form className='form-inline my-2 my-lg-0'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Food...'
                value={input}
                onChange={onInputChange}
                onKeyPress={onKeyUp}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-secondary'
                  type='button'
                  onClick={onClickSearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </ul>
      </nav>
    </>
  );
};

export default RecipeSearchNav;
