import { useContext } from "react";
import { DataContext } from "../components/DataProvider";

const Cart = () => {
  const [movieName, setMovieName] = useContext(DataContext);

  return (
    <div>
      <span className="title">Movies Cart</span>
      <h6>{movieName.title}</h6>
    </div>
  );
};

export default Cart;
