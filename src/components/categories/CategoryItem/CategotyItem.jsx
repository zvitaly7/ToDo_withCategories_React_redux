import React from "react";
import './CategoryItem.scss'
import {Input} from "../../input/Input";

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: this.props.name === " ",
            CategoryName: this.props.name
        }
    }

    onNameChange = (value) => {
        this.setState({CategoryName: value})
    };

    onEdit = (id) => {
        const {editCategory} = this.props;
        if (!this.state.edit) {
            return this.setState({edit: true});
        }
        editCategory(this.state.CategoryName, id);
        this.setState({edit: false});
    };

    onAddSubcategory = (id) => {
        const {addSubcategory} = this.props;
        const uniqueId = ((1 + Math.random()) * 0x10000) | 0;
        addSubcategory(id, uniqueId);
    };

    onDeleteCategory=(id) => {
        const {deleteItem} = this.props;
        const {history}= this.props;
        deleteItem(id,this.props.name);
        history.push(`/home/`)
    };

    openTasks = (id) => {
        const {history, onChoose}= this.props;
        onChoose(id);
        history.push(`/home/${id}`)
    };


    render() {
        const {id,history} = this.props;
        const path = history.location.pathname.slice(6);
        return (
            <div className={path === id.toString()? "category-item active": "category-item" } >
                <div>
                    {this.state.edit ? <Input
                        type='title'
                        className="input-edit"
                        value={this.state.CategoryName}
                        onChange={this.onNameChange}
                        placeholder={"add your Category"}
                    /> : <span className={'title'} id={id} onClick={() => this.openTasks(id)}>{this.state.CategoryName}</span>}

                    {this.state.edit ?
                        <span className='fa fa-check-square category-icons_edit' onClick={() => this.onEdit(id)}/>
                        : <span className='fa fa-pencil-square-o category-icons_edit' onClick={() => this.onEdit(id)}/>}
                </div>
                <div className="category-icons">
                    <span className='fa fa-trash-o category-icons_delete' onClick={() => this.onDeleteCategory(id)}/>
                    <span className='fa fa-plus-square-o category-icons_add' onClick={() => this.onAddSubcategory(id)}/>
                </div>
            </div>

        )
    }
}

export default CategoryItem;
