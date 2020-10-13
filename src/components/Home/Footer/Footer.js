import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row footer d-flex justify-content-center align-items-center ">
            <div className="col-md-4 offset-md-1 ">
                <h1 style={{fontWeight:'1000',fontSize:'40px'}}>Let us handle your <br/> 
                project , professionally</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, rerum cumque.
                Sed praesentium, pariatur quae vitae velit quidem mollitia magni 
                adipisci! Nemo blanditiis tempore laborum.</p>
            </div>
        <div className="col-md-6 offset-md-1 mt-5 ml-5">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name/Company's name"/>
                </div>
                
                <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
                
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>

        </div>
            
        </div>
    );
};

export default Footer;