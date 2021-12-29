import react,{useState,useContext} from "react";
import StyleContext from "../../Contexts/StyleContext"
import "../ToggleSwitch/ToggleStitch.scss";


const ToggleSwitch=()=>{
    

    const dark=()=>{

    }
    const handleChange=()=>{

    }
    return (
        <label className="toggleSwitch">
        {/* <input type="checkbox" checked={isDark} onChange={()=>{
            StyleContext.changeTheme();
            setChecked(!isChecked);
        }}></input>
        <span className="slider-round"></span> */}
     
            {/* <span className="slider round"></span> */}
        Click me
        </label>
    )
};

export default ToggleSwitch;

