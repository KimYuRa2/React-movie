import React from "react";
import PropTypes from "prop-types"; // prop-types: prop을 넘길 때, prop이 적절하게 들어온건지 확인하는 것도 필요하다. (값이 안 들어오거나 적절하지 않거나 등을 판단하기 위함)
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movies__movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired, //* isRequired를 쓰면 꼭 받아야하는 prop임을 나타낸다. 필수적이지 않은 prop이라면 isRequired 생략 가능
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
