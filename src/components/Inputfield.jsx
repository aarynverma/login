import React from "react";

export function Inputtypefeild({inputFieldType}) {
    return (
        <>
         <input className="field" type="text" placeholder={inputFieldType === "mail" ? 'Enter your mail' : inputFieldType === "password" ?'Enter your password': 'hello'} />
        </>
    )
}