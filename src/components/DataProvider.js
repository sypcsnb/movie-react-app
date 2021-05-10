import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //const [content, setContent] = useState([]);
  //const [numOfPages, setNumOfPages] = useState();
  //const [page, setPage] = useState(1);
  //const [searchText, setSearchText] = useState("");
  //const [searchStatus, setSearchStatus] = useState(false);
  //const [trendStatus, setTrendStatus] = useState(true);

  const [movieName, setMovieName] = useState([]);

  console.log(movieName.title);

  useEffect(() => {
    const movieStore = localStorage.getItem("movieStore");
    if (movieStore) setMovieName(movieStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("movieStore", JSON.stringify(movieName.title));
  }, [movieName]);

  return (
    <DataContext.Provider value={[movieName, setMovieName]}>
      {props.children}
    </DataContext.Provider>
  );
};
