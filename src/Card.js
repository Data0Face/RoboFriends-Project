import React from 'react';

const Card = ({name,email,id})=>{
    return ( 

    <div className="bg-light-purple dib br4 pa2 ma3 grow bw1 shadow-2">  
    <img src={`https://robohash.org/ ${id}` } alt="This is alexa"/>
        <div>
        <h2> {name} </h2>
        <p> {email} </p>
        </div>

     </div>
    );
} 
export default Card;