import React from 'react';
import './ServicesCard.css';

const ServicesCard = (props) => {
    const {img,title} = props.service;
        return (
            
                <div className= "col-md-4 card   mt-5 mb-5  ">
                    <div className="d-flex justify-content-center">
                          <img src={img} style={{height:'50px'}} alt="" srcset=""/>
                    </div>
                     
                    <div className="d-flex justify-content-center">
                          <h4 style={{fontWeight:'1000'}}>{title}</h4>
                    </div>

                    <div className="ml-2">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Qui assumenda nesciunt repellendus illum repudiandae facere
                           esse accusamus vero possimus voluptatibus yes done?</p>
                    </div>
                    </div>
               
       
      );
};

export default ServicesCard;