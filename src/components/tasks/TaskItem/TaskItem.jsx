import React from "react";
import "./taskitem.scss"


const TaskItem = ({title, removeTask, id, addOrEdit, isOpen}) => (
    <li className='todo-item'>
        <i className={isOpen ? " mark fa fa-check-circle-o" : " mark_active fa fa-times-circle-o"}/>
        <span className={isOpen? 'done title': 'title'} onClick={() => addOrEdit(id)}>{title}</span>
        <span className='trash fa fa-trash-o' onClick={() => removeTask(id, title)}/>
    </li>
);

export default TaskItem;

