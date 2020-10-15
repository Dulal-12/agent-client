import React from 'react';

const DynamicCard = (props) => {
    const{name,photoURL,description,desigenation} = props.review;
    return (
        <>
        <div className= "col-md-4 card   mt-5 mb-5  p-5">
                    <div className="d-flex justify-content-center">
                          <img src={photoURL} style={{height:'50px'}} alt="" srcset=""/>
                    </div>
                     
                    <div className="d-flex justify-content-center">
                          <h3 style={{fontWeight:'1000'}}>{name}</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                          <h4 style={{fontWeight:'1000'}}>{desigenation}</h4>
                    </div>

                    <div className="ml-2">
                       <p>{description}</p>
                    </div>
                     </div>
                     </>
               
    );
};

export default DynamicCard;