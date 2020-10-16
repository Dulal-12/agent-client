import React from 'react';
import service1 from '../../../images/icons/service1.png';
import services2 from '../../../images/icons/service2.png';
import services3 from '../../../images/icons/service3.png';
import ServicesCard from '../ServicesCard/ServicesCard';
 export const serviceData = [{
                        id:1,
                        img:service1,
                        title:'Web & Mobile design',
                    },
                    {
                        id:2,
                        img:services2,
                        title:'Graphics design',
                    }
                    ,
                    {
                        id:3,
                        img:services3,
                        title:'Web development',
                    }]

const Service = () => {

    return (
        <>
        <h2 className="mt-5" style={{textAlign:'center',fontWeight:'1000'}}>Provide awsome 
        <span style={{color:"green"}}>services</span></h2>
        <div className="row ca">
           
                {
                    serviceData.map(service=><ServicesCard service={service} key={service.id}></ServicesCard>)
                }
        </div>
        </>
    );
};

export default Service;