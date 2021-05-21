import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { DataContext } from "../DataProvider";

const AmountHandleButton = ({ amount, id }) => {
  const [counter, setCounter] = useState(amount);
  const [movieCartList, setMovieCartList] = useContext(DataContext);

  const updateItem = (id, key, value) => {
    const index = movieCartList.findIndex((x) => x.id === id);
    const movieArr = movieCartList[index];
    movieArr[key] = value;
    setMovieCartList([
      ...movieCartList.slice(0, index),
      movieArr,
      ...movieCartList.slice(index + 1),
    ]);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        id={id}
        disabled={counter <= 0}
        onClick={() => {
          setCounter(counter - 1);
          updateItem(id, "amount", counter - 1);
        }}
      >
        -
      </Button>

      {<Button>{counter}</Button>}

      {
        <Button
          onClick={() => {
            setCounter(counter + 1);
            updateItem(id, "amount", counter + 1);
          }}
        >
          +
        </Button>
      }
    </ButtonGroup>
  );
};

export default AmountHandleButton;
