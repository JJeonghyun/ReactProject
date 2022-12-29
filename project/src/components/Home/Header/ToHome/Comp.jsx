import { Link } from "react-router-dom";

const ToHomeComp = () => {
  return (
    <div>
      <div className="fN">
        <Link to="/">TESLA</Link>
      </div>
      <div className="fN">
        <Link to="/">Shop</Link>
      </div>
    </div>
  );
};

export default ToHomeComp;
