import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import BasicPagination from "../components/BasicPagination";
import Content from "../components/content/Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50px",
  },
}));

const Search = () => {
  const classes = useStyles();

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <div className="search">
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            //value={}
            onChange={(e) => setSearchText(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            labelWidth={60}
            onKeyPress={(e) => {
              if (e.key === "Enter") fetchSearch();
            }}
          />
        </FormControl>
      </div>
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
        {searchText && !content && <h2>No Movies Found</h2>}
      </div>
      {numOfPages > 1 && (
        <BasicPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
