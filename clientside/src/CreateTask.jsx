import React, {useEffect, useState} from "react";


const CreateTaskInput = (props) => {
    let [value, setValue] = useState('');

    const submit = () => { props.onCreate(value); setValue(''); };

    return (
        <div className="create-task">
            <form onSubmit={ submit }>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    className="create-task__input"
                />
            </form>

            <button className="btn create-task__btn" onClick={ submit }>Create</button>
        </div>
    )
}

export default CreateTaskInput;