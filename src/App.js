import logo from "./logo.svg";
import "./App.css";
import Navbar from "./globalComponent/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="background">
          <div className="OP">
            <h1 className="heaading">Balanced Bite Cafe</h1>
            <button type="button" class="btn btn-primary">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
