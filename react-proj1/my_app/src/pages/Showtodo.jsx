import React from 'react'

function Showtodo(props) {
    return (
        <>
            <div className="showtodo-container">
                <div className="todo-row">
                    <h4>{props.task}</h4>
                    <button onClick={() => {
                        props.onSelect(props.id)

                    }}>X</button>
                </div>
            </div>
        </>
    )
}

export default Showtodo