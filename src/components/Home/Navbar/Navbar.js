import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
                        <li className="nav-item">
                            <button className="btn btn-dark mr-5">Log In</button>
                        </li>
                </ul>
            </div>
           
</nav>
</main>
    );
};

export default Navbar;