import { useState } from "react";
import "../css/Overlay.css";


function Overlay({primary, handle}) {

    const [iconName, setIconName] = useState('      ');

  return (
    <div className="card">
      <div id="modal-box">
        <div className="overlayHeader">
          <span id="select">Select</span>
         
        </div>

        <div className="modal-icon-container">
          <img id="icon1" className="modal-icon" onClick = {() => handle(primary.toString() + '0')} onMouseEnter = {() => setIconName("Lesson Plan")}  onMouseLeave = {() => setIconName('      ')}/>

          <img id="icon2" className="modal-icon" onClick = {() => handle(primary.toString() + '1')} onMouseEnter = {() => setIconName("Content")}  onMouseLeave = {() => setIconName('      ')}/>
        </div>
        <div className="overlayFooter">
        <span id="iconName">{iconName}</span>

        </div>
      </div>
    </div>
  );
}

export default Overlay;
