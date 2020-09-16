import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './MenuComponent';
import Selected from './DishDetailComponent'
import Home from './HomePage'
import Contact from './Contact';
import About from './AboutUs';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment,fetchDishes} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'; //default actions, pre defined

/* MApping state to the props for component */
const mapStateToProps = state =>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) =>({
   addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
   fetchDishes: () => dispatch(fetchDishes()),
   resetFeedbackForm : () => dispatch(actions.reset('feedback'))
});

class Main extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
  }
  
  render() {

    //Returning featured dish,leader and promotion to home page
    const HomePage =()=>{
      return(
        <Home dish={ this.props.dishes.dishes.filter((dish)=> dish.featured)[0] }
              leader={ this.props.leaders.filter((leader)=> leader.featured)[0] }
              promotion={ this.props.promotions.filter((promotion)=> promotion.featured)[0]}
              dishesLoading ={ this.props.dishes.isLoading }
              errMess={ this.props.dishes.errMess} />
      );
    }

    // Returning Selected Dish and comments related with id with use of routing
    const dishWithID = ({match})=>{
        return(
          <Selected dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10) )[0]} 
                    comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
                    dishesLoading ={ this.props.dishes.isLoading }
                    errMess={ this.props.dishes.errMess}/>
        );
    }
    return(
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes.dishes}
                                                          dishesLoading ={ this.props.dishes.isLoading }
                                                          errMess={ this.props.dishes.errMess} /> } />
          <Route path="/menu/:dishId" component={dishWithID} /> {/* Route passes props: match,location and history*/}
          <Route exact path="/aboutus" component ={()=> <About leaders={this.props.leaders} /> } />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} />} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)); //connecting store to main , configuring to use react redux with react router
