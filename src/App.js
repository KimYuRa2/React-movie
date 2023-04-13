import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // getMovies = async () => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios를 통해 요청
  //   console.log(movies.data.data.movies); // List-movies.json에서 필요한정보만 가져옴 (영화데이터리스트)
  // };
  getMovies = async () => {
    // 위 코드를 정리함
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies);

    // this.setState({ movies : movies });
    this.setState({ movies, isLoading: false }); // 위 코드를 축약 (ES6) + axios 요청 완료시 - isLoading : false로 설정
  };

  componentDidMount() {
    this.getMovies(); // 처음 render시,  ComponentDidMount 실행 => getMovies() 실행됨.
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading ...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
