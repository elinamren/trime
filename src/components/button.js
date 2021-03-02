// import "../App.css";

const Button = ({text, styleClass}) => {
    return (
        <div>
        <button className={styleClass}>
            {text}
        </button>
        </div>
    )
}

export default Button;