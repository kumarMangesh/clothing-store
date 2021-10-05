import React from "react";
import CollectionItems from "./collection.items/collection.items";
import './collection-preview.styles.scss'

const Collection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((items, idx) => idx < 4)
                    .map(({id,...otherprops}) => (<CollectionItems key={id} {...otherprops}/>))}
            </div>
       </div>
            )
}
            export default Collection;