import React from "react";
import './theme.scss'

const ThemeButton = () => {
    return (
        <span className="switch">
            <input id="switch-rounded" type="checkbox" />
            <label htmlFor="switch-rounded"></label>
        </span>
    )
}

export default ThemeButton