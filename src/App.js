import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* conditionally render pages here */}
      <Outlet />
    </div>
  );
}

export default App;
