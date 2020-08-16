import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg,CardTitle,CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        };
    }

    selectedDish(dish){
      this.setState({
        selectedDish : dish
      })
    }

    renderDish(dish){
      if(dish != null){
        return(
          <div className="container">
            <Card>
              <CardImg width="100%" src={dish.image} />
              <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      }
        else{
          return(
            <div></div>
          );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5" onClick={()=>this.selectedDish(dish)}>
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;