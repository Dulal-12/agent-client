import React, { useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { useHistory } from 'react-router-dom';

const AddService = () => {
    const history = useHistory();
    function gotoHome(){
        history.push("/");
    }
   
    return (
        <div className="row">
            <div className="col-md-4">
               <AdminSideBar></AdminSideBar>
             </div>   
             <div className="col-md-6 m-5 p-5" style={{backgroundColor:'#F4F7FC'}}>
             <form> 
                <div class="form-group">
                    <label for="exampleInputEmail1">Service Title</label>
                    <input  type="text" class="form-control" id="exampleInputEmail1" name="serviceTitle" placeholder="Service Title"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input  type="text" class="form-control" id="exampleInputPassword1" name="description" placeholder="decription"/>
                </div>
                
                <div class="form-group">
                <label for="exampleInputPassword1">Upload a Image</label>
                    <input  type="file" class="form-control" id="exampleInputPassword1" name="photo" placeholder="Your name/Company's name"/>
                    
                </div>
                <button type="submit" class="btn btn-dark" onClick={()=>gotoHome()}>Submit</button>
            </form>

             </div>
            
        </div>
    );
};

export default AddService;