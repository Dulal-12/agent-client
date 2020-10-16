import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderContent.css';

const HeaderContent = () => {
    return (
        <main className="row main">
            <div className="col-md-4 offset-md-1">
                    <h1>Let's Grow Your <br/>
                    Brand To The <br/>
                    Next Level</h1>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, alias dolorum
                    perspiciatis consectetur  corrupti debitis ratione architecto  sint.</small>
                    <br/>
                    <br/>
                    <button className="btn btn-dark">Hire Us</button>
            </div>

            <div className="col-md-6 offset-md-1">
                <img src={frame} alt="" className="img-fluid" style={{height:'400px',borderRadius:'40px'}} />
            </div>

        </main>
    );
};

export default HeaderContent;