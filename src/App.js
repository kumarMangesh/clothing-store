import React from "react";
import { Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from "./component/shop-data/shop.component";
import HomePage from "./pages/homepage/homepage.content";
import Header from "./component/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign up/sign-in-signUp";
import { auth, createUserProfileDocument } from "./component/firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}=this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            }, () => { console.log(this.state) }
          )
        })
      }
       setCurrentUser(userAuth) 
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignInSignUpPage/>)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
