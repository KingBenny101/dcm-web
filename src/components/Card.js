import "../css/Card.css";

function Card({handle}) {
  return (
    <div className="card">
      <div className="dcmSelectContainer">
        <div className="rowContainer">
          <div className="bubble" onClick={()=>handle(0)}>
            <span className="bubbleText" > Measurement</span>
          </div>
        </div>
        <div className="rowContainer">
          <div className="bubble" onClick={()=>handle(1)}>
            <span className="bubbleText" >Laws of Motion</span>
          </div>

          <span className="titleText">
            Digital <br />
            Concept Map
          </span>
          <div className="bubble" onClick={()=>handle(2)}>
            <span className="bubbleText" >Current and Electricity</span>
          </div>
        </div>
        <div className="rowContainer">
          <div className="bubble" onClick={()=>handle(3)}>
            <span className="bubbleText" > Light</span>
          </div>
          <div className="bubble invisibleBubble"></div>
          <div className="bubble" onClick={()=>handle(4)}>
            <span className="bubbleText" >Sound</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
