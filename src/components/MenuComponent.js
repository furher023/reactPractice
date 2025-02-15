import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingSpinner';
import {baseUrl} from '../shared/URLs';
function MenuItem({dish}){
    
    return(
        < Link to={`/menu/${dish.id}`}> {/* Linking to /menu/id */}
        <Card key={dish.id}>
              <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
        </Link>
    );
    
}

const Menu = (props)=>{

    //console.log("Menu render invoked");
    const menu = props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <MenuItem dish={dish}  />
          </div>
        );
    });

    if(props.dishesLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if(props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    else{
        return(
            <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
        );
    }

}

    
 

export default Menu;