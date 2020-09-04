import React,{ Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';

class Header extends Component{

    constructor (props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this); //Binding the function so can be used in jsx directly
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        }
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen 
        });
      }
    /* Toggling the modal */
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    /* Hanndling Login */
    handleLogin(event){
        this.toggleModal();
        alert('Username:' + this.username.value + ' Password:'+ this.password.value +' Checked:' + this.remember.checked);
        event.preventDefault();
    }

    render(){
        
        return(
            
            //Shorthand for React.Fragment
            <>   

      <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav} />
                        <Link to="/home"><NavbarBrand className="mr-auto"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand></Link>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home' onClick={this.toggleNav}><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus' onClick={this.toggleNav}><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu' onClick={this.toggleNav}><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus' onClick={this.toggleNav}><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" nav>
                                <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username" 
                         innerRef={(input)=> this.username= input /* providing ref to access value from DOM */} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="password">Password</Label>
                       <Input type="password" id="password" name="password" 
                        innerRef={(input)=> this.password= input /* providing ref to access value from DOM */}/>
                   </FormGroup>
                   <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input /* providing ref to access value from DOM */}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                   <FormGroup>
                       <Button type="submit" value="submit" color="primary">Login</Button>
                   </FormGroup>
               </Form>
           </ModalBody>
       </Modal>

    </>
        );
        
    
        }
}

export default Header;