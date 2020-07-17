
import {CATEGORIES} from "../storrage";
import {
    ADD_CATEGORY,
    CHOOSE_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    ADD_SUBCATEGORY,
    ADD_TASK_ID_TO_CATEGORY,
    CHANGE_CATEGORY_TASK_ID
} from "../../constants";
import {tasks} from "./tasks";


const categories = (state = {
    allCategories: CATEGORIES,
    filtered: CATEGORIES,
    activeCategory: [],
    filteredTasks: [],
    searchInput: ''
}, {id, name, active, type, title, uniqueId, taskId, prevCat}) => {
    switch (type) {

        case CHOOSE_CATEGORY:
            return {
                ...state,
                activeCategory: state.allCategories.find(category => category.id === id)


            };
        case EDIT_CATEGORY:
            return {
                ...state,
                allCategories: state.allCategories.map(cat => {
                    if (cat.id === id) {
                        return {...cat, name};
                    }
                    return {...cat};
                }),
            };
        case ADD_SUBCATEGORY:
            return {
                ...state,
                allCategories: [...state.allCategories, {
                    id: uniqueId,
                    name: ' ',
                    active: false,
                    tasks: [],
                    sub: []
                },],
                ...state.allCategories.find(cat => cat.id === id).sub.push(uniqueId),

            };
        case ADD_TASK_ID_TO_CATEGORY:
            return {
                ...state,
                ...state.allCategories.find(cat => cat.id.toString() === id).tasks.push(uniqueId),
            };

        case CHANGE_CATEGORY_TASK_ID:
            debugger
            return {
                ...state,
                allCategories: state.allCategories.map(cat => {
                    if (cat.id === id) {
                        return {...cat, ...cat.tasks.unshift(Number(taskId))}
                    }
                    if(cat.id === Number(prevCat)){
                        return {...cat, tasks:(cat.tasks || []).filter(Id => Id !== taskId)}
                    }
                    return {...cat};
                }),
                activeCategory: state.allCategories.find(category => category.id === Number(prevCat))

            };

        case ADD_CATEGORY:
            return {
                ...state,
                allCategories: [...state.allCategories, {
                    id: uniqueId,
                    name,
                    active: false,
                    tasks: [],
                    sub: []
                },],
                // eslint-disable-next-line array-callback-return
                ...state.allCategories.find((category) => {
                    if (category.id === "root") {
                        return category.sub.unshift(uniqueId)
                    }
                })
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                allCategories: deleteItemFromAllCategories(id, state.allCategories),
            };
        default:
            return state;
    }
};
export default categories;

const deleteItemFromAllCategories = (id, allCategories) => {
debugger
    return allCategories.map(cat => {
        return {
            ...cat,
            sub: (cat.sub || []).filter(subId => subId !== id)
        }
    }).filter(cat => cat.id !== id)
};
