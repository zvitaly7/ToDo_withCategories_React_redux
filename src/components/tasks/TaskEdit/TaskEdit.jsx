import React, {Component} from "react";
import {Input} from "../../input/Input";
import {connect} from "react-redux";
import {Button} from "../../button/button";
import {
    addCategory,
    addSubcategory,
    addTask,
    chooseCategory,
    deleteCategory,
    editCategory, editTask
} from "../../../store/actions/actionCreator";

import './TaskEdit.scss';

export class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.history.location.pathname.split('/')[3];
        this.task = this.props.tasks.find(task => task.id.toString() ===
            this.id);
        this.state = {
            taskId: this.task.id,
            taskName: this.task.title,
            taskDescription: this.task.description,
            taskStatus: this.task.isDone,
        };

    }

    onTitlechange = value => {
        this.setState({taskName: value})
    };

    onDescriptionChange = value => {
        this.setState({taskDescription: value})
    };

    onCheck = () => {
        this.setState({taskStatus: true});
    };

    onSave = (catId) => {
        this.props.editTask(this.state.taskId, this.state.taskName, this.state.taskDescription, this.state.taskStatus);
        this.props.history.push(`/home/${catId}`)
    };

    render() {
        const catId = this.props.history.location.pathname.split('/')[2];
        return (
            <div className={'edit-page'}>
                <div className={'edit-page-title'}><h1>Edit task: {this.state.taskName}</h1></div>
                <div className={'edit-page-main'}>
                    <label>
                        Task name:
                        <Input
                            type='title'
                            className={'edit-note-input'}
                            value={this.state.taskName}
                            onChange={this.onTitlechange}
                        />
                    </label>
                    <label>
                        Done
                        <input type="checkbox" checked={this.state.taskStatus}
                               onChange={this.onCheck}/>
                    </label>
                </div>
                <div className={'edit-page-footer'}>
                    <Input
                        type='text'
                        className={'edit-note-text'}
                        value={this.state.taskDescription}
                        onChange={this.onDescriptionChange}
                    />
                </div>
                <div className='controls'>
                    <Button className='confirm-modal-yes' onClick={() => this.onSave(catId)}>Save</Button>
                    <Button className='confirm-modal-no'
                            onClick={() => this.props.history.push(`/home/${catId}`)}>Exit</Button>
                </div>
            </div>


        )
    }

}

export default connect(state => ({
    tasks: state.tasks.allTasks,
    allTasks: state.tasks.allTasks,
    allCategories: state.categories.allCategories
}), {chooseCategory, addCategory, deleteCategory, addTask, editCategory, addSubcategory, editTask})(TaskEdit);
