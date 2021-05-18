import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Content from "../components/content/Content";
import BasicPagination from "../components/BasicPagination";
import Genres from "../components/Genres";
import useGenre from "../hooks/useGenre";
import { DataContext } from "../components/DataProvider";
import Search from "./Search";

const Movies = () => {
  const [page, setPage] = useState(1);
  //const { contents, pages } = useContext(DataContext);
  //const [content, setContent] = contents;
  //const [numOfPages, setNumOfPages] = pages;
  //const { status } = useContext(DataContext);
  //const [searchStatus, setSearchStatus] = status;
  //const [trendStatus, setTrendStatus] = useContext(DataContext);

  //console.log(searchStatus);

  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    console.log(data.results);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    //setTrendStatus(false);
  }, [page, genreforURL]);

  return (
    <div>
      <span className="page-title">DISCOVER MOVIES</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="popular">
        {content &&
          content.map((data) => (
            <Content
              key={data.id}
              id={data.id}
              poster={data.poster_path}
              title={data.title || data.name}
              date={data.first_air_date || data.release_date}
              media_type={data.media_type}
              vote_average={data.vote_average}
            />
          ))}
      </div>
      <BasicPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default Movies;
