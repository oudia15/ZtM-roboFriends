import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
  return (
    <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 bgGreen'>
      <img src={`https://robohash.org/${Math.random.toString + id}?200x200`} alt='robot'/>
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
}

export default Card;
