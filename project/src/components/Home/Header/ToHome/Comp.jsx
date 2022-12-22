import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "react-bootstrap";

const ToHomeComp = () => {
  return (
    <div>
      <div className="fN">
        <Link to="/">TESLA</Link>
        {/* <Button>ddd</Button> */}
      </div>
      <div className="fN">
        <Link to="/">Shop</Link>
      </div>
    </div>
  );
};

export default ToHomeComp;
