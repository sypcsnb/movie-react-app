import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const BasicPagination = ({ setPage, numOfPages }) => {
  const classes = useStyles();

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={numOfPages}
        color="primary"
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};
export default BasicPagination;
