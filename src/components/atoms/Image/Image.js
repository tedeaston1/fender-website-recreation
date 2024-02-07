import React from "react";
import "./Image.css"

function Image({ className ="", alt, src }) {
    return (
        <img className={className} alt={alt} src={src}/>
    )
}

export default Image;
