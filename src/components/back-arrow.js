import { Link } from "react-router-dom";
import backarrow from "../images/backarrow.png"

const BackArrow = (props) => {
    return ( 
        <Link to={props.path} className="back-arrow">
        <img src={backarrow} alt="Back arrow" />
        </Link>
     );
}
 
export default BackArrow;