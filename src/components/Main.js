import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
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
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">React</NavbarBrand> 
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId) }/>
      <Selected dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
    </div>
    );
  }
}

export default Main;
