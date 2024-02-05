import React from "react";
import Proptypes from 'prop-types'

const layout = ({ headerBar, logo, content, footer }) => {
    return (
        <div>
            <section>{headerBar}</section>
            <section>{content}</section>
            <footer>{footer}</footer>
        </div>
        
    )
}

layout.propTypes = {
    header: Proptypes.node.isRequired,
    content: Proptypes.node.isRequired,
    footer: Proptypes.node.isRequired
}

export default layout;