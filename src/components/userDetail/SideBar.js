import React from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logos/logo.png';
const SideBar = () => {
    return (
        <div>
           
            <div className="sidebar d-flex flex-column justify-content-between col-md-4 offset-md-1 container py-5 px-4" >
            <div><img src={logo}alt="" style={{height:"50px"}}/></div>
            <ul className="list-unstyled ">
                <li className="m-3 p-2">
                    <Link to="/order" className="text-dark ">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                   </svg> <span>Order</span> 
                    </Link>
                </li>
                <li className="m-3 p-2">
                    <Link to="/service" >
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bag-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"/>
                       <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        <span >Service</span> 
                    </Link>
                </li>
                <li className="m-3 p-2">
                    <Link to="/review" className="text-dark ">
                       <FontAwesomeIcon icon={faComments}/> <span>Review</span>
                    </Link>
                </li>
               
            </ul>
            
        </div>
        </div>
    );
};

export default SideBar;