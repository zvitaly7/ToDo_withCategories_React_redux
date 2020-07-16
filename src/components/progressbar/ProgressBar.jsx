import React, {Component} from "react";
import BarItem from "./BarItem/Baritem";
import "./progressBar.scss"
import {connect} from "react-redux";


export class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 0
        }
    }

    updateProgress = () => {
        if (this.props.allCategories.find(cat =>
            cat.id.toString() === this.props.history.location.pathname.slice(6) || '')) {
            const taskList = this.props.allCategories.find(cat =>
                cat.id.toString() === this.props.history.location.pathname.slice(6) || '').tasks;
            const mappedTasks = taskList.map(taskId => this.props.tasks.find(task => task.id === taskId));
            const success = [];
            if (mappedTasks) {
                for (let i = 0; i < mappedTasks.length; i++) {
                    if (!mappedTasks[i].isDone) {
                        success.push(taskList[i]);
                    }
                }
                return (100 - (success.length / mappedTasks.length) * 100).toFixed(1);
            }
        }
        return 0;
    };

    render() {
        return (
            <div>
                <div className="progress-value">{this.updateProgress()}%</div>
                <BarItem percentage={this.updateProgress}/>
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks.allTasks,
    allCategories: state.categories.allCategories
}))(ProgressBar);
