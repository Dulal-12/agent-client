import React, { useContext, useEffect, useState } from 'react';
import { user } from '../../../App';
import SideBar from '../SideBar';
import ServicesOfUser from './ServicesOfUser';

const DynamicService = () => {
    const [service1,setService1] = useState([]);
    const [loggedInuser,setLoggedInuser] = useContext(user);
    useEffect(()=>{
        fetch('http://localhost:5000/service?email='+loggedInuser.email)
        .then(res=>res.json())
        .then(data=>{
          setService1(data);
        })
    },[])
  
    return (
        <div>
            <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-6 service serviceDetail mt-5 mr-5 mb-5 " style={{height:"850px"}}>
          
           
           {
               service1.map(service2=><ServicesOfUser service2={service2}></ServicesOfUser>)
           }
           </div>
           </div>
           </div>
           
        
    );
};

export default DynamicService;