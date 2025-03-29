import React from "react";
import classNames from "classnames";
import CheckBox from "./CheckBox";

const Task = ({ done, text, id, onChange, onDelete }) => {
    return (
        <li className={classNames("list-item", {'list-item_done': done})}>
            <CheckBox
                defaultChecked={done}
                onChange={onChange}
                id={id}
                spantext={text}
            />
            <button className="list-item__delete-btn" onClick={onDelete}>+</button>
        </li>
    )
}

export default Task;