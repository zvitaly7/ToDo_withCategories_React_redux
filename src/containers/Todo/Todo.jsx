import React, {Component} from "react";
import './Todo.scss'
import {connect} from "react-redux"
import CategoryList from "../../components/categories/CategoryList/CatrgoryList";
import {chooseCategory, addCategory, deleteCategory, addTask} from "../../store/actions/actionCreator";
import {CATEGORIES} from "../../store/exampleStorrage";
import Search from "../../components/search/Search";
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/button";
import TaskList from "../../components/tasks/TaskList/TaskList";
import {tasks} from "../../store/reducers/tasks";


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addCategoryName: "",
            addTaskTitle:"",
        };

    }

    onCategoryChange = value => {
        this.setState({addCategoryName: value});
    };

    onTaskChange = value => {
    this.setState({addTaskTitle: value});
};

    addCategory = () => {
        const {addCategoryName} = this.state;
        const {addCategory} = this.props;
        addCategory(addCategoryName);
        this.setState({addCategoryName: ""});
    };

    addTask = () => {
        const {addTaskTitle} = this.state;
        const {addTask, tasks} = this.props;
        addTask(tasks.length+1, addTaskTitle);
        this.setState({addTaskTitle: ""});

    };

    onChoose = (id) => {
        const {chooseCategory} = this.props;
        chooseCategory(id);
    };


    render() {
        const {categories, chooseCategory, tasks, deleteCategory, allTasks} = this.props;
        const isTaskExist = tasks && tasks.length > 0;
        isTaskExist && (allTasks.push(tasks) || allTasks.slice(0));
        return (
            <div className="todo-main">
                <div className="header">
                    <h1 className="logo">ToDo List Zheltko Vitaly App</h1>
                    <Search/>
                </div>
                <div className="progress">


                    <progress max="100" value="0"></progress>
                    <div className="progress-value">50%</div>
                    <div className="progress-bg">
                        <div className="progress-bar"></div>
                    </div>
                </div>
                <div className="input-area">
                    <div className="addCategory-area">
                        <Input
                            type='title'
                            className="input"
                            value={this.state.addCategoryName}
                            onChange={this.onCategoryChange}
                            placeholder={"add your Category"}
                        />
                        <Button className='find-button' onClick={this.addCategory}>add</Button>
                    </div>
                    <div className="addTask-area">
                        <Input
                            type='title'
                            className="input"
                            value={this.state.addTaskTitle}
                            onChange={this.onTaskChange}
                            placeholder={"add your Task"}
                        />
                        <Button className='find-button' onClick={this.addTask}>add</Button>
                    </div>
                </div>
                <div className="workspace">
                    <div className="list"><CategoryList sub={categories} onChoose={this.onChoose}
                                                        deleteItem={deleteCategory}/></div>
                    <div className="tasks-area">
                        {isTaskExist || <h1> Choose category of tasks</h1>}
                        {isTaskExist && <TaskList taskList={tasks}/>}
                    </div>
                </div>


            </div>
        );
    }

}

export default connect(state => ({
    categories: state.categories.allCategories,
    tasks: state.categories.activeCategory.tasks,
    allTasks: state.tasks.allTasks
}), {chooseCategory, addCategory, deleteCategory, addTask})(Todo);
