import React from "react";
import {
    ADD_CATEGORY, ADD_TASK, CHOOSE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, ADD_SUBCATEGORY, MODAL_SHOW,
    MODAL_HIDE, ADD_TASK_ID_TO_CATEGORY, EDIT_TASK
} from "../../constants";
import {ConfirmModal} from "../../components/ConfirmModal/ConfirmModal";


export const chooseCategory = (id) => ({
    type: CHOOSE_CATEGORY,
    id

});

export const editCategory = (name, id) => ({
    type: EDIT_CATEGORY,
    name,
    id
});

export const addSubcategory = (id, uniqueId) => ({
    type: ADD_SUBCATEGORY,
    id,
    uniqueId,
});

export const addCategory = (name, uniqueId) => ({
    type: ADD_CATEGORY,
    name,
    uniqueId
});


export const deleteCategory = (id) => ({
    type: DELETE_CATEGORY,
    id
});

export const addTask = (id, title, catId) => ({
    type: ADD_TASK,
    id,
    title,
    catId,
});

export const editTask = (id, title, text, isDone) => ({
    type: EDIT_TASK,
    id,
    title,
    text,
    isDone
});

export const addTaskIdToCategory = (uniqueId, id) => ({
    type: ADD_TASK_ID_TO_CATEGORY,
    uniqueId,
    id
});

export const showDeleteConfirmModal = (id, name) => dispatch => dispatch(showModal({
    element: <ConfirmModal
        title={`Delete category: ${name}`}
        question='Are you sure you want to delete this category?'
        onConfirm={async () => {
            await dispatch(deleteCategory(id));
            dispatch(hideModal());
        }}
        onReject={() => dispatch(hideModal())}
    />
}));

export const hideModalActionCreator = () => dispatch => dispatch(hideModalAction());

export const hideModalAction = () => dispatch => dispatch(hideModal());

export const showModal = modalData => ({
    type: MODAL_SHOW,
    modalData
});

export const hideModal = () => ({
    type: MODAL_HIDE
});
