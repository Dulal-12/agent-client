import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';
import './Header.css';

const Header = () => {
    return (
        <section>
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </section>
    );
};

export default Header;