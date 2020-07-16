import React from "react";
import "./taskitem.scss"



const TaskItem = ({title, history, id,isDone, catId}) => (



    <li className='todo-item'>
        <i className={isDone ? " mark fa fa-check-circle-o" : " mark_active fa fa-times-circle-o"}/>
        <span className={isDone ? 'done title' : 'title'} onClick={() => history.push(`/home/${catId}/${id}`)}>{title}</span>
        <span className='edit fa fa-pencil-square-o' onClick={() => history.push(`/home/${catId}/${id}`)}/>
    </li>
);

export default TaskItem;

