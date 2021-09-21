import "../css/Frame.css";
import Iframe from "react-iframe";

function Frame({ url }) {
  function returnHome() {
    window.location.reload();
  }

  return (
    <div className="frame">
      <Iframe url={url}></Iframe>
      <div id="homeContainer">
        <div id="home" onClick={() => returnHome()}></div>
        <div id="clickHome" onClick={() => returnHome()}>Click to go Homepage</div>
      </div>
    </div>
  );
}

export default Frame;
