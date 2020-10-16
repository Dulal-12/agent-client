import React from 'react';
import './AdminSeviceListData.css';

const AdminServiceListData = (props) => {
    const {name,email,title,text} = props.data2;
    return (
        <div className="serviceList">
            <table className="table table-striped mt-5">
                
             <tbody>
            <tr style={{width:'0px'}}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{title}</td>
                <td>{text}</td>
                
            </tr>
            </tbody>
            </table>
        </div>
    );
};

export default AdminServiceListData;