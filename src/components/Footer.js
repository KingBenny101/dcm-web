import "../css/Footer.css";

function Footer(){

    var profileURl = "https://www.linkedin.com/in/kingbenny101/";

    return (
        <footer className="footer">
            <div className="copyright">
                <a className="crtext" href = {profileURl} target="_blank" rel="noreferrer noopener">&#169; KingBenny101 2021</a>
            </div>
        </footer>
    );
}


export default Footer;