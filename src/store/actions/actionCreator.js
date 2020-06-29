import React from "react";
import {ADD_CATEGORY, ADD_TASK, CHOOSE_CATEGORY, DELETE_CATEGORY} from "../../constants";



export const chooseCategory =(id) => ({
    type: CHOOSE_CATEGORY,
    id

});


export const addCategory = (name) => ({
   type: ADD_CATEGORY,
    name
});


export const deleteCategory = (id) => ({
    type: DELETE_CATEGORY,
    id
});

export const addTask = (id,title) => ({
    type: ADD_TASK,
    id,
    title,
});
