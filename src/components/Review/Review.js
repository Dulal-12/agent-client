import React from 'react';
import SideBar from '../userDetail/SideBar';

const Review = () => {
    return (
        <div className="row service">
        <div className="col-md-4">
            <SideBar></SideBar>
        </div>
        <div className="col-md-6 serviceDetail mt-5">
        <form className="m-5 p-5">
            <div class="form-group ">
                <label for="exampleInputEmail1"></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="text" class="form-control " id="exampleInputPassword1" placeholder="Company's name, Desigenation"/>
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
            
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>

           
        </div>
        
    </div>
    );
};

export default Review;