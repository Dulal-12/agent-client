import React, { useContext, useState } from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';
import './Login.css';
import {Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../firebaseConfig';
import { user } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInuser,setLoggedInuser] = useContext(user);
    const [userData,setUserData] = useState({
        displayName:'',
        email:'',
        photoURL:'',
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = ()=>{

        firebase.auth().signInWithPopup(provider)
        .then((result)=> {
           const {displayName,email,photoURL} = result.user;
           const detail = {...userData};
           detail.displayName = displayName;
           detail.email = email;
           detail.photoURL = photoURL;
           setLoggedInuser(detail);
           history.replace(from);
          
           })
    }
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
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
                            <button className=" button mt-5 " onClick={googleSignIn}><img src={google} style={{height:'40px'}}/> Continue with Google</button>
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