import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../store/ActionTypes';

const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const loggedUser = useSelector((state) => state.lr.loggedUser);
  const dispatch = useDispatch();

  const deleteHandler = (price, index) => {
    console.log('delete index', index);
    dispatch({
      type: ActionTypes.delete,
      payload: {
        index,
        price,
      },
    });
  };

  return (
    <div className="customDiv">
      <h3>Cart Component-{loggedUser}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => (
          <li
            key={index}
            onClick={() => {
              deleteHandler(product.price, index);
            }}
          >
            {product.pName} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
