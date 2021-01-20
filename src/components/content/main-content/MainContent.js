import React, { useState, useEffect } from 'react';
import './MainContent.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import { IMAGE_URL } from '../../../services/movies.service';

const MainContent = (props) => {
  const { list } = props;
  const imagesArray = [
    {
      url: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 7.5
    },
    {
      url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 6.5
    },
    {
      url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 2.5
    },
    {
      url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      rating: 9.5
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [slides, setSlides] = useState([]);
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`
        }
      ];
      setSlides(IMAGES);
    }
    // eslint-disable-next-line
  }, []);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={slides} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate paginate={paginate} currentPage={currentPage} totalPages={10} />
        </div>
      </div>
      <Grid images={imagesArray} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(MainContent);
