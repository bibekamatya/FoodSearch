import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  } = props;

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
          <div className='row my-modal' style={{fontSize:'12px'}}>
            <div className='col-md-6 pt-md-2'>
              <div className='p-1 card shadow'>
                <img src={img} alt={title} className='img-fluid modal-img' />
              </div>
            </div>
            <div className='col-md-6 text-left my-auto'>
              <table class='table details'>
                <tr>
                  <th>Title :</th>
                  <td>
                    <b>{title}</b>
                  </td>
                </tr>
                <tr>
                  <th>Meal Type :</th>
                  <td>{type}</td>
                </tr>
                <tr>
                  <th>Calories :</th>
                  <td>{calories}</td>
                </tr>
                <tr>
                  <th>Fat :</th>
                  <td>{fat}</td>
                </tr>
              </table>
              <div className='card-body m-auto text-center'>
                <Link
                  to={{
                    pathname: `/details/${id}`,
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
                  <button className='btn btn-primary w-75' style={{fontSize:'12px'}}>
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
                </Link>
              </div>
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
