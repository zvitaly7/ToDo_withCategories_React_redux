import React from "react";
import './CategoryList.scss'


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {id, name, deleteItem, onChoose, active} = this.props;
        return (
            <div className="category-list">
                {name && <div className={active === true ? 'category-item active' : 'category-item'} >
                    <div>
                        <span className={'title'} onClick={()=>onChoose(id)}>{name}</span>
                        <span className='fa fa-pencil-square-o category-icons_edit' onClick={() => deleteItem(id)}/>
                    </div>
                    <div className="category-icons">
                        <span className='fa fa-trash-o category-icons_delete' onClick={() => deleteItem(id)}/>
                        <span className='fa fa-plus-square-o category-icons_add' onClick={() => deleteItem(id)}/>
                    </div>
                </div>}

                <ul className="category-list-main">
                    {(this.props.sub|| []).map(cat =>
                        <li className="" key={cat.id}>
                            <CategoryList id={cat.id} name={cat.name} sub={cat.sub} active={cat.active}
                                          deleteItem={() => deleteItem(cat.id)} onChoose={()=>onChoose(cat.id)}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default CategoryList;

