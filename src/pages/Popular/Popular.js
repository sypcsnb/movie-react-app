import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Content from "../../components/content/Content";
import BasicPagination from "../../components/BasicPagination";
import "./Popular.css";
import { DataContext } from "../../components/DataProvider";
import Search from "../Search";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [trendStatus, setTrendStatus] = useContext(DataContext);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    console.log(data.results);

    setContent(data.results);
    //setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    setTrendStatus(true);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="page-title">POPULAR MOVIES</span>
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
      <BasicPagination setPage={setPage} numOfPages={10} />
    </div>
  );
};

export default Trending;
