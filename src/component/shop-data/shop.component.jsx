import React from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../collection/collection.component";

class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collection: SHOP_DATA
        }
    }

    render(){
        const {collection}=this.state;
        return(
            <div className="shop-page">
                {collection.map(({id ,...otherCollectionProps})=><Collection key={id} {...otherCollectionProps} />)}
            </div>
        )
    }
}
export default ShopPage
