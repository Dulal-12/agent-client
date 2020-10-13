import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Website from '../Website/Website';
import Service from '../Service/Service';
import CarouselSet from '../Carousel/CarouselSet';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Website></Website>
            <Service></Service>
            <CarouselSet></CarouselSet>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;