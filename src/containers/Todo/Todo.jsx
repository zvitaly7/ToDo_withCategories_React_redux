import React, {Component} from "react";
import './Todo.scss'
import {connect} from "react-redux"
import CategoryList from "../../components/categories/CategoryList/CatrgoryList";
import {
    chooseCategory,
    addCategory,
    deleteCategory,
    addTask,
    editCategory,
    addSubcategory,
    showDeleteConfirmModal,
    addTaskIdToCategory,
    changeCategoryTaskId
} from "../../store/actions/actionCreator";
import Search from "../../components/search/Search";
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/button";
import TaskList from "../../components/tasks/TaskList/TaskList";
import ProgressBar from "../../components/progressbar/ProgressBar";
import {Route} from "react-router";
import {Switch} from "react-router";
import TaskEdit from "../../components/tasks/TaskEdit/TaskEdit";


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addCategoryName: "",
            addTaskTitle: "",
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
        const uniqueId = ((1 + Math.random()) * 0x10000) | 0;
        console.log(uniqueId);
        addCategory(addCategoryName, uniqueId);
        this.setState({addCategoryName: ""});
    };

    addTask = () => {
        const {addTaskTitle} = this.state;
        const uniqueId = ((1 + Math.random()) * 0x10000) | 0;
        const catId = this.props.history.location.pathname.split('/')[2];
        const {addTask, addTaskIdToCategory} = this.props;
        addTask(uniqueId, addTaskTitle, catId);
        addTaskIdToCategory(uniqueId, catId);
        this.setState({addTaskTitle: ""});

    };

    render() {
        const {
            chooseCategory, editCategory, allCategories, addSubcategory,
            history,showDeleteConfirmModal,changeCategoryTaskId,activeCategory
        } = this.props;
        console.log(activeCategory);
        return (
            <div className="todo-main">
                <div className="header">
                    <h1 className="logo">ToDo List Zheltko Vitaly App</h1>
                    <Search/>
                </div>
                <Route path={'/home/'} component={ProgressBar}/>
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
                    <div className="list"><CategoryList categories={allCategories} onChoose={chooseCategory}
                                                        deleteItem={showDeleteConfirmModal} rootCategory={allCategories[0]}
                                                        addSubcategory={addSubcategory}
                                                        editCategory={editCategory} history={history}
                                                        changeCategoryTaskId={changeCategoryTaskId} activeCategory={activeCategory}
                    /></div>
                    <div className="tasks-area">
                        <Switch>
                        <Route  exact path={'/home/:id'} component={TaskList}/>
                        <Route  exact path={'/home/:id/:task'} render={(props) =>
                            <TaskEdit {...props}
                                      activeCat={this.props.activeCategory} />}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    activeCategory: state.categories.activeCategory,
    allTasks: state.tasks.allTasks,
    allCategories: state.categories.allCategories
}), {chooseCategory, addCategory, deleteCategory, addTask, editCategory, addSubcategory,
    showDeleteConfirmModal,addTaskIdToCategory,changeCategoryTaskId})(Todo);


//<ProgressBar success={isTaskExist ? this.updateProgress() : 0}/>
