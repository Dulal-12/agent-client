import React from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';
import './Login.css';
import {Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <img src={logo} alt="" className="mt-5 " style={{height:'60px'}}/>
                </div>
            </div>

            <div className="border border-warning p-5 m-5">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center ">
                        < h1 style={{fontWeight:'1000'}}>Login With</h1>
                        </div>
                    </div>

                    <div className="row">
                    <div className="btn col-md-12 d-flex justify-content-center">
                            <button className="btn btn-link mt-5 "><img src={google} style={{height:'50px'}}/> Continue with Google</button>
                        </div>
                    </div>
            
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                            <p>Don't have an account?<Link to='/#'>Create an account </Link></p>
                    </div>
                    </div>

            </div>
           </div>
       
           

        
    );
};

export default Login;