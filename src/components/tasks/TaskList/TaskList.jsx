import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './taskslist.scss'


const TaskList = ({taskList, removeTask, addOrEdit}) => (
    <ul className='todo-list'>
        {taskList.map(({id, title, isOpen}) => (
            <TaskItem removeTask={removeTask} addOrEdit={addOrEdit} id={id} key={id} title={title} isOpen={isOpen}/>
        ))}
    </ul>
);

export default TaskList;
