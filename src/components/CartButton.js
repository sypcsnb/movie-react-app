import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { DataContext } from "./DataProvider";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CartButton({ content }) {
  const classes = useStyles();

  const [movieName, setMovieName] = useContext(DataContext);

  const handleClick = () => {
    setMovieName(content.title);
  };

  return (
    <div>
      <Button
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
