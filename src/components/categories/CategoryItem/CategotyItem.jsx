import React from "react";
import './CategoryItem.scss'

const CategoryItem = ({name, id, editCategory, removeCategory, addSubCategory}) => (
    <li className='todo-item'>
        <span className={'title'}>{name}</span>
        <span className='trash fa fa-trash-o'>lox </span>
        <span className='trash fa fa-trash-o'>ha </span>
    </li>
);

export default CategoryItem