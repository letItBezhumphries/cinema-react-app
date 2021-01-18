import React from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url: 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
