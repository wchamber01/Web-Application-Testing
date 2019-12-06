//Button component will export to Dashboard
import React from "react";

const Button = props => {
  return (
    <div>
      <Button onClick={props.onClick}>{props.name}</Button>
    </div>
  );
};

export default Button;
