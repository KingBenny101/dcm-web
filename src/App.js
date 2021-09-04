import "./css/App.css";
import Base from "./components/Base.js";

import Author from "./components/Author.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="base">
      <Base />
        </div>
      <Author />
      <Footer />
    </div>
  );
}

export default App;
