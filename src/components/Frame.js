import "../css/Frame.css";
import Iframe from "react-iframe";


function Frame({url}){
    return(
        <div className="frame" >
            <Iframe url = {url}></Iframe>
        </div>
    )
}

export default Frame;