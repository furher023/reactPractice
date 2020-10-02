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
import {fetchDishes,fetchComments,fetchPromotions,postComment,fetchLeaders,postFeedback} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'; //default actions, pre defined
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
   postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
   fetchDishes: () => dispatch(fetchDishes()),
   fetchComments: () => dispatch(fetchComments()),
   fetchPromotions: ()=>dispatch(fetchPromotions()),
   fetchLeaders: ()=>dispatch(fetchLeaders()),
   postFeedback: (values) => dispatch(postFeedback(values)),
   resetFeedbackForm : () => dispatch(actions.reset('feedback'))
});

class Main extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchLeaders();
  }
  
  render() {

    //Returning featured dish,leader and promotion to home page
    const HomePage =()=>{
      return(
        <Home dish={ this.props.dishes.dishes.filter((dish)=> dish.featured)[0] }
              leader={ this.props.leaders.leaders.length > 0 ? this.props.leaders.leaders.filter((leader)=> leader.featured)[0] : [] }
              promotion={ this.props.promotions.promotions.filter((promotion)=> promotion.featured)[0]}
              dishesLoading ={ this.props.dishes.isLoading }
              errMess={ this.props.dishes.errMess}
              promosLoading = {this.props.promotions.isLoading}
              promosErrMess = {this.props.promotions.errMess} 
              leadersLoading = {this.props.leaders.isLoading}
              leadersErr = {this.props.leaders.errMess}/>
      );
    }

    // Returning Selected Dish and comments related with id with use of routing
    const dishWithID = ({match})=>{
        return(
          <Selected dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10) )[0]} 
                    comments={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                    postComment={this.props.postComment}
                    dishesLoading ={ this.props.dishes.isLoading }
                    errMess={ this.props.dishes.errMess}/>
        );
    }
    return(
      <div className="App">
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes.dishes}
                                                          dishesLoading ={ this.props.dishes.isLoading }
                                                          errMess={ this.props.dishes.errMess} /> } />
          <Route path="/menu/:dishId" component={dishWithID} /> {/* Route passes props: match,location and history*/}
          <Route exact path="/aboutus" component ={()=> <About leaders={this.props.leaders.leaders} isLoading={this.props.leaders.isLoading} errMess = {this.props.leaders.errMess} /> } />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
          <Redirect to="/home"/>
        </Switch>
        </CSSTransition>
          </TransitionGroup>
        <Footer />
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)); //connecting store to main , configuring to use react redux with react router
