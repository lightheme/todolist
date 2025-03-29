import React from "react";
import './checkbox.scss'

const CheckBox = (props) => {

    return (
        <div className="checkbox-wrapper-15">
            <input className="inp-cbx" type="checkbox" {...props} />
            <label className="cbx" htmlFor={props.id}>
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>{props.spantext}</span>
            </label>
          </div>
    )

}

export default CheckBox;