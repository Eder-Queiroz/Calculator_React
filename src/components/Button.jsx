import React from "react";
import './button.css';

export default props => {

    let classes = `button ${props.operation ? 'operation' : ''} ${props.double ? 'double': ''} ${props.triple ? 'triple' : ''}`

    return (
        <button className={classes} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )

}