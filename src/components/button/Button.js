import { greeting } from "../../Portfolio";
import "./Button.scss"
const Button=(text,className,href,newTab)=>{
     
    return (
        <div className={className}>
                        <a className="main-btn" href={href}>{text}</a>
                        </div>
    )
}
export default Button;