import React from "react";

export function Subbutton({subButtonType}) {
    return (
        <>
        <div style={{display:"inline"}} id="forgot">{subButtonType==="forgot" ? 'Forgot Password ?' :  'Sign Up'}</div>
        </>
    )
}