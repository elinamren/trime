const Dot = ({color}) => {
    const dotClass = 'dot'
    return ( 
        <div className={[dotClass, color].join(" ")}> 
        </div>
     );
}
 
export default Dot;