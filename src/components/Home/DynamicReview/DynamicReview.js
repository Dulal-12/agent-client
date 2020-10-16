import React, { useState, useEffect } from 'react';
import DynamicCard from '../DynamicCard/DynamicCard';

const DynamicReview = () => {
    const[dynamicReview,setDynamicReview] = useState([]);

    useEffect(()=>{
        fetch('https://radiant-retreat-70198.herokuapp.com/dynamicReview')
    .then(res=>res.json())
    .then(data=>{
      setDynamicReview(data);
    })
    },[])
    return (
        <>
        
        <div className="row">
           
                {
                    dynamicReview.map(review=><DynamicCard review={review}></DynamicCard>)
                }
           
         </div>
        </>
    );
};

export default DynamicReview;