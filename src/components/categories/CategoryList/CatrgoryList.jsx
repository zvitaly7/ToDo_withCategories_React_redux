import React from "react";
import './CategoryList.scss'
import CategoryItem from "../CategoryItem/CategotyItem";


class CategoryList extends React.Component {
    onChoosen = () => {
        const {onChoose} = this.props;
        onChoose(this.props.id);
    };

    render() {
        const {id, name, deleteItem, onChoose, categories, addSubcategory, editCategory, rootCategory, history} = this.props;
        const subCategories = (rootCategory.sub || []).map((categoryId) => categories.find(cat => cat.id === categoryId));
        const isTaskExist = categories.sub && categories.sub.length > 0;
        return (

            <div className="category-list">
                {name &&
                <CategoryItem id={id} name={name} deleteItem={deleteItem} onChoose={this.onChoosen}
                              editCategory={editCategory} haveSubs={isTaskExist}
                              addSubcategory={addSubcategory} history={history}

                />}
                <ul className="category-list-main">
                    {(subCategories || []).map(cat => {
                        return (<li className="" key={cat.id}>
                            <CategoryList rootCategory={cat} addSubcategory={addSubcategory} id={cat.id} name={cat.name}
                                          active={null}
                                          deleteItem={deleteItem} onChoose={onChoose} editCategory={editCategory}
                                          categories={categories} history={history}/>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default CategoryList;

