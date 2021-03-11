import { Link } from "react-router-dom";
import BackArrow from "./components/back-arrow";
import Button from "./components/button";
import Dot from "./components/Dot";
import Logo from "./components/logo";

function pressGoal(e) {
    e.target.classList.add("pressed-animation");
    setTimeout(() => {
        window.location.href = "/create-account"
      }, 1000);
}

const Goals = () => {
    return ( 
        <div>
            <BackArrow path="/"/>
            <Logo />
            <div className="bottom-container">
                <p className="paragraph-padding">What is your main goal?</p>
                <Button text="Stay healthy" styleClass="brown-text" onClick={pressGoal}/>
                <Button text="Gain weight" styleClass="brown-text" onClick={pressGoal}/>
                <Button text="Lose weight" styleClass="brown-text" onClick={pressGoal}/>
                <Button text="Compete" styleClass="brown-text" onClick={pressGoal} />
                <Button text="Endurance" styleClass="brown-text" onClick={pressGoal}/>
                <div className="page-dots">
                    <Dot color="yellow-button" />
                    <Dot color="white-button"/>
                </div>
            </div>
        </div>
     );
}
 
export default Goals;