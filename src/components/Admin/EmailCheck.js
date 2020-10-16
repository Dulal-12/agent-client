import React from 'react';
import { useHistory } from 'react-router-dom';
import adminEmail from './adminEmail';

const EmailCheck = () => {
    const history = useHistory();
    const AdminService = ()=>{
        const email = document.getElementById("email").value;
       adminEmail.map(email1=>{
        if(email === email1)
        {
            history.push('/adminservice')
        }
        else{
            alert(' Please enter valid email!!!!Ops')
        }
       })
       console.log(adminEmail)
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