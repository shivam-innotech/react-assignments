import React from 'react'
import { useState } from 'react'

function Todo(props) {
    const [select, setSelect] = useState(false)
    const handleCheckbox = (e) => {
        setSelect(e.target.checked)

        // console.log(select);

    }
    return (
        <>
            <ul>
                <li>
                    <input type="checkbox" checked={select} onChange={handleCheckbox} />
                    <a className='task-text'>{props.task}</a>
                    <span className='edit'>edit</span>
                    <span>{select === true ? "success" : null}</span>
                </li>
            </ul>
        </>
    )
}

export default Todo
