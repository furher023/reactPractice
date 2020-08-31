import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './MenuComponent';
import Selected from './DishDetailComponent'
import HomePage from './HomePage'
import {DISHES} from '../shared/Dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dishes : DISHES
    }
  }

  
  render() {
    return(
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
    </div>
    );
  }
}

export default Main;
