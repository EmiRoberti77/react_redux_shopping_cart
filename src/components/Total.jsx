import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const loggedUser = useSelector((state) => state.lr.loggedUser);
  return (
    <div className="customDiv">
      <h3>Total Component-{loggedUser}</h3>
      <hr />
      <h2>total : {total}</h2>
    </div>
  );
};

export default Total;
