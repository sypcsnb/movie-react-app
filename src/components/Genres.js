import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <div style={{ padding: "10px" }}>
      {selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          color="secondary"
          key={genre.id}
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          color="primary"
          key={genre.id}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
