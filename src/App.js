import "./css/App.css";
import Card from "./components/Card.js";
import Author from "./components/Author.js";
import Footer from "./components/Footer.js";
import Frame from "./components/Frame.js";
import Overlay from "./components/Overlay";

function App() {
  return (
  <div className="App">
    <div className="base">

      <Card/>
      {/* <Overlay/> */}

    </div>
    <Author/>
    <Footer/>
  </div>
  );
}

export default App;
