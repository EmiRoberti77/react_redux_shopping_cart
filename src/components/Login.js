import { useSelector, useDispatch } from 'react-redux';
import { validateUser } from '../store/Actions';

const Login = () => {
  const users = useSelector((state) => state.lr.users);
  const loggedUser = useSelector((state) => state.lr.loggedUser);
  const dispatch = useDispatch();

  const handlerUser = (e) => {
    const loggedUser = e.target.options[e.target.selectedIndex].text;
    dispatch(validateUser(loggedUser));
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
