import React, { useContext, useState } from 'react';
import SideBar from '../userDetail/SideBar';
import { user } from '../../App';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [loggedInuser,setLoggedInuser] = useContext(user);
    const [review1,setReview1] = useState({});
    const history = useHistory();
    const review = (e)=>{
        const description = document.getElementById("exampleFormControlTextarea1").value;
        const desigenation = document.getElementById("exampleInputPassword1").value;
        const information = {...review1};
        information.name=loggedInuser.displayName;
        information.photoURL = loggedInuser.photoURL;
        information.description = description;
        information.desigenation = desigenation;
        
        fetch('http://localhost:5000/review',{
            method: 'POST',
            body: JSON.stringify(information),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        history.push('/');
    }
    return (
        <div className="row service">
        <div className="col-md-4">
            <SideBar></SideBar>
        </div>
        <div className="col-md-6 serviceDetail mt-5">
        <form className="m-5 p-5">
            <div class="form-group ">
                <label for="exampleInputEmail1"></label>
                <input type="text" class="form-control" id="exampleInputEmail1" value={loggedInuser.displayName} aria-describedby="emailHelp" placeholder="Your Name"/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="text" class="form-control " id="exampleInputPassword1" placeholder="Company's name, Desigenation"/>
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
            
            </div>
            <button type="submit" onClick={()=>review()} class="btn btn-dark">Submit</button>
        </form>

           
        </div>
        
    </div>
    );
};

export default Review;