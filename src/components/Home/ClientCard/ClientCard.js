import React from 'react';

const ClientCard = (props) => {
    const {name,detail,img} = props.client;
    return (
        <div className= "col-md-4 card  mt-5 mb-5 p-5  ">
                    <div className="d-flex justify-content-center">
                          <img src={img} style={{height:'50px'}} alt="" srcset=""/>
                    </div>
                     
                    <div className="d-flex justify-content-center">
                          <h3 style={{fontWeight:'1000'}}>{name}</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                          <h4 style={{fontWeight:'1000'}}>{detail}</h4>
                    </div>

                    <div className="ml-2">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Qui assumenda nesciunt repellendus illum repudiandae facere
                           esse accusamus vero possimus voluptatibus yes done?</p>
                    </div>
                    </div>
               
    );
};

export default ClientCard;