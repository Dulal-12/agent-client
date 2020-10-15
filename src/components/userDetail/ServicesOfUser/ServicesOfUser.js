import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { serviceData } from '../../Home/Service/Service';
import SideBar from '../SideBar';
import './ServiceOfUser.css';
import { user } from '../../../App';

const ServicesOfUser = (props) => {
    const {title,text} = props.service2;
    const finalImg = serviceData.find(service=>service.title === title);
    const{img} = finalImg
    
    return (
        
        <div className= "col-md-3 card mr-5 mt-3 ml-2 " style={{display:"inline-flex"}}>
            <div className="d-flex justify-content-center">
        <img src={img} style={{height:'50px'}} alt="" srcset=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-light">Done</button>
        </div>

  <div className="d-flex justify-content-center">
        <h4 style={{fontWeight:'1000'}} >{title}</h4>
  </div>
  

  <div className="ml-2">
        <p>{text}</p>
  </div>
  

       </div>
           
                    
    );
};

export default ServicesOfUser;