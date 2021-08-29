import "../css/Frame.css";
import Iframe from "react-iframe";

const url = "https://benstindavis.github.io/dcm-assets//CURRENT%20ELECTRICITY%20AND%20ELECTRIC%20ENERGY/CURRENT%20ELECTRICITY%20AND%20ELECTRIC%20ENERGY-CONTENT.cmap.html";

function Frame(){
    return(
        <div className="frame" >
            <Iframe url = {url}></Iframe>
        </div>
    )
}

export default Frame;