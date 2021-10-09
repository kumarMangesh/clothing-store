import React from "react";
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./component/shop-data/shop.component";
import HomePage from "./pages/homepage/homepage.content";
import Header from "./component/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign up/sign-in-signUp";
import { auth, createUserProfileDocument } from "./component/firebase/firebase.utils";



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
          this.setState(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            }, () => { console.log(this.state) }
          )
        })
      }
       this.setState({ currentUser: userAuth }) 
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}




export default App;
