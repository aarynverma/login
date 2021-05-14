import React from "react";

export function Label({labeltype}) {
    return(
        <div className={labeltype=== "head" ? "log" : labeltype==="email" ? "input_title": labeltype==="pass" ? "input_title": " "}>{labeltype==="head" ? 'Login':labeltype==="email" ? 'Email': labeltype==="pass" ? 'Password':'no'}</div>
    )
}

// 