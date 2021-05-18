import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AmountHandleButton from "./AmountHandleButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const CartContent = ({ id, name }) => {
  const classes = useStyles();

  return (
    <div>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <ListItem button>
          {name}
          <ListItemText />
          <AmountHandleButton />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default CartContent;
