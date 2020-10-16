import React, { useEffect } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

import { useHistory } from 'react-router-dom';
import adminEmail from '../adminEmail';

const AddedAdminEmail = () => {
    

    const Email = ()=>{
        const adminEmail = document.getElementById('exampleInputEmail1').value;
        const email = {Email12:adminEmail};

            fetch('http://localhost:5000/adminEmail',{
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          
         
        history.push('/');


    }
    const history = useHistory()
    
    return (
        <div className="row  d-flex justify-content-center align-items-center ">
        <div className="col-md-5">
            <AdminSideBar></AdminSideBar>
        </div>
    <div className="col-md-5 offset-md-1 mt-5 ml-5"  style={{backgroundColor:'#F4F7FC',height:'400px'}}>
        <form>
            <div class="form-group p-5 mt-5">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="jhon@gmail.com"/>
                <br/><br/><button type="submit" class="btn btn-success" onClick={()=>Email()}>Submit</button>
            </div>
            
            
        </form>

    </div>
        
    </div>
    );
};

export default AddedAdminEmail;