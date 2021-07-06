import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const DetailView = (props) => {
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
  } = props.location.state;

  return (
    <>
      <div className='container pt-4 px-0'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-4 pt-md-2'>
                <div className='p-1 card shadow'>
                  <img src={img} alt={title} className='img-fluid' />
                </div>
              </div>
              <div className='col-md-4 text-left'>
                <ul className='list-group list-group-flush details'>
                  <li className='list-group-item text-capitalize'>
                    Title : <b>{title}</b>
                  </li>
                  <li className='list-group-item text-capitalize'>
                    Meal Type : {type}
                  </li>
                  <li className='list-group-item text-capitalize'>
                    Dish Type : {dishtype}
                  </li>
                  <li className='list-group-item'>Calories : {calories}</li>
                  <li className='list-group-item'>weight : {weight}</li>
                  <li className='list-group-item'>Fat : {fat}</li>
                  <li className='list-group-item text-capitalize'>
                    Cautions : {cautions}
                  </li>
                </ul>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <h6 className='card-header'>Health Labels</h6>{" "}
                  <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                    {healthlabels.map((healthLabels) => (
                      <div key={healthLabels}>
                        <table className='table table-bordered   mb-0'>
                          <tbody>
                            <tr>
                              <td className='health-label'> {healthLabels}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 mt-2 container p-0 Carousel'>
        <h4 className='title-Ingredients text-center'>Ingredients</h4>
        <OwlCarousel
          className='owl-theme'
          loop
          margin={8}
          autoplay={true}
          items={4}
        >
          {ingredient.map((ingredient) => (
            <div className='item' key={ingredient.weight}>
              <div className='card shadow'>
                <p className='card-header text-center'> {ingredient.text}</p>
                <img
                  src={ingredient.image}
                  alt={ingredient.text}
                  className='img-fluid w-50 mx-auto rounded-circle p-2'
                />
                <div className='card-body'>
                  <ul className='list-group'>
                    <li className='list-group-item a'>
                      Catogory : {ingredient.foodCategory}
                    </li>
                    <li className='list-group-item a'>
                      Weight : {ingredient.weight}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default DetailView;
