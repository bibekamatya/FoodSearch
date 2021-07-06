import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./searchNav.css";

const RecipeSearchNav = (props) => {
  const { input, onInputChange, onClickSearch, onKeyUp, name, recipeName } =
    props;
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
          <form className='form-inline my-2 my-lg-0'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Recipe...'
                value={input}
                onChange={onInputChange}
                onKeyPress={onKeyUp}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-secondary'
                  type='submit'
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
