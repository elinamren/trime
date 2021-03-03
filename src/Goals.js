import Button from "./components/button"
import Dot from "./components/Dot"
import Logo from "./components/logo"

const Goals = () => {
    return ( 
        <div>
            <Logo />
            <div className="bottom-container">
                <p className="paragraph-padding">What is your main goal?</p>
                <Button text="Stay healty"/>
                <Button text="Gain weight"/>
                <Button text="Loose weight"/>
                <Button text="Compete"/>
                <Button text="Endurance"/>
                <div className="page-dots">
                    <Dot color="yellow-button" />
                    <Dot color="white-button"/>
                </div>
            </div>
        </div>
     );
}
 
export default Goals;