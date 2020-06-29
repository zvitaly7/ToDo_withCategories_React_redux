import {CATEGORIES} from "../exampleStorrage";
import {ADD_TASK} from "../../constants";


export const tasks = (state = {allTasks: [], filtered: [], searchInput: ''}, {id, title, text, type}) => {
        switch (type) {
           case ADD_TASK:
               return {
                  ...state,
                   allTasks: [...state.allTasks, {id, title, text}]
              };
            default:
             return state;
       }
   };
