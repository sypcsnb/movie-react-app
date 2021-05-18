import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //const [content, setContent] = useState([]);
  //const [numOfPages, setNumOfPages] = useState();
  //const [page, setPage] = useState(1);
  //const [searchText, setSearchText] = useState("");
  //const [searchStatus, setSearchStatus] = useState(false);
  //const [trendStatus, setTrendStatus] = useState(true);

  const [movieCartList, setMovieCartList] = useState([]);

  //console.log(movieName.title);

  useEffect(() => {
    const movieStore = JSON.parse(localStorage.getItem("movieStore"));
    if (movieStore) setMovieCartList(movieStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("movieStore", JSON.stringify(movieCartList));
  }, [movieCartList]);

  return (
    <DataContext.Provider value={[movieCartList, setMovieCartList]}>
      {props.children}
    </DataContext.Provider>
  );
};
