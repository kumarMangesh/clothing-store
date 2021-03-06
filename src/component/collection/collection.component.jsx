import React from "react";
import CollectionItems from "./collection.items/collection.items";
import './collection-preview.styles.scss'

const Collection = ({ title, items }) => (

        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4)
                    .map((item) => (<CollectionItems key={item.id} item={item}/>))}
            </div>
       </div>
            
);
            export default Collection;