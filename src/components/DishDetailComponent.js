import React,{Component} from 'react';
import { Card, CardImg,CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem, Button,Modal,ModalBody,ModalHeader,Row,Label } from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';
import {LocalForm,Errors,Control} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isFormOpen: false
        }
    }
    
    formToggler(){
        this.setState({
            isFormOpen: !this.state.isFormOpen
        });
    }
    handleSubmit(values){
        alert('Comment is'+JSON.stringify(values));
        console.log('Comment is'+ JSON.stringify(values));
    }
    render(){
        return(
            <>
            <Button onClick={()=>this.formToggler()} color='primary'><span className="fa fa-pencil fa-lg"> Submit Comment</span></Button>

            <Modal isOpen={this.state.isFormOpen} toggle={()=>this.formToggler()}>
                <ModalHeader toggle={()=>this.formToggler()}>Submit Comment</ModalHeader>
                <ModalBody>
                <div className="col-12">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <Row className="form-group">
                            <Label htmlFor="rating">Ratings</Label>
                            <Control.select model=".rating" name="rating" id="rating"  className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Control.select>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" name="author" id="author"  className="form-control"
                            validators={
                                {
                                    maxLength:maxLength(15), minLength:minLength(3)
                                }
                            }/>
                            <Errors className="text-danger" model=".author" show="touched"
                                messages={{
                                    maxLength:'Length should be less than 15',
                                    minLength:'Length should be greater than 2'
                                }} />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" name="comment" id="comment" rows='6' className="form-control"/>
                        </Row>
                        <Row className="form-group">
                            <Button type="submit" color="primary">Submit</Button>
                        </Row>
                    </LocalForm>
                </div>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

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
                <CommentForm/>
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