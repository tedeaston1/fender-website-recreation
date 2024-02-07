import React from "react";
import Image from "../../atoms/Image/Image";
import "./LinkedImage.css"

function LinkedImage (props) {
    return (
        <a href={props.url}>
            <Image {...props}/>
        </a>
    )
}

export default LinkedImage;