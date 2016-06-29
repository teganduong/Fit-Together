import React, { Component } from 'react';
import LogbookCard from './LogbookCard';
import LogbookCardEntry from './LogbookCardEntry';

const dummyCards = [
  { name: 'Foods',
    image: 'https://unsplash.com/photos/i0uHNWnwxVw' },
  { name: 'Exercise',
    image: 'https://unsplash.com/photos/0wtaJS_nxBQ' },
  { name: 'Sleep',
    image: 'https://unsplash.com/photos/JCXANpeR2XI' },
  { name: 'Mood',
    image: 'https://unsplash.com/photos/mMhPX6TJfAY' },
  { name: 'Energy',
    image: 'https://unsplash.com/photos/TyQ-0lPp6e4' },
  { name: 'Motivation',
    image: 'https://unsplash.com/photos/no_TCkPUq_s' },        
];

const Logbook = () => (
  <div className="main-container">
    <div className="log-container top-container">
      <div className="horizontal-dash debug">
        <p>Log Activity</p>
      </div>
      <div className="horizontal-dash debug">
        {dummyCards.map((card, index) => <LogbookCard card={card} key={index} />)}
      </div>
      <div className="horizontal-dash debug">
        <LogbookCardEntry />
      </div>      
    </div>
  </div>
);

export default Logbook;
