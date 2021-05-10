import { Badge } from "@material-ui/core";
import ContentModal from "../contentmodal/ContentModal";
import "./Content.css";

const Content = ({ id, poster, title, date, vote_average }) => {
  console.log(id);
  return (
    <ContentModal id={id}>
      <Badge
        badgeContent={vote_average}
        color={
          vote_average > 8
            ? "secondary"
            : vote_average > 6
            ? "primary"
            : "error"
        }
      />
      <img
        className="poster"
        src={`${"https://image.tmdb.org/t/p/w300"}/${poster}`}
        alt={title}
      />
      <b className="content-title">{title}</b>
      <span className="date">{date}</span>
    </ContentModal>
  );
};

export default Content;
