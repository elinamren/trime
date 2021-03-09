// import "../App.css";

const Button = (props) => {
    return (
        <div>
        <button onClick={props.onClick} className={props.styleClass}>
            {props.text}
        </button>
        </div>
    )
}

export default Button;