import {CATEGORIES} from "../exampleStorrage"
import {ADD_CATEGORY, ADD_TASK, CHOOSE_CATEGORY, DELETE_CATEGORY} from "../../constants";
import {tasks} from "./tasks";

const categories = (state = {
    allCategories: CATEGORIES,
    filtered: CATEGORIES,
    activeCategory: [],
    filteredTasks: [],
    searchInput: ''
}, {id, name, active, type, title}) => {

    switch (type) {

        case CHOOSE_CATEGORY:
            console.log(id);
            return {
                ...state,
                activeCategory: state.allCategories.find((category) => findRecursive(id,category))


            };

        case ADD_TASK:
            return {
                ...state,
                ...state.activeCategory.tasks.push({id, isOpen:false, title})

            };


        case ADD_CATEGORY:
            return {
                ...state,
                allCategories: [...state.allCategories, {
                    id: 8,
                    name,
                    active: false,
                    tasks:[],
                    sub:[]
                }]
            };


        case DELETE_CATEGORY:
            return {
                ...state,
                allCategories: state.allCategories.filter(category => category.id !== id),
            };


        default:
            return state;

    }


};
export default categories;


function findRecursive(id, category) {
    console.log(category.id) ;

    if (category.id === id){
        return category.active = true;
    }
    console.log(category.id) ;


}

