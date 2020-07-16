import React, {Component} from "react";
import TaskItem from "../TaskItem/TaskItem";
import './taskslist.scss'
import {connect} from "react-redux";
import {
    addCategory,
    addSubcategory,
    addTask,
    chooseCategory,
    deleteCategory,
    editCategory,
} from "../../../store/actions/actionCreator";


class TaskList extends Component {
    render() {
        const {allCategories, removeTask, history, tasks} = this.props;
        debugger
        const taskList = (allCategories.find(cat => cat.id.toString() === this.props.history.location.pathname.slice(6) || '')?
            allCategories.find(cat => cat.id.toString() === this.props.history.location.pathname.slice(6) || '').tasks
        : []);
        const mappedTasks = taskList.map(taskId => tasks.find(task => task.id === taskId));
        const isExists = taskList && taskList.length > 0;
        const catId = (this.props.history.location.pathname.slice(6) || '');
        return (


            <ul className='todo-list'>
                {isExists && mappedTasks.map(({id, title, isDone}) => (
                    <TaskItem removeTask={removeTask} history={history} id={id} key={id} catId={catId} title={title}
                              isDone={isDone}/>
                ))}
            </ul>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks.allTasks,
    allCategories: state.categories.allCategories
}), {chooseCategory, addCategory, deleteCategory, addTask, editCategory, addSubcategory})(TaskList);



