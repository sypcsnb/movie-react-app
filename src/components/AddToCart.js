import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { DataContext } from "./DataProvider";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddToCart({ content }) {
  const classes = useStyles();
  const [addCartStatus, setAddCartStatus] = useState(false);

  //const titleList = useRef();

  const [movieCartList, setMovieCartList] = useContext(DataContext);

  const addedCart = movieCartList.filter((val) => val.id === content.id);

  console.log(addedCart);

  const handleClick = () => {
    //const movieStore = JSON.parse(localStorage.getItem("movieStore"));
    setAddCartStatus(true);

    setMovieCartList([
      ...movieCartList,
      { id: content.id, name: content.title, amount: 1 },
    ]);

    //localStorage.setItem("movieStore", JSON.stringify([movieName]));

    //localStorage.setItem("movieStore", JSON.stringify(movieName));
    console.log(movieCartList);
  };

  return addCartStatus || addedCart.length > 0 ? (
    <div>
      <Button
        disabled
        //ref={titleList}
        onClick={handleClick}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to Cart
      </Button>
    </div>
  ) : (
    <div>
      <Button
        //ref={titleList}
        onClick={handleClick}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to Cart
      </Button>
    </div>
  );
}
