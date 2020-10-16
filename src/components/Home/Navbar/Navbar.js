import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../../../App';
import logo from '../../../images/logos/logo.png';


const Navbar = () => {
    
    const [loggedInuser,setLoggedInuser] = useContext(user);

    return (
        <main>
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <Link to="/#" className="navbar-brand ml-5"><img src={logo} style={{height:'50px'}} alt="" /></Link>
 
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link to="/#" className="nav-link mr-5">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-link mr-5">Our Protfolio</Link>
                         </li>
                         <li className="nav-item">
                            <Link to="/#" className="nav-link mr-5">Our Team</Link>
                          </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-link mr-5 ">Contact Us</Link>
                        </li>
                        {
                            loggedInuser.email? <li className="nav-item">
                            <Link to ="/admin"> <button className="btn btn-dark mr-5">Admin</button></Link>
                            </li>:<li className="nav-item">
                            <Link to ="/login"> <button className="btn btn-dark mr-5">Log In</button></Link>
                          </li>
                        }
                       
                </ul>
            </div>
           
     </nav>
    </main>
    );
};

export default Navbar;