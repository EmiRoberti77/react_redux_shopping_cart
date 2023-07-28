import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '../store/ActionTypes';

const Login = () => {
  const users = useSelector((state) => state.lr.users);
  const loggedUser = useSelector((state) => state.lr.loggedUser);
  const dispatch = useDispatch();

  const handlerUser = (e) => {
    dispatch({
      type: ActionTypes.updateUser,
      payload: e.target.options[e.target.selectedIndex].text,
    });
  };

  return (
    <div className="customDiv">
      <h3>Login Component-{loggedUser}</h3>
      <hr />
      <ul>
        <select onChange={(e) => handlerUser(e)}>
          {users.map((user, index) => (
            <option key={index}>{user}</option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default Login;
