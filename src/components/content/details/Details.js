import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movies.service';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Details.scss';
import Rating from '../rating/Rating';
import Tabs from './tabs/Tabs';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Media from './media/Media';
import Crew from './crew/Crew';

const Details = (props) => {
  const { movie, getMovieDetails } = props;
  const { id } = useParams();
  const [details, setDetails] = useState();
  // const [credits, setCredits] = useState();
  // const [images, setImages] = useState();
  // const [videos, setVideos] = useState();
  // const [reviews, setReviews] = useState();

  useEffect(() => {
    if (movie.length === 0) {
      getMovieDetails(id);
    }
    setDetails(movie[0]);
    // setCredits(movie[1]);
    // setImages(movie[2]);
    // setVideos(movie[3]);
    // setReviews(movie[4]);
  }, [id, movie]);

  return (
    <>
      {details && (
        <div className="movie-container">
          <div
            className="movie-bg"
            style={{
              backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`
            }}
          ></div>
          <div className="movie-overlay"></div>
          <div className="movie-details">
            <div className="movie-image">
              <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title">
                  Avengers <span>12-27-2020</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    <li>Action</li>
                    <li>Comedy</li>
                    <li>SciFi</li>
                  </ul>
                </div>
                <div className="rating">
                  <Rating className="rating-stars" rating={5.5} totalStars={10} />
                  &nbsp;
                  <span>5.5</span> <p>(200) reviews</p>
                </div>
                <Tabs>
                  <div label="Overview">
                    <Overview />
                  </div>
                  <div label="Crew">
                    <Crew />
                  </div>
                  <div label="Media">
                    <Media />
                  </div>
                  <div label="Reviews">
                    <Reviews />
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Details.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  movie: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { getMovieDetails })(Details);
