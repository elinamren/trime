import { Link } from "react-router-dom";
import BackArrow from "./components/back-arrow";
import Button from "./components/button";
import Dot from "./components/Dot";
import Logo from "./components/logo";

const Goals = () => {
    return ( 
        <div>
            <BackArrow path="/"/>
            <Logo />
            <div className="bottom-container">
                <p className="paragraph-padding">What is your main goal?</p>
                <Link to="/create-account"><Button text="Stay healthy" styleClass="brown-text"/></Link>
                <Link to="/create-account"><Button text="Gain weight" styleClass="brown-text"/></Link>
                <Link to="/create-account"><Button text="Lose weight" styleClass="brown-text"/></Link>
                <Link to="/create-account"><Button text="Compete" styleClass="brown-text"/></Link>
                <Link to="/create-account"><Button text="Endurance" styleClass="brown-text"/></Link>
                <div className="page-dots">
                    <Dot color="yellow-button" />
                    <Dot color="white-button"/>
                </div>
            </div>
        </div>
     );
}
 
export default Goals;