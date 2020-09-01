import React from 'react';
import { Card, CardImg,CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom'

function RenderDish({dish}) {
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

 function RenderComment({comments}){
     //console.log(comments);
    if(comments.length > 0){
        const comment = comments.map((comment)=>{
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
            <div className="Comments">
                <h4>Comments</h4>
                {comment}
            </div>
            
        );
    }
    else{
        return(
            <div></div>
        )
    }
}

const Selected = (props)=>{
   
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    < RenderDish dish={props.dish} />
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    < RenderComment comments={props.comments} />
                  </div>
                </div>
            </div>
            
        );
        
}

export default Selected;