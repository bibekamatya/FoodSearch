import { useState } from "react";
import RecipeModal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const RecipeList = (props) => {
  const { title, fat, img } = props;
  const [modalShow, setModalShow] = useState(false);
  var price = Math.trunc(fat);
  return (
    <>
      <div className='col-md-3 food-card pb-5 px-md-1 px-xl-1 px-1 col-6'>
        <div className='card shadow'>
          <div className='cursor' onClick={() => setModalShow(true)}>
            <img
              src={img}
              alt={title}
              className='img-fluid custom-food-image p-1'
            />
            <div className='card-body text-left p-2 py-3'>
              <h6 className='card-title title text-capitalize'> {title} </h6>
            </div>
          </div>

          <div className='card-body pt-0'>
            <div className='row'>
              <div className='col-6'>
                <h6 className='card-title price'>$ {price}</h6>
              </div>
              <div className='col-6 text-right'>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='text-success cursor'
                  // onClick={() => addtocart({ title, id, img })}
                  onClick={() => setModalShow(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecipeModal
        price={price}
        onHide={() => setModalShow(false)}
        show={modalShow}
        {...props}
      />
    </>
  );
};

export default RecipeList;
