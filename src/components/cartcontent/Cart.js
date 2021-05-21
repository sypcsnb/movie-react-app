import React, { useContext, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartContent from "./CartContent";
import { DataContext } from "../DataProvider";
import { Badge } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    "& h6": {
      fontWeight: "bold",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "right",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    "& span": {
      fontWeight: "bold",
    },
  },
}))(MuiDialogActions);

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: 2,
    top: -15,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [movieCartList, setMovieCartList] = useContext(DataContext);
  //console.log(movieCartList);

  const totalAmount = movieCartList.reduce(function (
    accumulator,
    movieCartList
  ) {
    return accumulator + movieCartList.amount;
  },
  0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <StyledBadge badgeContent={movieCartList.length} color={"secondary"} />
        <ShoppingCartIcon />
      </IconButton>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Order
        </DialogTitle>
        <DialogContent dividers>
          {movieCartList.map((data) => (
            <CartContent id={data.id} name={data.name} amount={data.amount} />
          ))}
        </DialogContent>
        <DialogContent dividers>Total {totalAmount}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
