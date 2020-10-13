import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Website.css';

const Website = () => {
    return (
        <div className="row ">
            <div className="col-md-12 ">
                <ul className="webImg d-flex justify-content-start justify-content-center ">
                    <li><img src={slack} className="img-fluid mr-4"alt="" /></li>
                    <li><img src={google} className="img-fluid mr-4"  alt="" /></li>
                    <li><img src={uber} className="img-fluid mr-4" alt="" /></li>
                    <li><img src={netflix} className="img-fluid mr-4" alt="" /></li>
                    <li><img src={airbnb}  className="img-fluid mr-4" alt="" /></li>
                </ul>

            </div>
            
        </div>
    );
};

export default Website;