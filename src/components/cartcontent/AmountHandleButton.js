import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const AmountHandleButton = () => {
  const [counter, setCounter] = useState(1);
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        disabled={counter <= 0}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </Button>

      {<Button>{counter}</Button>}

      {
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </Button>
      }
    </ButtonGroup>
  );
};

export default AmountHandleButton;
