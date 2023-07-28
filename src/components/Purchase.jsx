import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../store/ActionTypes';

const Purchase = () => {
  const products = useSelector((state) => state.pr.products);
  const loggedUser = useSelector((state) => state.lr.loggedUser);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    const obj = { pName, price };
    dispatch({
      type: ActionTypes.purchase,
      payload: obj,
    });
  };
  return (
    <div className="customDiv">
      <h3>Purchase Component-{loggedUser}</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((prod, index) => (
          <option key={index} value={prod.price}>
            {prod.pName}-{prod.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Purchase;
