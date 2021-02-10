import React from "react";

function TodoItem(props) {
    const complitedStyle = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
        }
    return(
        <div className = "todo-item">
            <input type = "checkbox" checked = {props.itemTodo.completed} 
            onChange = {() => props.handleChange(props.itemTodo.id)}/>
            <p style = {props.itemTodo.completed ? complitedStyle : null}>{props.itemTodo.text}</p>
        </div>
        
    )
}

export default TodoItem