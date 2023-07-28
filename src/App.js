import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Purchase from './components/Purchase';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Login />
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
