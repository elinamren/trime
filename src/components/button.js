// import "../App.css";

const Button = (props) => {
    return (
        <div>
        <button className={props.styleClass}>
            {props.text}
        </button>
        </div>
    )
}

export default Button;