import React, { useContext } from 'react';
import SideBar from '../userDetail/SideBar';
import { user } from '../../App';
import { useParams } from 'react-router-dom';
import { serviceData } from '../Home/Service/Service';

const Order = () => {
    const [loggedInuser,setLoggedInuser] = useContext(user);
    const {id} = useParams();
    const data = serviceData.find(service=>parseInt(service.id)===parseInt(id));
    const {img,title} = data;
    return (
        <div className="row">
            <div className="col-md-4">
            <SideBar></SideBar>
            </div>
            <div className="col-md-7 service serviceDetail m-5">
            <form className="m-5 p-5">
            <div class="form-group ">
                <label for="exampleInputEmail1"></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={loggedInuser.displayName} placeholder="Your Name"/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="email" class="form-control " id="exampleInputPassword1" placeholder="Company's name, Desigenation"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="text" class="form-control " id="exampleInputPassword1" value={title} placeholder="Design"/>
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="project details"></textarea>
             </div>

             <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="text" class="form-control " id="exampleInputPassword1" placeholder="$250" style={{width:"300px"}}/>
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>


            </div>
        </div>
    );
};

export default Order;