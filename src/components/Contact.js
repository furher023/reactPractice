import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,Col,FormGroup,Input,Button,Label,FormFeedback,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,Errors,LocalForm} from 'react-redux-form'

/* Validators */
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
    
    constructor(props){
        super(props);

        //Controlled form , states are controlling the form
       /* this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{ //To determine if an input field has been visited once i.e the fields being validated
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            }
        } */

        //Binding the functions
        //this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }

    /*Handler for handling the input of form and concurrently changing the state of component 
    handleInputChange(event){
        const target = event.target; //Selecting the target element
        const value = target.type === 'checkbox' ? target.checked : target.value; //checking type due to varying input
        const name = target.name; // name of element is equal to state attributes
    
        this.setState({
          [name]: value //setting the state
        });
    } */

    /*Handler for handling the submission of form */
    handleSubmit(values){
        console.log('Content is '+ JSON.stringify(values));
        alert('Content is '+ JSON.stringify(values));
        //event.preventDefault(); //prevents from default behaviour of submit, moving on or reloading the page
    }

    /*this handles the blur event and updates this.state.touch.fieldname to true once an input field has been touched 
    handleBlur(event){
        const name = event.target.name;
        this.setState({
            touched:{...this.state.touched , [name]:true}//meaning for all in this.state.touched, set [name] to true
        })
    } */

    /*Validating the fields by using appropriate conditions and returning the errors 
    validate({firstname,lastname,telnum,email}){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    } */

    render(){

        //everytime we make change to the input, page is getting re rendered and checking for errors
        //let errors=this.validate(this.state);

        return(
            <div className="container">
                    <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Contact Us</h3>
                                <hr />
                            </div>
                        </div>
                    <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className="col-12">
                        <h3>Provide us Your Feedback</h3>
                        <hr />
                        <br/>
                    </div>
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(17)
                                        }}
                                         />
                                    <Errors class="text-danger" model=".firstname" show="touched"
                                            messages={{
                                                required:'Required',
                                                minLength: ' Min length greater than 3',
                                                maxLength :'Max length Less than 17'
                                            }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(17)
                                        }}
                                         />
                                    <Errors class="text-danger" model=".lastname" show="touched"
                                            messages={{
                                                required:'Required',
                                                minLength: ' Min length greater than 3',
                                                maxLength :'Max length Less than 17'
                                            }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors class="text-danger" model=".telnum" show="touched"
                                            messages={{
                                                required:'Required',
                                                isNumber: 'Should be a number'
                                            }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors class="text-danger" model=".email" show="touched"
                                            messages={{
                                                validEmail:'Not a valid email'
                                            }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
        }
}

export default Contact;