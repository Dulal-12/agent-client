import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceData } from '../../Home/Service/Service';
import SideBar from '../SideBar';
import './ServiceOfUser.css';
const ServicesOfUser = () => {
    const {id} = useParams();
    
    return (
        <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-7 service serviceDetail m-5  ">
            <div className= "col-md-4 card   mt-5 mb-5  ">
                            
                            <div className="d-flex justify-content-center">
                                  <img src='' style={{height:'50px'}} alt="" srcset=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <button className="btn btn-light">Done</button>
                            </div>

                            <div className="d-flex justify-content-center">
                                  <h4 style={{fontWeight:'1000'}}></h4>
                            </div>
                            
        
                            <div className="ml-2">
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                   Qui assumenda nesciunt repellendus illum repudiandae facere
                                   esse accusamus vero possimus voluptatibus yes done?</p>
                            </div>
                           
                            </div>
                     

            </div>
            
        </div>
    );
};

export default ServicesOfUser;