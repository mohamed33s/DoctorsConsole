import "./App.css";
import ImgHome from "./Components/imgHome.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import Doctor from "./Components/Doctors";

function App() {
  return (
    <div className="main">
      <Doctor />
    </div>
  );
}

export default App;
