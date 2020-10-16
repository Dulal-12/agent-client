import React, { useEffect, useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminServiceListData from './AdminServiceListData';

const AdminServiceList = () => {
    const [allData,setAllData]  = useState([]);
    useEffect(()=>{
        fetch('https://radiant-retreat-70198.herokuapp.com/allData')
        .then(res=>res.json())
        .then(data=>{
          setAllData(data);
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-4">
                <AdminSideBar></AdminSideBar>
            </div>
            <div className="col-md-7 mt-5 col-sm-12  "style={{backgroundColor:'#F4F7FC'}}  >
           
                
                            {allData.map(data2 =><AdminServiceListData data2={data2}></AdminServiceListData>)}
                        
                    
            

            </div>

        </div>
    );
};

export default AdminServiceList;