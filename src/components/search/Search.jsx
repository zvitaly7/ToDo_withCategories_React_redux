import React from "react";
import './Search.scss'
import {Input} from "../input/Input";

const Search = ({onChange, value, onSubmit}) => (
    <div className='search'>
        <i className='search_logo fa fa-search'/>
        <p className="search_flag"><input type="checkbox"/>show done</p>
        <Input
            type='title'
            className="input"
            value={value}
            onChange={onChange}
        />
    </div>

);

export default Search;