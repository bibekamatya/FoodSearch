import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const RecipeModal = (props) => {
  const {
    title,
    img,
    type,
    healthlabels,
    ingredient,
    weight,
    dishtype,
    cautions,
    calories,
    fat,
    price,
    id,
    addtocart,
  } = props;

  const [AddToCart, setAddToCart] = useState("Add to Cart");
  const [disable, setDisable] = useState(false);

  const HandleClick = ({ ...props }) => {
    addtocart({ ...props });
    setDisable();
    setAddToCart(
      <button
        onClick={props.onHide}
        className='w-100 p-0 m-o btn btn-success text-capitalize bg-transparent text-success border-0'
      >
        Added to Cart
        <FontAwesomeIcon icon={faCheck} className='ml-2' />
      </button>
    );
  };

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id='contained-modal-title-vcenter'>
            Modal heading
          </Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
          <div className='row'>
            <div className='col-md-6 pt-md-2'>
              <div className='p-1 card shadow'>
                <img src={img} alt={title} className='img-fluid' />
              </div>
            </div>
            <div className='col-md-6 text-left'>
              <ul className='list-group list-group-flush details'>
                <li className='list-group-item'>
                  Title : <b>{title}</b>
                </li>
                <li className='list-group-item'>Meal Type : {type}</li>
                <li className='list-group-item'>Calories : {calories}</li>
                <li className='list-group-item'>Price : $ {price}</li>
                <li className='list-group-item'>Fat : {fat}</li>
                {/* <li className='list-group-item'>Cautions : {cautions}</li> */}
                <Link
                  to={{
                    pathname: `FoodSearch/details/${id}`,
                    state: {
                      img,
                      title,
                      type,
                      healthlabels,
                      ingredient,
                      weight,
                      dishtype,
                      cautions,
                      calories,
                      fat,
                      price,
                    },
                  }}
                >
                  <li className='list-group-item border-0 p-2'>
                    <button className='btn btn-primary bg-transparent text-primary w-100'>
                      More Details
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className='ml-2 full-details-arrow'
                      />
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className=' full-details-arrow'
                      />
                    </button>
                  </li>
                </Link>
                <li className='list-group-item border-0 p-2'>
                  <button
                    className='btn btn-success text-capitalize bg-transparent text-success w-100'
                    onClick={() => HandleClick({ ...props })}
                    disabled={disable}
                  >
                    {AddToCart}
                  </button>
                </li>
                {/* </Link> */}
                <li className='list-group-item border-0 p-2'>
                  <button
                    className='btn btn-warning bg-transparent text-capitalize w-100'
                    onClick={props.onHide}
                  >
                    Continue Shooping
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default RecipeModal;
