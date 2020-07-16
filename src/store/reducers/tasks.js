import {TASKS} from "../taskkist";
import {ADD_TASK, EDIT_TASK} from "../../constants";

export const tasks = (state = {allTasks: TASKS, filtered: [], searchInput: ''}, {id, title, text, type, isDone}) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                ...state.allTasks.push({id, isOpen: false, title}),
            };

        case EDIT_TASK:
            debugger
            return {
                ...state,
                allTasks: state.allTasks.map(task => {
                    if (task.id === id) {
                        return {id, title, text, isDone};
                    }
                    return {...task};
                }),
            };


        default:
            return state;
    }
};
