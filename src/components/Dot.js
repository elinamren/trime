const Dot = (props) => {
    const dotClass = 'dot'
    return ( 
        <div className={[dotClass, props.color].join(" ")}> 
        </div>
     );
}
 
export default Dot;