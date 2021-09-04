import { useState } from "react";
import "../css/Base.css";
import Card from "./Card.js";
import Frame from "./Frame.js";
import Overlay from "./Overlay";

function Base (){

    function handleBubbleClick(index) {
        // open the modal
        // get the content/plan value
        // close the modal
        // change Card to Iframe

        function handleOverlayClick (id){

          // 0 is lesson plan
          // 1 is content 

          console.log(id);

          var baseURL = 'https://benstindavis.github.io/dcm-assets/';

          var finalURL = "about:black";
          // measurement
          if(id === '00'){
            finalURL = baseURL + 'MEASUREMENT/MEASUREMENT%20LESSON%20PLAN.cmap.html';
          }
          if(id === '01'){
            finalURL = baseURL + 'MEASUREMENT/MEASUREMENT-CONTENT.cmap.html';
          }

          // lom
          if(id === '10'){
            finalURL = baseURL + 'LAWS%20OF%20MOTION/LAWS%20OF%20MOTION%20LESSON%20PLAN.cmap.cmap.html';

          }
          if(id === '11'){
            finalURL = baseURL + 'LAWS%20OF%20MOTION/LAWS%20OF%20MOTION-%20CONTENT.cmap.html';

          }

          // electricity
          if(id === '21'){
            finalURL = baseURL + 'CURRENT%20ELECTRICITY%20AND%20ELECTRIC%20ENERGY/CURRENT%20ELECTRICITY%20AND%20ELECTRIC%20ENERGY-CONTENT.cmap.html';

          }
          if(id === '20'){
            finalURL = baseURL + 'CURRENT%20ELECTRICITY%20AND%20ELECTRIC%20ENERGY/CURRENT%20ELECTRICITYAND%20ELECTRIC%20ENERGY%20LESSON%20PLAN.cmap.html';

          }

          //Light
          if(id === '31'){
            finalURL = baseURL + 'LIGHT/LIGHT%20-%20CONTENT.cmap.html';

          }
          if(id === '30'){
            finalURL = baseURL + 'LIGHT/LIGHT%20LESSON%20PLAN.cmap.html';

          }

          // sound
          if(id === '40'){
            finalURL = baseURL + 'SOUND/SOUND%20LESSON%20PLAN.cmap.html';

          }
          if(id === '41'){
            finalURL = baseURL + 'SOUND/SOUND%20-%20CONTENT.cmap.html';

          }

          setBase(<Frame url = {finalURL}/>);

        }



        console.log(index);
        setBase(<Overlay primary = {index} handle = {handleOverlayClick}/>);
    
      }
              
        const [base,setBase] = useState( <Card handle = {handleBubbleClick}/>   )
      return (
        base
        );

}


export default Base;