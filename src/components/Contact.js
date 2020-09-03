import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,Col,FormGroup,Input,Button,Label,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component{
    
    constructor(props){
        super(props);

        //Controlled form , states are controlling the form
        this.state={
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
        }

        //Binding the functions
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    /*Handler for handling the input of form and concurrently changing the state of component */
    handleInputChange(event){
        const target = event.target; //Selecting the target element
        const value = target.type === 'checkbox' ? target.checked : target.value; //checking type due to varying input
        const name = target.name; // name of element is equal to state attributes
    
        this.setState({
          [name]: value //setting the state
        });
    }

    /*Handler for handling the submission of form */
    handleSubmit(event){
        console.log('Content is '+ JSON.stringify(this.state));
        alert('Content is '+ JSON.stringify(this.state));
        event.preventDefault(); //prevents from default behaviour of submit, moving on or reloading the page
    }

    /*this handles the blur event and updates this.state.touch.fieldname to true once an input field has been touched */
    handleBlur(event){
        const name = event.target.name;
        this.setState({
            touched:{...this.state.touched , [name]:true}//meaning for all in this.state.touched, set [name] to true
        })
    } 

    /*Validating the fields by using appropriate conditions and returning the errors */
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
    }

    render(){

        //everytime we make change to the input page is getting re rendered and checking for errors
        let errors=this.validate(this.state);

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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname }
                                    {/*valid field only if no error and if visited once */}
                                    valid={errors.firstname == '' && this.state.touched.firstname }
                                    invalid={errors.firstname != ''}
                                    onBlur={this.handleBlur}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}
                                    valid={errors.lastname == '' && this.state.touched.lastname}
                                    invalid={errors.lastname != ''}
                                    onBlur={this.handleBlur} 
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="email@example.com" value={this.state.email}
                                    valid={errors.email == '' && this.state.touched.email}
                                    invalid={errors.email != ''}
                                    onBlur={this.handleBlur} 
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Num.</Label>
                                <Col md={10}>
                                    <Input type="number" id="telnum" name="telnum" placeholder="Telephone No." value={this.state.telnum }
                                    valid={errors.telnum == '' && this.state.touched.telnum}
                                    invalid={errors.telnum != ''} 
                                    onBlur={this.handleBlur}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="Submit" className="color-primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
        }
}

export default Contact;