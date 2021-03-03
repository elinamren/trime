import { Link } from "react-router-dom";
import Button from "./components/button";
import Dot from "./components/Dot";
import Logo from "./components/logo";

const Goals = () => {
    return ( 
        <div>
            <Logo />
            <div className="bottom-container">
                <p className="paragraph-padding">What is your main goal?</p>
                <Link to="/create-account"><Button text="Stay healty"/></Link>
                <Link to="/create-account"><Button text="Gain weight"/></Link>
                <Link to="/create-account"><Button text="Loose weight"/></Link>
                <Link to="/create-account"><Button text="Compete"/></Link>
                <Link to="/create-account"><Button text="Endurance"/></Link>
                <div className="page-dots">
                    <Dot color="yellow-button" />
                    <Dot color="white-button"/>
                </div>
            </div>
        </div>
     );
}
 
export default Goals;