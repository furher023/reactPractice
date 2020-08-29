import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './MenuComponent';
import Selected from './DishDetailComponent'
import {DISHES} from '../shared/Dishes';

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dishes : DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
  render() {
    return(
      <div className="App">
        <Header />
      <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId) }/>
      <Selected dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
        <Footer />
    </div>
    );
  }
}

export default Main;
