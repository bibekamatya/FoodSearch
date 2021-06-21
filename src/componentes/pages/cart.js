import Table from "react-bootstrap/Table";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const { cartItem } = props.location.state;

  const cartListHeading = [
    { id: 1, name: "product" },
    { id: 2, name: "title" },
    { id: 3, name: "price" },
    { id: 4, name: "quantity" },
    { id: 5, name: "total amount" },
  ];

  const [scroll, setScroll] = useState(false);
  const [TotalAmount, setTotalAmount] = useState([""]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 70);
    });
  }, []);

  const [datas, setDatas] = useState(cartItem);

  return (
    <>
      <div
        style={{ minHeight: "80vh" }}
        className='container px-0 mx-0 px-md-auto mx-md-auto '
      >
        <div className='card cart shadow-lg'>
          <div className='card-body'>
            <Table responsve className='mt-3 table table-striped table-dark'>
              <thead className={scroll ? "my-table" : "bg-black"}>
                <tr>
                  {cartListHeading.map(({ name, id }) => (
                    <th key={id} className='text-capitalize'>
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {datas.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td className='align-middle'>
                        <img
                          className='img rounded-circle cart-img '
                          alt={data.title}
                          src={data.img}
                        />
                      </td>
                      <td className='align-middle'>{data.title}</td>
                      <td className='align-middle'>{data.price}</td>
                      <td className='align-middle'>
                        <div>
                          <span className='border p-1 cart-amount-icon'>
                            <FontAwesomeIcon
                              icon={faAngleDoubleLeft}
                              className='text-success cursor'
                              onClick={(e) => {
                                if (data.quantity === 1)
                                  return alert("Not allowed less than 1 item");
                                data.quantity = --data.quantity;
                                setDatas([...datas]);
                              }}
                            />
                          </span>
                          <span className='border p-1 px-2 cart-amount-icon'>
                            {data.quantity}
                          </span>
                          <span className='border p-1 cart-amount-icon'>
                            <FontAwesomeIcon
                              icon={faAngleDoubleRight}
                              className='text-success cursor'
                              onClick={(e) => {
                                data.quantity = ++data.quantity;
                                setDatas([...datas]);
                                // setTotalAmount([
                                //   ...TotalAmount,
                                //   { price: data.quantity * data.price },
                                // ]);
                                // console.log([TotalAmount])
                              }}
                            />
                          </span>
                        </div>
                      </td>
                      <td className='align-middle'>
                        {data.quantity * data.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
