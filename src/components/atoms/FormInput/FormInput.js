import React from "react";

export default function ({ className, type, value = "", placeholder, ariaLabel }) {
    return (
        <input class={className} type={type} value={value} placeholder={placeholder} aria-label={ariaLabel}/>
    )
}