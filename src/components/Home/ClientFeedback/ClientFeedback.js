import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import ClientCard from '../ClientCard/ClientCard';
const clientData = [{
                        id:1,
                        name:'Afsana',
                        detail:'CEO,Mongo Group',
                        img:customer1,
                    }
                    ,{
                        id:2,
                        name:'Rafsan',
                        detail:'CEO,Ango Group',
                        img:customer2,
                    }
                    ,{
                        id:3,
                        name:'Dafsan',
                        detail:'CEO,Nfsan Group',
                        img:customer3,
                    }
                   ]

const ClientFeedback = () => {
    return (
        <>
        <h2 className="mt-5" style={{textAlign:'center',fontWeight:'1000'}}>Client <span style={{color:"green"}}>Feedback</span></h2>
        <div className="row">
           
                {
                    clientData.map(client=><ClientCard client={client} key={client.id}></ClientCard>)
                }
           
            
        </div>
        </>
    );
};

export default ClientFeedback;