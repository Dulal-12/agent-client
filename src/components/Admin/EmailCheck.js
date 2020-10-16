import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import adminEmail from './adminEmail';

const EmailCheck = () => {
    const history = useHistory();
    const [adminEmail1,setAdminEmail1] = useState([]);
   

    const AdminService = ()=>{

        const Email2 = document.getElementById("email").value;
       
           fetch('http://localhost:5000/adminEmail11?email='+Email2)
            .then(res=>res.json())
            .then(data=>{
              setAdminEmail1(data)
            })
        
      
       adminEmail.map(email1=>{
           
        if(Email2 === email1 || adminEmail1.length>0 )
        {
            history.push('/adminservice')
        }
       
       })
      
    }

    return (
       

<div className="mx-auto" style={{width: "200px"}}>
           <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="email" class="form-control " id="email" placeholder="Enter your valid email"/>
            </div>
            <div className="mx-auto p-5">
                 <button className="btn btn-dark" onClick={()=>AdminService()}>Enter Email</button>
            </div>
            
</div>
    );
};

export default EmailCheck;