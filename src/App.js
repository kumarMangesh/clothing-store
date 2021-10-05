import React from "react";
import { Switch, Route} from 'react-router-dom';
import ShopPage from "./component/shop-data/shop.component";
import HomePage from "./pages/homepage/homepage.content";
import Header from "./component/header/header.component";




function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
