import React from "react";
import classes from './MyInput.module.css'
const MyInput= (props)=>{
    return (
        <input 
        {...props} className={classes.MyInp}/>
        
    )
}

// const MyInput= React.forwardRef((props, ref)=>{
//     return (
//         <input 
//         ref={ref} 
//         {...props} className={classes.MyInp}/>
        
//     )
// })
export default MyInput;