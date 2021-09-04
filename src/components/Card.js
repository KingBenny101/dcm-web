import "../css/Card.css";

function Card({handle}) {
  return (
    <div className="card">
      <div className="dcmSelectContainer">
        <div className="rowContainer">
          <div className="bubble">
            <span className="bubbleText" onClick={()=>handle(0)}> Measurement</span>
          </div>
        </div>
        <div className="rowContainer">
          <div className="bubble">
            <span className="bubbleText" onClick={()=>handle(1)}>Laws of Motion</span>
          </div>

          <span className="titleText">
            Digital <br />
            Concept Map
          </span>
          <div className="bubble">
            <span className="bubbleText" onClick={()=>handle(2)}>Current and Electricity</span>
          </div>
        </div>
        <div className="rowContainer">
          <div className="bubble">
            <span className="bubbleText" onClick={()=>handle(3)}> Light</span>
          </div>
          <div className="bubble invisibleBubble"></div>
          <div className="bubble">
            <span className="bubbleText" onClick={()=>handle(4)}>Sound</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
