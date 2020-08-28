import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody,CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class Selected extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComment(dish){
        if(dish != null){
            const comments = dish.comments.map((comment)=>{
                return(
                    <div className={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <br/>
                            <li>--{comment.author} , {dateFormat(comment.date,"mmm dd,yyyy")}</li>
                        </ul>
                         
                    </div>
                    
                );
            });
            return(
                <div className={dish.id}>
                    <h4>Comments</h4>
                    {comments}
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComment(this.props.dish)}
                  </div>
                </div>
            </div>
            
        );
        
    }
}

export default Selected;