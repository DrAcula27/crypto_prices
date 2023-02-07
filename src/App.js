import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/currencies">
          <button>Currencies</button>
        </Link>
      </nav>
      {/* conditionally render pages here */}
      <Outlet />
    </div>
  );
}

export default App;
