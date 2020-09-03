import React from 'react';

const Lists = (props) => {
    return (
        <>
            <div className="todo_style">
            <i class="fa fa-times" area-hidden="true"
            onClick={() =>{props.onSelect(props.id)}}>
                </i>
                                                               {/* we uses bootstrapcdn link into index.html */}
            <li> {props.text} </li>
            
            </div>
        </>
    )
}

export default Lists
