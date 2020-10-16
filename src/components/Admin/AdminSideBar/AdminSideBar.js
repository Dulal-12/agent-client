import React from 'react';
import logo from '../../../images/logos/logo.png';
import {Link} from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div>
             <div className="sidebar d-flex flex-column justify-content-between col-md-4 offset-md-1 container py-5 px-4" >
            <div><img src={logo}alt="" style={{height:"50px"}}/></div>
            <ul className="list-unstyled ">
                <li className="m-3 p-2">
                    <Link to="/adminservice" className="text-dark ">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                   </svg> <span>ServiceList</span> 
                    </Link>
                </li>
                <li className="m-3 p-2">
                    <Link to="/addService" className="text-dark" >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                     </svg>
                        <span >Add Service</span> 
                    </Link>
                </li>
                <li className="m-3 p-2">
                    <Link to="/adminEmail" className="text-dark ">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmarks-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
                   <path fill-rule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                   </svg>
                        <span>Make Admin</span>
                    </Link>
                </li>
               
            </ul>
            
        </div>
           
        </div>
    );
};

export default AdminSideBar;